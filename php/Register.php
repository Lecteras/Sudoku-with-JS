<?php

		require_once "./config.php";
		require_once DIR_UTENTE . "Definizioneutente.php";

?>	

<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="utf-8"> 
    	<meta name = "author" content = "Rasla Davide">
    	<meta name = "keywords" content = "game">
		<link rel="stylesheet" href="../css/Sudoku_Register.css" type="text/css" media="screen">
		<script src="../js/ajax/VerificaForm.js"></script>	
		<script src="../js/ajax/ajaxManager.js"></script>
		<title>Registrati</title>
	</head>
<body>
	<div><a href="../index.php"> <img src="../css/img/backarrow.png" style="height: 50px; width: 50px;" alt="BackArrow"></a></div>

	<div id = section_register>
		<form name="login" action="./utente/RegistraUtente.php" method="POST">
	<ul>
		<li><label>Nome &ensp;&ensp;&ensp;&thinsp;&thinsp;  </label><input type="text" placeholder="Es: Mario" name="nome" id="nome"  onblur="CheckName()" required >
		<div id="nome_error" class="error" ></div></li>
		<li><label>Cognome&thinsp;&thinsp;&thinsp;   </label><input type="text" placeholder="Es: Rossi" name="cognome" id="cognome" onblur="CheckSurname()" required >
			<div id="cognome_error" class="error" ></div></li>
		<li> <label>Username&thinsp; </label><input type="text" name="username" id="username" onblur="CheckIfAlreadyExists()" required >
		<div id="username_error" class="error" ></div></li>
		<li><label>Password&thinsp;&thinsp;&thinsp;   </label><input type="password" name="password" id="password" onkeyup="prendipsw('password')" onblur="CheckSecurity()" required >
			<div id="password_error" class="error" ></div></li>
		<li><label>Password&thinsp;&thinsp;&thinsp;   </label><input type="password" name="verificapassword" id="secondpassword" placeholder="Ripeti la password" onkeyup="prendisecondapsw('secondpassword')"  onblur="PassVerify()" required >
			<div id="scdpassword" class="error" ></div>
			<div id="verpassword_error" class="error" ></div></li>
		<li><label > Email&ensp;&ensp;&ensp;&ensp;&thinsp; </label>
		<input type="text" id="email"  name="email" onblur="CheckMail()" placeholder="Inserisci un'email valida." autofocus required><div id="email_error" class="error" ></div></li>
		</ul>
		<input  type="reset" name="ResetBtn" value="Reset" id="BtnReset">
		<input type="submit" value="Registrati" id="Registrati">
	</form>
	</div>

</body>
</html>
<!--ricorda, non ho messo password come type= password perchè altrimenti non averi potuto controllare al momento dell'inserimento che l'utente inserisca una password valida, ho fatto una funziona a posta che mette asterischi!-->