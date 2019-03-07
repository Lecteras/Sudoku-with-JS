function ModificaLayout(){
//modifica css livelli
    var y = document.getElementById("Livelli");
	var x =y.getElementsByTagName("li");
		for(i=0;i<x.length;i++){
			x[i].setAttribute("id","livello"+i);
			x[i].setAttribute("onclick","SceltaLivello("+i+")");
	}
} 	
function SceltaLivello(pos){
		    var y = document.getElementById("Livelli");
			var x =y.getElementsByTagName("li");
		for(var i=0;i<x.length;i++){
			if(x[i].id==("livello"+""+pos)){
				var LivelloScelto=x[i].innerHTML;
				x[i].style.color="black";
				x[i].style.backgroundColor="white";	
			}else{
				x[i].style.color="white";
				x[i].style.backgroundColor="";
			}
		}
		CaricaStoricoUtente(LivelloScelto);
	}

function CaricaStoricoUtente(LivelloScelto){
var livello=LivelloScelto;
livello=livello.toString().toLowerCase().replace(' ', '');

		function useHttpResponse(parametro, rispostaAjax){
	var Contenitore=document.getElementById("Classifica");
	var Titolo = document.getElementById("TipoClassifica");
		if(Contenitore.childNodes.length!=0){
			while(Contenitore.childNodes.length!=0){
				Contenitore.removeChild(Contenitore.childNodes[0]);
			}
		}
		if(Titolo.childNodes.length!=0){
			while(Titolo.childNodes.length!=0){
				Titolo.removeChild(Titolo.childNodes[0]);
			}
		}	
			if(rispostaAjax==-1){
				var t = document.createTextNode("Non hai ancora salvato nessuna partita con questa difficoltà! ");
				Titolo.appendChild(t);
				return;
			}
				var punteggi=rispostaAjax.toString();
				 re = /\$|@|#|~|`|\%|\*|\^|\&|\(|\)|\+|\=|\[|\_|\]|\[|\}|\{|\;|\'|\"|\<|\>|\?|\||\\|\!|\$|\./g;
		 var res= punteggi.replace(re, "");
				var QueryResult = res.split(",");
var t = document.createTextNode(" Ecco lo storico delle tue partite:");
Titolo.appendChild(t);
	var Table = document.createElement("Table");
	for(var i=0; i<QueryResult.length;i++){
		var row = document.createElement("TR");
			var casella = document.createElement("TD");
			var cella1 = document.createElement("INPUT");
			var cella2 = document.createElement("INPUT");
			cella1.readOnly = true;
			cella2.readOnly = true;
			cella1.value=QueryResult[i++];
			cella2.value= QueryResult[i];
			casella.appendChild(cella1);
			casella.appendChild(cella2);
			row.appendChild(casella);
			Table.appendChild(row);
			}
		Classifica.appendChild(Table);
		Contenitore.appendChild(Classifica);
	}
	AjaxManager.performAjaxRequest('POST','../ajax/CaricaStoricoPartiteUtente.php', 'Livello='+livello,useHttpResponse, null);
}

function begin(){
ModificaLayout();

}