<?php 
if($_SESSION['admin']==0){
	header('Location: ./../../index.php');
}
?>
	<div id="Cancellazione">
			<button id="comando_CancellaUtente" class="buttonAdmin" onclick="mostraCancellaUtente(0)">Cancella Utente</button><br>
					<div id = "Elenco_Utenti">
						<p style="color:white; font-size: 1.8em;"> Elenco Utenti attualmente registrati:</p>
						<ul >
						<?php
						 $risultato=Utente::getUtenti();

						 function clean($string) {
						   $string = str_replace('username', '-', $string); 

						   return preg_replace('/[^A-Za-z0-9\-]/', '', $string); 
						}
						
						 $Utenti= clean(json_encode($risultato));
						 $Utenti = substr($Utenti, 1);
						 $Utenti=explode("-",$Utenti);
							$i=0; 
							while($i<count($Utenti))
							{
						    echo '<li> <input class="ButtonDeleteUsers" type="text" id= "'.$Utenti[$i].'" onclick="Utente.EliminaUtente(this.id)" value='.$Utenti[$i].' onmouseenter="DomElencoUtentiEnter(this.id)" onmouseleave="DomElencoUtentiOver(this.id)"  style="text-align:center;" readonly></li>';
							    $i++;
							}
						?>
						</ul>
					</div>
					
			

		</div>
		