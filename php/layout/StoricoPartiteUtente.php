	<?php

   	require_once  "./../config.php";
	require_once DIR_UTENTE . "Definizioneutente.php";
    require_once DIR_UTIL . "SudokuDbManager.php"; 
    require_once DIR_UTIL . "sessionUtil.php";
    require_once DIR_UTIL . "dbConfig.php";

?>
	<!DOCTYPE html>
	<html lang="it">
		<head>
			<meta charset="utf-8"> 
	    	<meta name = "author" content = "Rasla Davide">
	    	<meta name = "keywords" content = "Sudoku">

		<link rel="stylesheet" href="../../css/ClassificaGlobale.css" type="text/css" media="screen">
		<script  src="../../js/ajax/ajaxManager.js"></script>
			<script  src="../../js/DOM.js"></script>
			<script src="../../js/ajax/StoricoUtente.js"></script>

			<title>Storico Partite </title>
		</head>
		<body onload="begin()" >
				<div><a href="../Griglia_Sudoku.php"> <img src="../../css/img/WhiteArrow.jpg" alt="WhiteArrow" style="height: 80px; width: 80px;"></a></div>
				<div id="UserDesk">
						<div id="ListaLivelli">
							<ul id = "Livelli" class="level" >
								  <li>very easy</li>
								 <li>easy</li>
								  <li>medium</li>
						    		<li>tough</li>
								  <li>extreme</li>
							</ul>
					</div>	
					<h1 id = "TipoClassifica" style="color:white;"> </h1>
				<div id = "Classifica">
				
				</div>

			</div>
			
		</body>
	</html>
