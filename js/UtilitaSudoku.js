
//Variabili Globali
//Variabili per gestione conflitti**
var conflitti = new Array();
conflitti=[];
//Variabili per gestione candidati**
var Tabellacandidati;
var CandidatoDaInserire;//contiene il candidato che volta volta l'utente vuole inserire
var posCellaCandidata;//posizione della cella su cui sta lavorando l'utente
//Variabili per gestione Tempo**
var clock;
var secondi=0;
var minuti=0;
var ore=0;
var contatore;
var gamePaused=0;
var TempoTrascorso=0;
//*******************************************************FUNZIONI DI UTILITA'**********************************************************
function PenalizzaUtente(){
minuti++;
var Timer = document.getElementById("Timer");
Timer.style.WebkitAnimationPlayState="running";
    setTimeout(function(){ 
        Timer.style.color="black";
        Timer.style.WebkitAnimationPlayState="initial";
        Timer.style.WebkitAnimationPlayState="paused";
        Timer.style.color="black";
}, 2001);
}
function updateButtonStatus()
	{
		var button = document.getElementById("PlayTime");
		button.disabled = !button.disabled;	
	}	
function DisabilitaSudoku(){
	gamePaused=1;//gioco in pausa
	var sudoku=document.getElementById("TableSudoku");
	var BtnSolveOne= document.getElementById("BtnSolveOne");
	var BtnSolveAll=document.getElementById("BtnSolveAll");
	sudoku.style.zIndex="-2";
	sudoku.style.opacity = "0.5";
	BtnSolveOne.disabled = true;
	BtnSolveOne.style.opacity="0.5";
	BtnSolveAll.disabled = true;
	BtnSolveAll.style.opacity="0.5";
}
function AbilitaSudoku(){
	gamePaused=0;
	var sudoku=document.getElementById("TableSudoku");
	var BtnSolveOne= document.getElementById("BtnSolveOne");
	var BtnSolveAll=document.getElementById("BtnSolveAll");
	sudoku.style.zIndex="0";
	sudoku.style.opacity = "1";
	BtnSolveOne.disabled = false;
	BtnSolveOne.style.opacity="1";
	BtnSolveAll.disabled = false;
	BtnSolveAll.style.opacity="1";
}
function DisabilitaBottoniTimer(){
    var buttonPlay = document.getElementById("PlayTime");
     var buttonStop = document.getElementById("StopTime");
		buttonPlay.disabled = true;	
		buttonStop.disabled=true;
}
function AbilitaBottoniTimer(){
	    var buttonPlay = document.getElementById("PlayTime");
     var buttonStop = document.getElementById("StopTime");
		buttonPlay.disabled = false;	
		buttonStop.disabled=false;
}
function MostraClearButton(posButton,PosCella){
	var cella=document.getElementById("cella"+PosCella);
	if(cella.value!=null && cella.value!=""){
	document.getElementById("ClearButton"+posButton).style.visibility="visible"; 	
	}
}
function NascondiClearButton(posButton,posCella){
	MostraCella(posCella);
	document.getElementById("ClearButton"+posButton).style.visibility="hidden";
}
function MostraCella(pos){
	var Cella = document.getElementById("cella"+pos);
	Cella.style.visibility="visible";
}

function ModificaGriglia(){//Modifica i css della griglia
	for(i=1; i<=9;i++){
		for(j=1;j<=9;j++){
			var r = CalcolaRegione(i,j);
			var posizione = "cella"+i+""+j+""+r;
			var Cella = document.getElementById(posizione);
			Cella.style.border="groove";
			Cella.style.border="inset";
			if(j===3|| j==6){
				Cella.style.borderRightStyle="solid";
				Cella.style.borderRightWidth="3px";
			}
			if(i===3|| i==6){
				Cella.style.borderBottomStyle="solid";
				Cella.style.borderBottomWidth="3px";
			}
		}
	}
}
function AbilitaTutteLeCelle(){
	for(i=1; i<=9;i++){
		for(j=1;j<=9;j++){
			var r = CalcolaRegione(i,j);
			var posizione = "cella"+i+""+j+""+r;
			var Cella = document.getElementById(posizione);
			Cella.disabled="false";
		}
	}
}
function DisabilitaTutteLeCelle(){
	for(i=1; i<=9;i++){
		for(j=1;j<=9;j++){
			var r = CalcolaRegione(i,j);
			var posizione = "cella"+i+""+j+""+r;
			var Cella = document.getElementById(posizione);
			Cella.disabled="true";
		}
	}
}

