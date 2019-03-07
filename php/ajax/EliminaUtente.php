<?php
	require_once "./../config.php";
     require_once DIR_UTIL . "SudokuDbManager.php"; 
    require_once DIR_UTIL . "sessionUtil.php";
    require_once DIR_UTENTE . "Definizioneutente.php";
    require_once DIR_UTIL . "dbConfig.php"; 
if(isset($_POST['username'])){
		 $username=$_POST['username'];
		 echo $username;
		 $risultato=Utente::deleteUser($username);
		  Utente::RimuoviClassificaVeryEasy($username);
		 Utente::RimuoviClassificaEasy($username);
		 Utente::RimuoviClassificaMedium($username);
		 Utente::RimuoviClassificaTough($username);
		 Utente::RimuoviClassificaExtreme($username);
		return json_encode($username);
		 
}
?>