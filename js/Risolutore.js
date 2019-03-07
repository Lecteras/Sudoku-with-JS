//variabili globali
var reg;
var contavolte=0;
var Elementi;
//Funzioni di validità
function VerificaCondizioneCentrale() {//02
    for(var x=1;x<=9;x++){
         for(var y=1;y<=9;y++){
            reg=CalcolaRegione(x,y);
            var posizione = "cella"+x+""+y+""+reg;
            var Cella = document.getElementById(posizione);
         if(r==1||r==3||r==6||r==9||(r==5&&c==5)||x==1||x==9||y==1||y==9){
             if(Cella.value!=""){
                return true;
            }
         }
        }
    }
    return false;
}
function VerificaCondizioneHerzberg () {//01
     Elementi=[1,2,3,4,5,6,7,8,9];
        for(var x=1;x<=9;x++){
         for(var y=1;y<=9;y++){
            reg=CalcolaRegione(x,y);

            var posizione = "cella"+x+""+y+""+reg;
            var Cella = document.getElementById(posizione);
            for(var t=0;t<Elementi.length;t++){
                if(Cella.value==Elementi[t]){
                    Elementi[t]=-1;
                  //  alert(Elementi);
                }
             Elementi.sort(function(a, b){return b-a});
                if(Elementi[1]==-1){//non in zero, perchè il th dice che ne bastano 8 su 9
                    Elementi=[];
                    return true;
                }
            }
         }
     }
     return false;
}
function VerificaRisolubilitaSudoku() {
    if(VerificaCondizioneHerzberg() && VerificaCondizioneCentrale()){//CN E CS per la risolubilità

            return BackTrackingSolver(Matrice);

    }else{
        return false;
    }
}
function VerificaRisolubilitaSudokuUtente(){
        if(VerificaCondizioneHerzberg() && VerificaCondizioneCentrale()){//CN E CS per la risolubilità

            return BackTrackingSolver(MatriceUtente);

    }else{
        return false;
    }
}

function InserisciCandidatiUnici() {//ricalcolo i candidati e se trovo dei candidati unici li inserisco
    CreaMatriceCandidati();
     for(var r=1;r<=9;r++){
         for(var c=1;c<=9;c++){
           if(MatriceCandidati[r][c].length==1 && MatriceCandidati[r][c].length!=0){
                var reg=CalcolaRegione(r,c);
                var posizione = "cella"+r+""+c+""+reg;
                var Cella = document.getElementById(posizione);
                Matrice[r][c]=MatriceCandidati[r][c];
                MatriceUtente[r][c]=Matrice[r][c];
                InserisciCandidatiUnici();
            }

         }
     }
    CreaMatriceCandidati();//Creo la matrice finale dei candidati, non più unici
}
function ValidaRigheColonneMatrice(Mat,riga, colonna,regione,valore){

    for(var i=1; i<=9;i++){
        for(var j=1;j<=9;j++){
            var r = CalcolaRegione(i,j);
            if(i==riga && j!=colonna && Mat[i][j]!="" && Mat[i][j]==valore){
                 return false;
            }
            if(j==colonna && i!=riga && Mat[i][j]!="" && Mat[i][j]==valore ){;
                return false;
            }
        }
    }
    return true;

}
function ValidaRegioneMatrice(Mat,riga, colonna,regione,valore) {
    for(var i=1; i<=9;i++){
        for(var j=1;j<=9;j++){
            var r = CalcolaRegione(i,j);
            if(r==regione ){
                if(Mat[i][j]==valore && Mat[i][j]!="" && (i!=riga||j!=colonna)){
                 //   alert("errore regione "+r);
                    return false;
                }
            }
        }
    }
    return true;
}
function VerificaCellaMatrice(Mat,riga, colonna,regione,valore) {
    return (ValidaRegioneMatrice(Mat,riga, colonna,regione,valore) && ValidaRigheColonneMatrice(Mat,riga, colonna,regione,valore));
}
function CalcolaPosizioniSudokuUtenteVuote(){
      for(var i=1; i<=9;i++){
        for(var j=1;j<=9;j++){
            var r = CalcolaRegione(i,j);
            var posizione = "cella"+i+""+j+""+r;
            var Cella = document.getElementById(posizione);
            if(Cella.value==""){
                return false;
            }
        }
    }
    return true;
}
function CalcolaCelleVuote(Mat){
     for(var r=1;r<=9;r++){
         for(var c=1;c<=9;c++){
            if(Mat[r][c]==""){
            r+""+c;
            return r+""+c;
            }
        }
    }
    return 0;
} 