function ClearCella(pos){//Cliccando su clearCella, ripulisce la cella e verifica i conflitti
	document.getElementById("cella"+pos).value="";
	CheckCella(pos);
	VerificaConflitti(pos);
}
function CreaClearButton(ClearB){
	var ClearButton = document.createElement("Button");
			ClearButton.setAttribute("class","ClearButton");
			ClearButton.setAttribute("id","ClearButton"+ClearB);
			ClearButton.style.visibility="hidden";
			ClearButton.innerHTML="X";
	return ClearButton;
}
		
//*******************************************************funzioni di utilità di calcolo, blocco ed aggiornamento*******************************************************
function ResettaAnimazioniCelle(){//al riavvio ripristina le animazioni delle celle per il bottone solve one
	for(var i=1; i<=9;i++){
				for(var j=1;j<=9;j++){
			var r = CalcolaRegione(i,j);
			var posizione = i+""+j+""+r;
			var cella = document.getElementById("cella"+posizione);
			cella.style.WebkitAnimationPlayState="paused";
				cella.style.WebkitAnimationPlayState="initial";
				cella.style.WebkitAnimationPlayState="paused";
			cella.style.animationIterationCount="1";
				}
			}
}
function CalcolaPosizioniInizialiVuote(){
	 	for(var i=1; i<=9;i++){
				for(var j=1;j<=9;j++){
  		  if( MatriceUtente[i][j]==""|| MatriceUtente[i][j]==null){
  			var r = CalcolaRegione(i,j);
			var posizione = i+""+j+""+r;
       		PosizioniVuoteIniziali.push(posizione);
        	}
    	}
	}
	
}
function BloccaCelleIniziali(){
			for(var i=1; i<=9;i++){
				for(var j=1;j<=9;j++){
					var r = CalcolaRegione(i,j);
					var posizione = i+""+j+""+r;
					var cella = document.getElementById("cella"+posizione);
					if(cella.value!=""&& cella.value!=null){
					cella.disabled = true;
					cella.style.backgroundColor="white";
					cella.style.color="black";
						}else{
							cella.disabled=false;
						}
				cella.style.backgroundColor="white";
				}
			}
}
function SbloccaCelle(){//da richiamare al reset del gioco dopo una partita
			for(var i=1; i<=9;i++){
				for(var j=1;j<=9;j++){
					var r = CalcolaRegione(i,j);
					var posizione = i+""+j+""+r;
					var cella = document.getElementById("cella"+posizione);
					cella.disabled = false;
				}
			}
}

function SceltaLivello(pos){//al click dell'utente inizializza il livello di gioco
		    var y = document.getElementById("Livelli");
			var x =y.getElementsByTagName("li");
		for(var i=0;i<x.length;i++){
			if(x[i].id==("livello"+""+pos)){
				LivelloAttuale=x[i].innerHTML.toString().replace(" ","");
				x[i].style.color="black";
				x[i].style.backgroundColor="white";	
			}else{
				x[i].style.color="white";
				x[i].style.backgroundColor="";
			}
		}
		//alert(LivelloAttuale);
	}
function CancellaSudoku(r,c){//cancella il sudoku a partire da una determinata posizione
			//alert("Cancello a partire da r: "+r +" "+c);
			for(var i=1; i<=9;i++){
				for(var j=1;j<=9;j++){
					if(i>=r && j>=c){
						var r = CalcolaRegione(i,j);
						var posizione = i+""+j+""+r;
						var cella = document.getElementById("cella"+posizione);
						cella.value="";
						Matrice[i][j]="";
					}
				}
			}
		}

