

function Utente() {}	



Utente.ModificaPasswordUtente=function(idUtente){

var NuovaPassword =document.getElementById("nuovapassword").value;
if(NuovaPassword.length<2|| NuovaPassword.length>20){
				//alert("Password non valida! Ricorda, deve avare da 2 a 20 caratteri");
				return;
			}
			var t = document.createTextNode(NuovaPassword);
			var span=document.getElementById("Spanpsw");
			span.removeChild(span.childNodes[0]);
			span.appendChild(t);
AjaxManager.performAjaxRequest('POST','../ajax/ModificaPassword.php', 'password='+NuovaPassword+'&id='+idUtente,useHttpResponse, null);
		function useHttpResponse(parametro, rispostaAjax){
			if(rispostaAjax!=0){
				//alert("Password modificata correttamente.");
			}
			else{
				//alert("Password non valida, ritenta.");
			}

	}
}




Utente.ModificaEmailUtente=function(idUtente){
	
var NuovaEmail =document.getElementById("nuovaemail").value;
var patt = /@/g;
	if(!patt.test(NuovaEmail)){
		//alert("Inserisci una mail valida");
		return;
	}
	var t = document.createTextNode(NuovaEmail);
			var span=document.getElementById("Spanemail");
			span.removeChild(span.childNodes[0]);
			span.appendChild(t);
		function useHttpResponse(parametro, rispostaAjax){
			if(rispostaAjax!=0){
				alert("email modificata correttamente.");
			}
			else{
				alert("email non valida, ritenta.");
			}  
		AjaxManager.performAjaxRequest('POST','../ajax/ModificaEmail.php', 'email='+NuovaEmail+'&id='+idUtente,useHttpResponse, null);  
	}
}



Utente.EliminaUtente=function(usern){

    var r = confirm("Vuoi davvero eliminare questo utente?");
    if (r == true) {
		function useHttpResponse(parametro, rispostaAjax){
			if(rispostaAjax!=0){
				//alert("Utente Eliminato");
				mostraCancellaUtente(1);
			
			}
			else{
				//alert("Qualcosa è andato storto, ritenta.");
			}   
	}
	       	AjaxManager.performAjaxRequest('POST','../ajax/EliminaUtente.php', 'username='+usern,useHttpResponse, null);
    } 
}
