<?php
	require_once "./../config.php";
     require_once DIR_UTIL . "SudokuDbManager.php"; 
    require_once DIR_UTIL . "sessionUtil.php";
    require_once DIR_UTENTE . "Definizioneutente.php";
    require_once DIR_UTIL . "dbConfig.php"; 

if(isset($_POST['user']) && isset($_POST['score']) && isset($_POST['LivelloGioco']) && isset($_POST['Data']) ){
		 $username=$_POST['user'];
		 $difficolta=$_POST['LivelloGioco'];
		 $punteggio = $_POST['score'];
		 $data=$_POST['Data'];

		 $risultato=Utente::InserisciStoricoUtente($username,$punteggio,$difficolta,$data);

		 	echo $risultato;
		 	return $risultato;

	}
?>