//*************************************************Funzioni di calcolo**************************************************
function CalcolaTempodiGen(){
				switch (LivelloAttuale){
				case 'veryeasy':
					return 140;
				case 'easy':
					return 150;
				case 'medium':
					return 165;
				case 'tough':
					return 170;
				case 'extreme':
					return 180;
						}
	}

function CalcolaDifficoltà(){//a seconda del livello di gioco calcola quante celle eliminare del sudoku
			switch (LivelloAttuale){
				case 'veryeasy':
					return 32;
				case 'easy':
					return 30;
				case 'medium':
					return 28;
				case 'tough':
					return 26;
				case 'extreme':
					return 24;	}
			}

function CancellaCelleSudokuCompleto (){
	var NumeroCelleDaEliminare=81-CalcolaDifficoltà();
	var Temp1,Temp2;//memorizza la cella candidata per l'eliminazione e la reinserisce se non può essere eliminata
	var i,j,r,iSim,jSim,rSim,ijSim;
	var valido = false;
	var k=0;
	while(k<NumeroCelleDaEliminare){//serve while per verificare che tutte le posizioni siano diverse
//Calcolo 2 posizioni tra loro simmetriche
		 	i=Math.floor((Math.random() * 9) + 1);
		 	j=Math.floor((Math.random() * 9) + 1);
		 	r=CalcolaRegione(i,j);
		 	ijSim=(10-i)+""+(10-j);//simmetria pigreco
		 	iSim=ijSim.charAt(0);
		 	jSim=ijSim.charAt(1);
		 	rSim=CalcolaRegione(iSim,jSim);
		 	pos = i+""+j+""+r;
		 	posSim=iSim+""+jSim+""+rSim;
		 	valido=PosizioniScelte.every(VerificaUnicità);
//verifico che non siano già presenti tra quelle scelte
		 	if(valido){
		 		PosizioniScelte.push(pos);
				PosizioniScelte.push(posSim);
			}else{
				continue;//se ci sono parto dal prossimo ciclo
			}
//se non sono presenti provo a cancellarne una ad una e verifico di avere ancora una sola soluzione
		var Cella1=document.getElementById("cella"+pos);
		var Cella2=document.getElementById("cella"+posSim);
		Temp1=Cella1.value;//Mi salvo il valore per ripristinarlo in caso non si possa cancellaree
		Cella1.value="";
		Temp2=Cella2.value;
		Cella2.value="";
		AggiornaMatrice();//VerificaRisolubilità lavora sulla matrice, non direttamente sulla pagina! è necessario aggiornare sempre la matrice
		if(VerificaRisolubilitaSudoku()==false){
			Cella1.value=Temp1;//ripristino cella1
			Cella2.value=Temp2;//ripristino cella2
			AggiornaMatrice();
			//alert("Sudoku non valido, Cerco altre posizioni");
			PosizioniScelte.pop();
			PosizioniScelte.pop();
			continue; //non incremento e passo al ciclo successivo
		}
		k++;
		k++;
		}
		//alert("Ho eliminato "+ NumeroCelleDaEliminare+" celle ed ho scelto le seguenti posizioni: "+PosizioniScelte);
	}
