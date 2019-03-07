<?php
	require_once "./../config.php";
     require_once DIR_UTIL . "SudokuDbManager.php"; 
    require_once DIR_UTIL . "sessionUtil.php";
    require_once DIR_UTENTE . "Definizioneutente.php";
    require_once DIR_UTIL . "dbConfig.php"; 

if(isset($_POST['email']) && isset($_POST['id']) ){
		 $email=$_POST['email'];
	$id=$_POST['id'];
		 $risultato=Utente::updateEmail($id, $email);
		 if($risultato==true){
		 	echo "Email modificata correttamente.";
		 }else{
		 	echo "Qualcosa è andato storto, riprova!";
		 }
		 
}else{
	echo "Email non valida";
}
?>