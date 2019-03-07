<?php
	require_once  "./../config.php";
    require_once DIR_UTIL . "SudokuDbManager.php"; 
    require_once DIR_UTIL . "sessionUtil.php";
    require_once DIR_UTENTE . "Definizioneutente.php";
	session_start();
		 $username= $_SESSION['username'];
		$risultato = Utente::CaricaClassifica($username);		
			echo json_encode($risultato);
			return $risultato;
			
?>