function CalcolaCandidati(i,j,value){//data una cella calcola i possibili candidati, usata in InserisciCandidatiUnici
	if(value==""){
	var Candidati=new Array();
	var risultato;
	var PossibiliCandidati=[1,2,3,4,5,6,7,8,9];
	 for(var x=1;x<=9;x++){
         for(var y=1;y<=9;y++){
         	if(x==i||y==j||(CalcolaRegione(i,j)==CalcolaRegione(x,y))){//se sono nella stessa riga/colonna/regione e non sono vuoto
         		if(Matrice[x][y]!=""){
         	 for(var t=0;t<PossibiliCandidati.length;t++){
                if(Matrice[x][y]==PossibiliCandidati[t]){
                    PossibiliCandidati[t]=-1;
                }
            }
         		}
         	}
         }//for interno
     }
      for(t=0;t<PossibiliCandidati.length;t++){
          if(PossibiliCandidati[t]!=-1){
              Candidati.push(PossibiliCandidati[t]); 
           }
       }
       return Candidati;
	}//if value
	return "";
}
function CalcolaRegione(i,j){
	if(i<=3 ){
		if(j<=3){
			return "1";
		}
		if(j>3 && j<7){
			return "2";
		}
		if(j>=7){
			return "3";
		}
	}
	if(i>3 && i<7){
		if(j<=3){
			return "4";
		}
		if(j>3 && j<7){
			return "5";
		}
		if(j>=7){
			return "6";
		}
	}
	if(i>=7 && i<=9){
		if(j<=3){
			return "7";
		}
		if(j>3 && j<7){
			return "8";
		}
		if(j>=7){
			return "9";
		}
	}

}
//***************************************************funzioni di aggiornamento********************************
function AggiornaMatrice(){//Usata nella cancellazione delle celle dal sudoku completo inziale per verificarne la risolubilità
for(var x=1;x<=9;x++){
         for(var y=1;y<=9;y++){
            var reg=CalcolaRegione(x,y);
            var posizione = "cella"+x+""+y+""+reg;
            var Cella = document.getElementById(posizione);
            Matrice[x][y]=Cella.value;
         }
     }
}
function AggiornaSudoku(){
     for(var x=1;x<=9;x++){
         for(var y=1;y<=9;y++){
            var reg=CalcolaRegione(x,y);
            var posizione = "cella"+x+""+y+""+reg;
            var Cella = document.getElementById(posizione);
            Cella.value=Matrice[x][y];
            Cella.style.backgroundColor="white";
         }
     }
}

function AggiornaMatriceUtente(){//crea la matrice Utente, sovrapposta al sudoku su cui lavora il risolutore
		var righe=colonne = 9;
		for (var i = 1; i <= colonne; i++)
		{
			for (var j = 1; j <= righe; j++)
			{	var regione=CalcolaRegione(i,j);
				var posizione = "cella"+i+""+j+""+regione;
				var Cella = document.getElementById(posizione);
				MatriceUtente[i][j] = Cella.value;	
			}
		}
}

//***************************************************************FUNZIONI SULLA VALIDITA' DELLE CELLE*******************************************************

function ValidaRegione(riga,colonna,regione,valore,id){//insieme a quella sotto modifica e colora di rosso in caso di conflitti
	var conta =0;
	var GiàTrovato=0;
	for(var i=1; i<=9;i++){
		for(var j=1;j<=9;j++){
			var r = CalcolaRegione(i,j);
			var posizione = i+""+j+""+r;
			var cella = document.getElementById("cella"+posizione);
			if(r==regione ){
				if(cella.value==valore && cella.value!="" && cella.id!=id){
					conta=1;
					var len = conflitti.length;
					for (t = 0; t < len; t++) {
						if(conflitti[t]==posizione){
							GiàTrovato=1;
						}
					}
					if(GiàTrovato!=1){
						conflitti.push(i+""+j+""+CalcolaRegione(i,j));
					}else{
						GiàTrovato=0;
					}
					cella.style.background="red";
				}

			}
		}
	}
	if(conta!=0){
		return false;
	}else{
		return true;
	}
}
function ValidaRigheColonne(riga,colonna,valore,id){
	var NonValido;
	var GiàTrovato;
	for(var i=1; i<=9;i++){
		for(var j=1;j<=9;j++){
			var r = CalcolaRegione(i,j);
			var posizione = i+""+j+""+r;
			var cella = document.getElementById("cella"+posizione);
			if(i==riga && j!=colonna && cella.value!="" && cella.value==valore && cella.id!=id){
				var len = conflitti.length;
				for (t = 0; t < len; t++) {
					if(conflitti[t]==posizione){
						GiàTrovato=1;
					}
				}
				if(GiàTrovato!=1){
					conflitti.push(i+""+j+""+CalcolaRegione(i,j)); 
				}else{
					GiàTrovato=0;
				}
				cella.style.background="red";
				NonValido=1;
			}
			if(j==colonna && i!=riga && cella.value!="" && cella.value==valore && cella.id!=id){
				var len = conflitti.length;
				for (t = 0; t < len; t++) {
					if(conflitti[t]==posizione){
						GiàTrovato=1;
					}
				}
				if(GiàTrovato!=1){
					conflitti.push(i+""+j+""+CalcolaRegione(i,j)); 
				}else{
					GiàTrovato=0;
				}
				cella.style.background="red";
				NonValido=1;
			}
		}
	}
	if(NonValido==1){
		return false;
	}else{
		return true;
	}
}

