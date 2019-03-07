<?php
	require_once "./config.php";
    require_once DIR_UTIL . "SudokuDbManager.php"; //includes Database Class
    require_once DIR_UTIL . "sessionUtil.php"; //includes session utils
    require_once DIR_UTENTE. "Definizioneutente.php";
	session_start();
	$username = (isset($_POST['username']))? $_POST['username']: "";
	$password = (isset($_POST['password']))? $_POST['password']: "";
	$errorMessage = login($username, $password);
	if($errorMessage === null)
		header('location: ./Griglia_Sudoku.php');//da cambiare quando faccio admin
	else
		header('location: ./../index.php?errorMessage=' . $errorMessage );


	function login($username, $password){  
	global $sudokuDB; 
		$utente = Utente::auth($username,$password);
		$sudokuDB->closeConnection();
		if($utente) {
			$_SESSION['email'] = $utente->__get('email');
			$_SESSION['username']=$username;
			$_SESSION['logged'] = true;
			$_SESSION['admin']= $utente->__get('admin');
			$_SESSION['idutente']=$utente->__get('idUtente');	
			return null;
		}
		else
			return 'Username o password errati';
	}
	
	


?>