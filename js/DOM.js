
function ModificaBottoneStart(){
	document.getElementById('BtnStart').value="";
	document.getElementById('BtnStart').value="Nuova Partita";
	document.getElementById('BtnStart').style.left="3%";
}
function ModificaLayout(){
//modifica css livelli
    var y = document.getElementById("Livelli");
	var x =y.getElementsByTagName("li");
		for(i=0;i<x.length;i++){
			x[i].setAttribute("id","livello"+i);
			x[i].setAttribute("onclick","SceltaLivello("+i+")");
	}
} 	
function MostraProfilo(){
	var UserProfile=document.getElementById("SpanProfile");
	var Username = document.getElementById("SpanUsername")
	Username.style.display="none";
	UserProfile.style.display="inline";
}
function NascondiProfilo(){
	var UserProfile=document.getElementById("SpanProfile");
	var Username = document.getElementById("SpanUsername");
	Username.style.display="inline";
	UserProfile.style.display="none";
}

function mostraemail(tipo){
	var form = document.getElementById("modifica_email");
	if(tipo===0)
		form.style.display="inline";
	else
		form.style.display="none";
}
function mostraPassword(tipo){
	var form = document.getElementById("modifica_password");
	if(tipo===0)
		form.style.display="inline";
	else
		form.style.display="none";
}
function MostraModificaMail(){
document.getElementById("comando_modificaemail").style.display="inline";
}
function MostraModificaPassword(){
document.getElementById("comando_modifica").style.display="inline";
}

function NascondiModificaMail(){
document.getElementById("comando_modificaemail").style.display="none";
}
function NascondiModificaPassword(){
document.getElementById("comando_modifica").style.display="none";
}
function DomElencoUtentiEnter(id){
	var inputUtente=document.getElementById(id);
	inputUtente.value="Clicca per eliminare";
	inputUtente.style.color="red";
	inputUtente.style.fontSize="0.8em";
}

function DomElencoUtentiOver(id){
	var inputUtente=document.getElementById(id);
	inputUtente.value=id;
	inputUtente.style.color="black";
	inputUtente.style.fontSize="0.5em";
}
function mostraComandoAggiunta(tipo){
		var form = document.getElementById("Aggiungi_Utente");
		var formDati = document.getElementById("Dati_Profilo");	
		var btnAggiungi=document.getElementById("comando_Aggiunta");
		var ComandoCancellaUtente=document.getElementById("comando_CancellaUtente");
		var BackArrow=document.getElementById("BackPage");
	if(tipo===0){
		BackArrow.href="../utente/ProfiloSettingUtente.php";
		ComandoCancellaUtente.style.display="none";
		btnAggiungi.style.display="none";
		formDati.style.display="none";
		form.style.display="inline";
	}
	else{
		BackArrow.href="../Griglia_Sudoku.php";
		ComandoCancellaUtente.style.display="inline";
		btnAggiungi.style.display="inline";
		formDati.style.display="inline";
		form.style.display="none";
		}
}
function mostraCancellaUtente(tipo){
	var form = document.getElementById("Elenco_Utenti");
	var formDati = document.getElementById("Dati_Profilo");
	var btnAggiungi=document.getElementById("comando_Aggiunta");
	var comandoElimina=document.getElementById("comando_CancellaUtente");
	var BackArrow=document.getElementById("BackPage");
	if(tipo===0){
		BackArrow.href="../utente/ProfiloSettingUtente.php";
		comandoElimina.style.display="none";
		btnAggiungi.style.display="none";
		formDati.style.display="none";
		form.style.display="inline";
	}
	else{
		BackArrow.href="../Griglia_Sudoku.php";
		comandoElimina.style.display="inline";
		btnAggiungi.style.display="inline";
		formDati.style.display="inline";
		form.style.display="none";
	}



}