var pass="";//prima pass
var passcheck="";//seconda pass

function prendipsw(id){
var elem=document.getElementById(id);
pass=elem.value;

}
function prendisecondapsw(id){

	var elem=document.getElementById(id);
passcheck=elem.value;

}
function CheckName() {
	var letters = /^[A-Za-z\s]+$/;
	var nome=document.getElementById("nome").value.toString();
	var elem=document.getElementById("nome");
	var error_div=document.getElementById("nome_error");
			if(error_div.childNodes.length!=0){
			 error_div.removeChild(error_div.childNodes[0]);
			}
	if(elem.value!=""){
			if(!nome.match(letters)){
				elem.value="";
				error_div.appendChild(document.createTextNode("Il nome non deve contenere numeri"));
				error_div.style.color="red";
				document.getElementById("Registrati").disabled="true";
				return false;
			}
			
			if(VerificaForm()==true){
			document.getElementById("Registrati").disabled=(document.getElementById("Registrati").disabled==true)?false:document.getElementById("Registrati").disabled;
			}
	}
}


function CheckSurname(){
		var letters = /^[A-Za-z\s]+$/;
	var cognome=document.getElementById("cognome").value.toString();
	var elem=document.getElementById("cognome");
	var error_div=document.getElementById("cognome_error");
	if(error_div.childNodes.length!=0){
			 error_div.removeChild(error_div.childNodes[0]);
			}
	if(elem.value!=""){
		if(!cognome.match(letters)){
				elem.value="";
				error_div.appendChild(document.createTextNode("Il cognome non deve contenere numeri"));
				error_div.style.color="red";
				document.getElementById("Registrati").disabled="true";
				return false;
			
			}	if(VerificaForm()==true){
			document.getElementById("Registrati").disabled=(document.getElementById("Registrati").disabled==true)?false:document.getElementById("Registrati").disabled;
			}
	}
}

function CheckIfAlreadyExists(){//devo vedere se esiste già nel DB
	var username = document.getElementById("username").value;
		var elem=document.getElementById("username");
	var error_div=document.getElementById("username_error");
		if(error_div.childNodes.length!=0){
			 error_div.removeChild(error_div.childNodes[0]);
			}
	function useHttpResponse(parametro, rispostaAjax){
		if(rispostaAjax!=0){
			error_div.appendChild(document.createTextNode("Username già in uso"));
				error_div.style.color="red";
					document.getElementById("Registrati").disabled="true";
					return;
		}if(VerificaForm()==true){
			document.getElementById("Registrati").disabled=(document.getElementById("Registrati").disabled==true)?false:document.getElementById("Registrati").disabled;
			}
}
AjaxManager.performAjaxRequest('GET','../ajax/esiste.php?stringa='+username,null,useHttpResponse, null);

}

function CheckSecurity(){
	var elem=document.getElementById("password");
	var error_div=document.getElementById("password_error");
	if(error_div.childNodes.length!=0){
			 error_div.removeChild(error_div.childNodes[0]);
			}
	if(pass!=""&& elem.value!=""){
			if(pass.length<2|| pass.length>20){
				elem.value="";
				error_div.appendChild(document.createTextNode("La password deve contenere tra i 2 ed i 20 caratteri"));
				error_div.style.color="red";
					document.getElementById("Registrati").disabled="true";

				return false;
			}if(VerificaForm()==true){
			document.getElementById("Registrati").disabled=(document.getElementById("Registrati").disabled==true)?false:document.getElementById("Registrati").disabled;
			}
	}else{
		if(error_div.childNodes.length!=0){
			 error_div.removeChild(error_div.childNodes[0]);
			}
		return false;
	}
	return true;

}
function PassVerify(){
	
	var elem=document.getElementById("secondpassword");
	var error_div=document.getElementById("verpassword_error");
	if(error_div.childNodes.length!=0){
			 error_div.removeChild(error_div.childNodes[0]);
			}

	if(passcheck!=""){
			if(passcheck.length<2|| passcheck.length>20){
				elem.value="";
				error_div.appendChild(document.createTextNode("La password deve contenere tra i 2 ed i 20 caratteri"));
				error_div.style.color="red";
						document.getElementById("Registrati").disabled="true";
				return false;
			}else{
			}
			if(passcheck!=pass && pass!=""){
				elem.value="";
				document.getElementById("password").value="";
				error_div.appendChild(document.createTextNode("Le due password non corrispondono"));
				error_div.style.color="red";
				document.getElementById("password").focus();
				document.getElementById("Registrati").disabled="true";
				return false;
			}
			if(VerificaForm()==true){
			document.getElementById("Registrati").disabled=(document.getElementById("Registrati").disabled==true)?false:document.getElementById("Registrati").disabled;
			}
			return true;
	}else{

	}
	return false;
}
function VerificaForm(){
if(document.getElementById("nome_error").childNodes.length==0 && document.getElementById("cognome_error").childNodes.length==0  &&document.getElementById("password_error").childNodes.length==0 &&document.getElementById("verpassword_error").childNodes.length==0  &&document.getElementById("email_error").childNodes.length==0 && document.getElementById("username_error").childNodes.length==0 ){
	return true;
}
return false;
}
function CheckMail(){
var elem=document.getElementById("email");
	var email = elem.value;
	var error_div=document.getElementById("email_error");
	if(email!=""){	
		if(error_div.childNodes.length!=0){
			 error_div.removeChild(error_div.childNodes[0]);
			}
	var patt = /@/g; var patt2=/./g;
	if(!patt.test(email)|| !patt2.test(email)){
		error_div.appendChild(document.createTextNode("email non valida"));
		error_div.style.color="red";
		document.getElementById("Registrati").disabled="true";
		return false;
	}if(VerificaForm()==true){
			document.getElementById("Registrati").disabled=(document.getElementById("Registrati").disabled==true)?false:document.getElementById("Registrati").disabled;
			}
		return true;
	}
	return false;

}

