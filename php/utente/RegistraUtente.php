<?php
	require_once  "./../config.php";
	require_once DIR_UTENTE . "Definizioneutente.php";
    require_once DIR_UTIL . "SudokuDbManager.php"; 
    require_once DIR_UTIL . "sessionUtil.php";
    require_once DIR_UTIL . "dbConfig.php"; 

    if(empty($_POST)===false){ 
	    session_start();
		$newUser = new Utente($_POST); 

		$newUserId = $newUser->create(); 
		
		$errorMessage = valido($newUserId);
		if($errorMessage === null)
			header('location: ./../Griglia_Sudoku.php');
		else
			header('location: ./../Register.php?errorMessage=' . $errorMessage);		
	}

	function valido($id){
		global $sudokuDB;
		if ($id<1) {
			return 'Username o email già esistenti';
		}else{

			$utente = Utente::recuperaUtente($id); // RECUPERO L'UTENTE APPENA CREATO 
			$_SESSION['email'] = $utente->__get('email');
			$_SESSION['username']=$utente->__get('username');
			$_SESSION['logged'] = true;
			$_SESSION['admin']=$utente->__get('admin');
			$_SESSION['idutente']=$utente->__get('idUtente');	
//preparo le classifiche
			$user=$utente->__get('username');
			$tempoIniziale='00:00';
			Utente::InserisciClassificaVeryEasy($user,$tempoIniziale);
			Utente::InserisciClassificaEasy($user,$tempoIniziale);
			Utente::InserisciClassificaMedium($user,$tempoIniziale);
			Utente::InserisciClassificaTough($user,$tempoIniziale);
			Utente::InserisciClassificaExtreme($user,$tempoIniziale);
			$sudokuDB->closeConnection();
			return null;
		}
	}
?>