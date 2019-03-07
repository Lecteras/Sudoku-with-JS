<?php
	session_start();
	require_once "./php/config.php";
    include DIR_UTIL . "sessionUtil.php";
   if (isLogged()){
		    header('Location: ./php/Griglia_Sudoku.php');
		    exit;
    }

?>
<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="utf-8"> 
    	<meta name = "author" content = "Rasla Davide">
    	<meta name = "keywords" content = "game">
		<link rel="stylesheet" href="./css/Sudoku_login.css" type="text/css" media="screen">
		<script src="./js/Effetti_login_logout.js"></script>	
		<title>Sudoku</title>
	</head>
	<body onLoad="begin()">
		<div id="sign_in_content">
		<div id="sign_in_content_title">
			 <img src="../../css/img/LogoSudoku.png" alt="LogoSudoku" style="  height: 80px; width:140%;">
		</div>
		<div id="login_form">
			<form name="login" action="./php/login.php" method="post">
				<div >
					<label>Username: </label>
					<input type="text" placeholder="Username" name="username" required autofocus>
				</div>
				<div>
					<label>Password:&nbsp; </label>
					<input type="password" placeholder="Password" name="password" required><!--creare funzione js che mette asterischi!-->
				</div>	
				<input id ="SubmitLogin" type="submit" value="Enter">
			<?php
					if (isset($_GET['errorMessage'])){
						echo '<div class="sign_in_error">';
						echo '<span>' . $_GET['errorMessage'] . '</span>';
						echo '</div>';
					}
				?>
			</form>
			<div id = "Register">
				<p>Don't have an account? </p>
				<a href="./php/Register.php">Create one now!</a>
			</div>
		</div>
		</div>
		<footer id="sign_in_footer">
			<div>
				<a href="./html/Manuale.html" target="_blank">A little guide on Sudoku's world</a>
			</div>
		</footer>
	</body>
</html>
