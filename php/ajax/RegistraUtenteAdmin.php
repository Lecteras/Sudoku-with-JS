<?php
	require_once  "./../config.php";
	require_once DIR_UTENTE . "Definizioneutente.php";
    require_once DIR_UTIL . "SudokuDbManager.php"; 
    require_once DIR_UTIL . "sessionUtil.php";
    require_once DIR_UTIL . "dbConfig.php"; 
   session_start();
   if(!isset($_SESSION['logged'])||$_SESSION['logged']==false)
    	{ //se non sono loggato
    		header('location: ./../../index.php' );
    }
 if($_SESSION['admin']==1){
    	$newUser = new Utente($_POST); 
		$newUserId = $newUser->create(); 
		$utente = Utente::recuperaUtente($newUserId); // RECUPERO L'UTENTE APPENA CREATO 	
		$user=$utente->__get('username');
		$tempoIniziale='00:00';
		Utente::InserisciClassificaVeryEasy($user,$tempoIniziale);
		Utente::InserisciClassificaEasy($user,$tempoIniziale);
		Utente::InserisciClassificaMedium($user,$tempoIniziale);
		Utente::InserisciClassificaTough($user,$tempoIniziale);
		Utente::InserisciClassificaExtreme($user,$tempoIniziale);
		$sudokuDB->closeConnection();
		header('location: ./../utente/ProfiloSettingUtente.php');
    }else{
    	header('location: ./../utente/ProfiloSettingUtente.php');
    }
   


    ?>