function ValidaCella(i,j,valore,id){//valida la cella sulle righe e sulle colonne
		return ValidaInserimentoRigheColonne(i,j,valore,id) && ValidaInserimentoRegione(i,j,CalcolaRegione(i,j),valore,id);
	}

function ValidaInserimentoRegione(riga,colonna,regione,valore,id){//Verifica, all'atto della creazione del sudoku che un valore sia valido
		var conta =0;
		var GiàTrovato;
		for(var i=1; i<=9;i++){
			for(var j=1;j<=9;j++){
				var r = CalcolaRegione(i,j);
				var posizione = i+""+j+""+r;
				var cella = document.getElementById("cella"+posizione);
				if(r==regione ){
					if(cella.value==valore && cella.value!="" && cella.value!=null && cella.id!=id){
						conta=1;
						var len = conflitti.length;
						for (t = 0; t < len; t++) {
							if(conflitti[t]==posizione){
								GiàTrovato=1;
							}
						}
						if(GiàTrovato!=1){
							conflitti.push(i+""+j+""+CalcolaRegione(i,j)); 
							cella.style.background="red";
						}
						
					}

				}
			}
		}
		if(conta!=0){
			return false;
		}else{
			return true;
		}
	}
function ValidaInserimentoRigheColonne(riga,colonna,valore,id){
		var NonValido;
		var GiàTrovato;
		for(var i=1; i<=9;i++){
			for(var j=1;j<=9;j++){
				var re = CalcolaRegione(i,j);
				var posizione = i+""+j+""+re;
				var cella = document.getElementById("cella"+posizione);
				if(i==riga && j!=colonna && cella.value!="" && cella.value!=null && cella.value==valore && cella.id!=id){
					var len = conflitti.length;
					for (t = 0; t < len; t++) {
						if(conflitti[t]==posizione){
							GiàTrovato=1;
						}
					}
					if(GiàTrovato!=1){
						conflitti.push(i+""+j+""+CalcolaRegione(i,j)); 
						cella.style.background="red";
					}
					NonValido=1;
				}
				if(j==colonna && i!=riga && cella.value!="" && cella.value!=null  && cella.value==valore && cella.id!=id){
					var len = conflitti.length;
					for (t = 0; t < len; t++) {
						if(conflitti[t]==posizione){
							GiàTrovato=1;
						}
					}
					if(GiàTrovato!=1){
						conflitti.push(i+""+j+""+CalcolaRegione(i,j)); 
						cella.style.background="red";
					}
					NonValido=1;
				}
			}
		}
		if(NonValido==1){
			return false;
		}else{
			return true;
		}
	}
function VerificaUnicità(ElementoArray){//riga 174, verifica di non sceglire 2 volte le stesse posizioni
		return ((ElementoArray !=pos)&&(ElementoArray!=posSim));
	}

function VerificaConflitti(){
	var len = conflitti.length-1;
	for (q = len; q>=0; q--) {
		var Cella = document.getElementById("cella"+conflitti[q]);
		var ij = conflitti[q].toString();
		var t = ij.charAt(0);//riga
		var j = ij.charAt(1);//colonna
		var r =ij.charAt(2);//regione
		if(ValidaRigheColonne(t,j,Cella.value,Cella.id)==false || ValidaRegione(t,j,r,Cella.value,Cella.id)==false){
			Cella.style.background="red";
		}else{
			Cella.style.background="white";
			var temp = conflitti[q].toString();//salvo l'elemento verificato
			conflitti[q]=conflitti[conflitti.length-1];//sposto l'ultimo al suo posto
			conflitti[conflitti.length-1]=temp;//lo metto infondo
			conflitti.pop();//lo elimino
		}
	}
}

