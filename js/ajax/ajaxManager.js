
function AjaxManager(){}

AjaxManager.getAjaxObject = function(){
		var xmlHttp = null;
		try { 
			xmlHttp = new XMLHttpRequest(); 
		} catch (e) {
			try { 
				xmlHttp = new ActiveXObject("Msxml2.XMLHTTP"); //IE (recent versions)
			} catch (e) {
				try { 
					xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); //IE (older versions)
				} catch (e) {
					xmlHttp = null; 
				}
			}
		}
		return xmlHttp;
	}

AjaxManager.performAjaxRequest = function(method, url, dataToSend, responseFunction, parametroResponseFunction){
		var xmlHttp = AjaxManager.getAjaxObject();
		if (xmlHttp === null){
			window.alert("Your browser does not support AJAX!"); // set error function
			return;
		}
	
		xmlHttp.open(method, url, true); 
		xmlHttp.onreadystatechange = function (){
			if (xmlHttp.readyState == 4){
				//alert(xmlHttp.responseText);	//USARE soprattutto quando dà l'errore unexpected token <
				var data = xmlHttp.responseText;
				responseFunction(parametroResponseFunction, data);
			}
		}
		
		if (method == 'POST'){
			xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xmlHttp.send(dataToSend);
		}
		else{
			xmlHttp.send(dataToSend);
		}
		
}		