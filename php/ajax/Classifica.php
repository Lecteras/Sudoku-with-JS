<?php
	require_once "./../config.php";
     require_once DIR_UTIL . "SudokuDbManager.php"; 
    require_once DIR_UTIL . "sessionUtil.php";
    require_once DIR_UTENTE . "Definizioneutente.php";
    require_once DIR_UTIL . "dbConfig.php"; 

if(isset($_POST['user']) && isset($_POST['score']) && isset($_POST['LivelloGioco'] )){
		 $username=$_POST['user'];
		 $difficolta=$_POST['LivelloGioco'];
		 $punteggio = $_POST['score'];

		 switch ($difficolta) {
		 	case 'veryeasy':
		 		 $risultato=Utente::AggiornaClassificaVeryEasy($username,$punteggio);
		 		break;
		 	case 'easy':
		 		 $risultato=Utente::AggiornaClassificaEasy($username,$punteggio);
		 		break;
		 	case 'medium':
		 		 $risultato=Utente::AggiornaClassificaMedium($username,$punteggio);
		 		 break;
		 	case 'tough':
		 		 $risultato=Utente::AggiornaClassificaTough($username,$punteggio);
		 		 break;
		 	case 'extreme':
		 		 $risultato=Utente::AggiornaClassificaExtreme($username,$punteggio);
		 		 break;
		 }
		
		 if($risultato==true){
		 	echo $risultato;
		 	echo json_encode($punteggio);

		 }else{
		 	echo json_encode($risultato);
		 }
		 
}else{
	echo "Errore";
}
?>