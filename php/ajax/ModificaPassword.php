<?php
	require_once "./../config.php";
     require_once DIR_UTIL . "SudokuDbManager.php"; 
    require_once DIR_UTIL . "sessionUtil.php";
    require_once DIR_UTENTE . "Definizioneutente.php";
    require_once DIR_UTIL . "dbConfig.php"; 

if(isset($_POST['password']) && isset($_POST['id']) ){
		 $password=$_POST['password'];
	$id=$_POST['id'];
	echo $id;
		 $risultato=Utente::updatePassword($id, $password);
		 if($risultato==true){
		 	echo $password;
		 }else{
		 	echo "Qualcosa è andato storto, riprova!";
		 }
		 
}else{
	echo "Password non valida";
}
?>