//************************************************************************Funzioni Di controllo**************************************************************
function CheckCella(pos){
	var ij = pos.toString();
	var i = ij.charAt(0);
	var j = ij.charAt(1);
	var Cella = document.getElementById("cella"+pos);
	var valido;
	if(ValidaRigheColonne(i,j,Cella.value,Cella.id)==false|| ValidaRegione(i,j,CalcolaRegione(i,j),Cella.value,Cella.id)==false){
		Cella.style.background="red";
		valido=false;
	}else{
		Cella.style.background="white";
		VerificaConflitti();
		valido=true;
	}
	return valido;
}
//********************************************************************Funzioni Gestione Tempo***********************************************************
function ScorriTempo(){
	contatore = contatore+1;
			var i;
	secondi = (secondi+1)%60;
	if(secondi==0)
		{
		minuti = (minuti+1)%60;
		if(minuti==0)
			{
				ore = (ore+1)%24;
				}
			}
	var Timer = document.getElementById("Timer");
	Timer.value=(((ore!=0)?ore+":":"")+((minuti<10)?"0"+minuti:minuti)+":"+((secondi<10)?"0"+secondi:secondi));
	TempoTrascorso=Timer.value;
}

function StopTimer(){
	if(GameStarted){
	clearInterval(clock);
	updateButtonStatus();
	DisabilitaSudoku();
	}
	var Timer = document.getElementById("Timer");
    Timer.style.color="black";
}
function PlayTimer(){
	if(GameStarted){
	clock= setInterval(ScorriTempo,1000);
	updateButtonStatus();
		var Timer = document.getElementById("Timer");
    Timer.style.color="black";
	AbilitaSudoku();
	}	
}
//********************************************************************Funzioni di Inserimento***********************************************************
function InserisciCandidato(val){
var Cella = document.getElementById("cella"+posCellaCandidata);
Cella.value=val;
	Tabellacandidati.style.visibility="hidden";
	Cella.style.visibility="visible";
	CheckCella(posCellaCandidata);//verifico che il valore inserito dall'utente non crei conflitti
	if(CheckCella(posCellaCandidata)==true && CalcolaPosizioniSudokuUtenteVuote()){//L'utente ha risolto il sudoku
		//alert("Sudoku completato, bravo!");//PROSSIMO STEP!!!!!!! e capire se solve all funziona sempre 
		AggiornaClassificaUtente();
	}
}
function CreaCandidati(){//crea la tabella con i candidati visibili all'utente
	var TabCand = document.createElement("TABLE");
	TabCand.setAttribute("id","TabellaCandidati");
	var ValoreCandidato=1;
	for(r=0; r<3;r++){
		var row = document.createElement("TR");
		for (t=0; t<3;t++){
			var candidato = document.createElement("TD");
			candidato.innerHTML=ValoreCandidato;
			candidato.setAttribute("ondblclick","InserisciCandidato("+ValoreCandidato+")");
			candidato.setAttribute("id","Candidato"+ValoreCandidato++);
			candidato.setAttribute("class","Candidati");
			row.appendChild(candidato);
		}
		TabCand.appendChild(row);
	}
	return TabCand;
}
function StampaConflitti(){
	//alert("conflitti: "+conflitti+ "Matrice: "+ Matrice);
}
function VerificaGioco(pos){
	if(gamePaused){//se il gioco  è in pausa
	var Cella = document.getElementById("cella"+pos);
	Cella.value="";
	}
}
function VisualizzaCandidati(pos){
	if(!gamePaused){//se il gioco non è in pausa
	var Casella = document.getElementById("casella"+pos);
	var Cella = document.getElementById("cella"+pos);
	posCellaCandidata=pos;
	Casella.appendChild(Tabellacandidati);
	Tabellacandidati.style.visibility="visible";
	Cella.style.visibility="hidden";
	}

}

