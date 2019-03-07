<?php
	require_once "./../config.php";
     require_once DIR_UTIL . "SudokuDbManager.php"; 
    require_once "../util/sessionUtil.php";
    require_once DIR_UTENTE . "Definizioneutente.php";
    require_once DIR_UTIL . "dbConfig.php"; 
session_start();
if(isset($_POST['Livello'] )){
		 $difficolta=$_POST['Livello'];
		 $username= $_SESSION['username'];
		 $risultato=Utente::CaricaPartiteUtente($username,$difficolta);

		echo json_encode($risultato, JSON_HEX_AMP);
			return json_encode($risultato, JSON_HEX_AMP);
			
		 
}
?>