function BackTrackingSolver(Matr) {
    var r;
    var c;
    var rc;
    if(CalcolaCelleVuote(Matr)==0){//non ci sono più celle vuote
                return true;
            }
    rc=CalcolaCelleVuote(Matr);
    r=rc.charAt(0);
    c=rc.charAt(1);
     for(var n=1;n<=9;n++){
        Matr[r][c]=n;
        if(VerificaCellaMatrice(Matr,r, c,CalcolaRegione(r,c),n)) {
                if(BackTrackingSolver(Matr)){
                    return true;
                }
        }else{
            Matr[r][c]="";
        }
    }
    return false;
}


function RisolviSudoku(){ 
    InserisciCandidatiUnici();//inserisco i candidati unici, per diminuire lo spazio delle soluzioni
    BackTrackingSolver(Matrice);
    AggiornaSudoku();
  /*  if(GameStarted){//commenta questa parte per verificare le funzioni ajax per battere i record
	clearInterval(clock);
    DisabilitaTutteLeCelle();
    DisabilitaBottoniTimer();
	}*/
}

function SolveOne(){
    //alert(MatriceUtente);
//calcolo una posizione vuota all'inizio del gioco
    var index,PosizioneCellaVuotaCasuale,Cella,i,j;
    if(conflitti.length!=0){
        alert("Rimuovi i conflitti prima di procedere!");
        return;
    }
    if(CalcolaPosizioniSudokuUtenteVuote()){//non ci sono più celle vuote
        alert("Il sudoku è già completo!");
                return;
            }
//scelgo una posizione casuale dal vettore calcolato ad inizio gioco
    index=Math.floor((Math.random() * PosizioniVuoteIniziali.length) + 0);
    PosizioneCellaVuotaCasuale=PosizioniVuoteIniziali[index];
    PosizioniVuoteIniziali.splice(index,1);//rimuovo la posizione
//Inserisco il valore corretto dalla soluzione
    i=PosizioneCellaVuotaCasuale.charAt(0);
    j=PosizioneCellaVuotaCasuale.charAt(1);
    Cella=document.getElementById("cella"+PosizioneCellaVuotaCasuale);
    Cella.value=Matrice[i][j];
    Cella.style.WebkitAnimationPlayState = "running";

    MatriceUtente[i][j]=Matrice[i][j];
//pealizzo l'utente con un minuto in più
PenalizzaUtente();
}








/*
01:per il th di Herzberg un sudoku ha una soluzione(Almeno 1) se presenta all'inizio del gioco almeno 8 dei 9 numeri. 
    Se non verifica questa condizione il Sudoku è impossibile da risolvere. Devo quindi, ogni volta che elimino una cella,
    verificare intanto che soddisfi questa, poi che sia ancora risolvibile.  
    E' quindi una condizione necessaria e sufficiente alla risolvibilità. 
    L'unico modo matematico per verificare se la soluzione è unica invece attualmente è la semplice risoluzione
02:un altro requisito è che il sudoku abbia almeno una cella visibile all'interno della regione 
    contrassegnata da https://upload.wikimedia.org/wikipedia/en/2/2a/Mask_of_non_legal_sudoku.JPG
03:Verificare se il sudoku ha ancora una soluzione UNICA è un problema NP. Non eesistono criteri matematici da guardare,
condizioni da rispettare per garantire l'unicità. I due criteri prima esposti (th di herzberg) garantiscono che esiste una 
soluzione, non che sia unica. L'unica via è risolvere il sudoku e vedere se rimuovendo quelle 2 celle ho ancora una soluzione unica.

/(devo chiedere se va bene creare sudoku con più soluzioni e poi all'utente lasciarne una qualunque)
*/