//*******************************************************funzioni sulla classifica*******************************************************
function AggiornaClassificaUtente(){//chiamata da InserisciCandidato dopo aver verificato che il sudoku è completo e valido
	clearInterval(clock);
	var punteggioAttuale=document.getElementById("Difficolta"+LivelloAttuale);
	var username=document.getElementById("UsernameUtente").innerHTML.toString().replace(' ', '');
	var Timer = document.getElementById("Timer");
	var tempo=Timer.value.toString().replace(' ', '');
//verifico se supera il record:
//prendo i valori interi dei minuti e dei secondi
var minDB="";
var secDB="";
var minPlay="";
var secPlay="";

var pos1 = punteggioAttuale.value.toString().lastIndexOf(":");
var pos2 = tempo.lastIndexOf(":");
for(var i=0; i<pos1;i++){
	minDB+=""+punteggioAttuale.value.toString().charAt(i);
}
for(var i=pos1+1; i< punteggioAttuale.value.toString().length;i++){
	secDB+=""+punteggioAttuale.value.toString().charAt(i);
}
for(var i=0; i<pos2;i++){
	minPlay+=""+tempo.charAt(i);
}
for(var i=pos2+1; i< tempo.length;i++){
	secPlay+=""+tempo.charAt(i);
}
//inserisco la partita nello storico delle partite
var r = confirm("Vuoi salvare la partita nel tuo storico partite?");
    if (r == true) {
        var d = new Date();
    var Today = d.getFullYear()+"/"+(((parseInt(d.getMonth())+1)<10)?"0"+(parseInt(d.getMonth())+1):(parseInt(d.getMonth())+1))+"/"+(((parseInt(d.getDate()))<10)?"0"+(parseInt(d.getDate())):(parseInt(d.getDate())));
    //alert(Today);
    	function useHttpResponse(parametro, rispostaAjax){
		if(rispostaAjax!=0){
			alert("Partita Salvata");
		}else{
			alert("Errore durante il salvataggio");
		}
	}
	AjaxManager.performAjaxRequest('POST','./ajax/InserisciStoricoPartite.php','user='+username+'&score='+tempo+'&LivelloGioco='+LivelloAttuale+'&Data='+Today,useHttpResponse, null);

}
//guardo se sono maggiori del tempo impiegato o se sono uguali a zero (primo record)
	if((minDB=='00' && secDB=='00')|| parseInt(minDB)>parseInt(minPlay) || (parseInt(minDB)==parseInt(minPlay) && parseInt(secDB)>parseInt(secPlay))){//se non aveva un record || il record vecchio era maggiore || il record vecchio era uguale ma i secondi maggiori
	punteggioAttuale.value=tempo;
	
	AjaxManager.performAjaxRequest('POST','./ajax/Classifica.php','user='+username+'&score='+tempo+'&LivelloGioco='+LivelloAttuale,useHttpResponse, null);
	}
	

}

function CaricaClassificheUtente(){
	var username=document.getElementById("UsernameUtente").innerHTML.toString().replace(' ', '');

	function useHttpResponse(parametro, rispostaAjax){
		var punteggi=rispostaAjax.toString();
		 var res= punteggi.replace(/[^0-9 ,:]+/g, "");
		var QueryResult = res.split(",");
		var tempoveryeasy=QueryResult[0].slice( 1 );
		var tempoeasy=QueryResult[1].slice( 1 );
		var tempomedium=QueryResult[2].slice( 1 );
		var tempotough=QueryResult[3].slice( 1 );
		var tempoextreme=QueryResult[4].slice( 1 );
		document.getElementById("Difficoltaveryeasy").value=tempoveryeasy;
		document.getElementById("Difficoltaeasy").value=tempoeasy;
		document.getElementById("Difficoltamedium").value=tempomedium;
		document.getElementById("Difficoltatough").value=tempotough;
		document.getElementById("Difficoltaextreme").value=tempoextreme;
}
AjaxManager.performAjaxRequest("GET","./ajax/CaricaClassifica.php?user="+username,null,useHttpResponse,null);
}

function begin(){
	CreaSudoku();
	ModificaGriglia();
	Tabellacandidati= CreaCandidati();
	ModificaLayout();
	DisabilitaTutteLeCelle();
	CaricaClassificheUtente();
}
