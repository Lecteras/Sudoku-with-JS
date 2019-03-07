<?php
	require_once  "./../config.php";
    require_once DIR_UTIL . "SudokuDbManager.php"; 
    require_once DIR_UTIL . "sessionUtil.php";
    require_once DIR_UTENTE . "Definizioneutente.php";
	
	if(isset($_GET['stringa'])){
		 $string = $_GET['stringa'];
		$risultato = Utente::exists_user($string);
	echo json_encode($risultato);
	}

?>