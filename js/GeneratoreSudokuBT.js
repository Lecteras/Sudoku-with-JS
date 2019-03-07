//Variabili Globali
		var LivelloAttuale;
		var Matrice;
		var MatriceUtente;
		var MatriceCandidati;
		var pos;//posizione temp da validare
		var posSim;
		var PosizioniScelte=new Array();
		var GameStarted=false;
		var TempoGen;
		var NuovoTentativo=0;
		var ValoreNonValido=0;
		var tentativi= new Array();
		var TempoDiGenerazione=0;
		var PosizioniVuoteIniziali=new Array();

//funzioni di creazione
function CreaMatrice(){//crea la matrice, sovrapposta al sudoku su cui lavora il risolutore
		var righe=colonne = 9;
		Matrice = new Array(colonne + 1);
		for (var i = 1; i <= colonne; i++)
		{
			Matrice[i] = new Array(righe + 1);
			for (var j = 1; j <= righe; j++)
			{	
				Matrice[i][j] = "";	
			}
		}
}
function CreaMatriceUtente(){//Matrice che contiene la proposta iniziale all'utente
	var righe=colonne = 9;
		MatriceUtente = new Array(colonne + 1);
		for (var i = 1; i <= colonne; i++)
		{
			MatriceUtente[i] = new Array(righe + 1);
			for (var j = 1; j <= righe; j++)
			{
				MatriceUtente[i][j] = "";
			}
		}
}
function CreaMatriceCandidati(){//crea la matrice, sovrapposta al sudoku con i candidati di ogni cella. Usata nel BT
		var righe=colonne = 9;
		MatriceCandidati = new Array(colonne + 1);
		for (var i = 1; i <= colonne; i++)
		{
			MatriceCandidati[i] = new Array(righe + 1);
			for (var j = 1; j <= righe; j++)
			{	
				MatriceCandidati[i][j]= new Array();
				MatriceCandidati[i][j]=CalcolaCandidati(i,j,Matrice[i][j]);
			}
		}
	}
function CreaSudoku(){

	Griglia = document.getElementById("Griglia9x9");
	var Sudoku = document.createElement("TABLE");
	Sudoku.setAttribute("class", "Sudoku");
	Sudoku.setAttribute("id","TableSudoku");
	var ClearB=0;//id per i clearButton
	for(i=1; i<=9;i++){
		var row = document.createElement("TR");
		for(j=1;j<=9;j++){
			var casella = document.createElement("TD");
			var ClearButton = CreaClearButton(ClearB);
			var cella = document.createElement("INPUT");
			var r = CalcolaRegione(i,j);
			var posizione = i+""+j+""+r;
			casella.appendChild(cella);
			casella.setAttribute("id","casella"+i+""+j+""+r);
			casella.setAttribute("class","Casella")
			cella.id = "cella"+i+""+j+""+r;
			cella.setAttribute("class", "Cella");
			cella.value="";	
			cella.setAttribute("onclick","VisualizzaCandidati("+posizione+")");
			casella.setAttribute("onkeyup","VerificaGioco("+posizione+")");
			cella.setAttribute("onmouseenter","MostraClearButton("+ClearB+","+posizione+")");
			casella.setAttribute("onmouseleave","NascondiClearButton("+ClearB+","+posizione+")");
			ClearB++;
			ClearButton.setAttribute("onclick","ClearCella("+posizione+")");
			casella.appendChild(ClearButton);
			casella.appendChild(cella);
			row.appendChild(casella);
		}
		Sudoku.appendChild(row);
	}
	Griglia.appendChild(Sudoku);
}

