	<?php
	require_once __DIR__ . "/config.php";
    include DIR_UTIL . "sessionUtil.php";
	session_start();
   	if (!isset($_SESSION['logged'])||$_SESSION['logged']==false){
		    header('Location: ./../../index.php');
		    exit;
    }
?>
	<!DOCTYPE html>
	<html lang="it">
		<head>
			<meta charset="utf-8"> 
	    	<meta name = "author" content = "Rasla Davide">
	    	<meta name = "keywords" content = "Sudoku">
			<link rel="stylesheet" href="./../css/Griglia_Sudoku.css" type="text/css" media="screen">
			<link rel="stylesheet" href="./../css/Griglia_Sudoku_Menu.css" type="text/css" media="screen">
			<script  src="../js/UtilitaSudoku.js"></script>
			<script  src="../js/DOM.js"></script>
			<script src="../js/GeneratoreSudokuBT.js"></script>
			<script  src="../js/Risolutore.js"></script>
			<script  src="../js/ajax/ajaxManager.js"></script>
			<title>Sudoku</title>
		</head>
		<body onLoad="begin()">

		


		<div id= "ProfiloUtente">
		<?php
		include DIR_LAYOUT . "menu.php";

		?>
				</div>
	
	
		<div id = "Wrapper">
				<?php
		include DIR_LAYOUT . "WrapperSudoku.php";
			
			
		?>	
		
		<?php
		include DIR_LAYOUT . "Timer.php";
			
			
		?>
		</div>
		

		</body>
	</html>
