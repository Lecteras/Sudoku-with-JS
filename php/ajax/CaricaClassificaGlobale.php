<?php
	require_once "./../config.php";
     require_once DIR_UTIL . "SudokuDbManager.php"; 
    require_once DIR_UTIL . "sessionUtil.php";
    require_once DIR_UTENTE . "Definizioneutente.php";
    require_once DIR_UTIL . "dbConfig.php"; 

if(isset($_POST['Livello'] )){
		 $difficolta=$_POST['Livello'];

		 $risultato=Utente::CaricaClassificaGlobale($difficolta);

		echo json_encode($risultato, JSON_HEX_AMP);
			return json_encode($risultato, JSON_HEX_AMP);
			
		 
}
?>