function CreaSudokuCompleto(){//crea una griglia completa valida
		var currentTime = Date.now();
		TempoDiGenerazione=CalcolaTempodiGen();
		var currentTimeFine;
		var Tentativi=0;
	for(var x=1;x<=9;x++){
		for(var y=1;y<=9;y++){			
			currentTimeFine=  Date.now();
			if((currentTimeFine-currentTime)>TempoDiGenerazione){
				//alert("Tempo:" +TempoGen);
				tentativi.push((currentTimeFine-currentTime));
				currentTime = Date.now();
				currentTimeFine=0;
//riparto da capo
				y=1;
				x=1;
				CancellaSudoku(x,y);
					}	
			var regione=CalcolaRegione(x,y);
			var posizione = "cella"+x+""+y+""+regione;
			var Cella = document.getElementById(posizione);
			Cella.value=Math.floor((Math.random() * 9) + 1);
					//alert("Posizione Cella "+ posizione+ " "+ Cella.value);
			if ( !ValidaCella(x,y,Cella.value,Cella.id)){//Valore Scelto Casualmente non valido
				ValoreNonValido=1;
					for(k=1;k<=9;k++){//Tento tutti i candidati
						if ( ValidaCella(x,y,k,Cella.id)){
							Cella.value=k;
							ValoreNonValido=0;
							NuovoTentativo=(NuovoTentativo>10)?0:NuovoTentativo;
							break;
						}			
					}
				if(ValoreNonValido==1){//Se nessun candidato può essere inserito, BACKTRACKING
					ValoreNonValido=0;
					NuovoTentativo++;//incremento i tentativi effettuati
					y=(y-NuovoTentativo>0)?y-NuovoTentativo:1;//Torno indietro di tante colonne quanti sono i tentativi
					CancellaSudoku(x,y);//Cancello i valori da ricalcolare
					y--;//per ripartire dalla colonna corretta	
					}
				}//if cella valida
			}//for interno
		}//for esterno
		currentTimeFine=  Date.now();
		//alert("Tempo impiegato: "+ (currentTimeFine-currentTime) +"ms Sono tornato indetro "+NumeroGenerazioniFallite+" volte ");  
		NumeroGenerazioniFallite=0;
		tentativi=[];
		conflitti=[];
	}

function StartGame(){
	if(!GameStarted && LivelloAttuale){//se non ho iniziato un gioco ed ho scelto un livello
		AbilitaTutteLeCelle();
		ModificaBottoneStart();
		GameStarted=true;
		CreaMatrice();
		CreaMatriceUtente();
		CreaSudokuCompleto();
		PlayTimer();
		CancellaCelleSudokuCompleto();//Rimuove le celle in posizioni e numero varie in base alla difficoltà
		AggiornaMatriceUtente();
		CalcolaPosizioniInizialiVuote();
		BloccaCelleIniziali(); 
	}else if(!LivelloAttuale){
openWindow();
			showResult("Non hai selezionato alcuna difficoltà");
				}else if(GameStarted){
					var domanda = confirm("Sei sicuro di voler iniziare una nuova partita?");
					if (domanda == true) {		
						ResettaGioco();
					}
				}

}
var _windowResult;
function openWindow() 
	{
		if ((_windowResult == null) || (_windowResult.closed)) 
		{
			_windowResult = window.open("", "Score", "width=200,height=150,resizable=yes,location=no,menubar=no,toolbar=no,titlebar=no");
			_windowResult.document.open();                                                          
			_windowResult.document.writeln('<!DOCTYPE html>');   
			_windowResult.document.writeln('<html lang="it">')
			_windowResult.document.writeln('<html><head><title>Result</title><style type="text/css">' +
				'#resultTextWindow{' + 
				'font-size:			24px;' + 
				'font-weight:		bold;' +
				'font-family:		"Arial","Serif";' +
				'color:				black;' +
				'font-weight: 		bold;' +
				'background-color: 	white;' +
				'text-align: center;' +
				'}</style></head>');
			_windowResult.document.writeln('<body><p id="resultTextWindow">');
		}
	}
			
	function showMessage(mess) 
	{		 
		_windowResult.focus();
		_windowResult.document.writeln('<p>' + mess);
	}  
	
	function showResult(resultMessage) 
	{		 
		showMessage(resultMessage);	
	}  
			
	function closeWindow() 
	{
		_windowResult.document.writeln('</p></body></html>');                                      
		_windowResult.close();                                                             
	}
function ResettaGioco(){//riavvia il gioco
	SbloccaCelle();
	conflitti=[];
	PosizioniScelte=[];
	StopTimer();
	secondi=minuti=ore=contatore=0;
	document.getElementById("Timer").style.WebkitAnimationPlayState="paused";
	document.getElementById("Timer").style.color="black";
	document.getElementById("Timer").value="00:00";
	CancellaSudoku(1,1);
	AbilitaSudoku();
	CreaSudokuCompleto();
	PlayTimer();
    var buttonStop = document.getElementById("StopTime");
	buttonStop.disabled=false;
	CancellaCelleSudokuCompleto();//Rimuove le celle in posizioni e numero varie in base alla difficoltà
	BloccaCelleIniziali();
	AggiornaMatriceUtente();
	CalcolaPosizioniInizialiVuote();
	ResettaAnimazioniCelle();
		}
