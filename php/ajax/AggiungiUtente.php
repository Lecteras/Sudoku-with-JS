<?php 
if($_SESSION['admin']==0){
	header('Location: ./../../index.php');
}
?>

	<button id="comando_Aggiunta" class="buttonAdmin" onclick="mostraComandoAggiunta(0)">Aggiungi Utente</button><br>
			
	<div id="Aggiungi_Utente">					
	<form  action="../ajax/RegistraUtenteAdmin.php" method="POST">
	<ul>
		<li><label>Name &ensp;&ensp;&ensp;&thinsp;&thinsp;  </label><input type="text" placeholder="Es: Mario" name="nome" id="nome"  onblur="CheckName()" required >
		<div id="nome_error" class="error" style="font-size: 0.8em"></div></li>
		<li><label>Surname&thinsp;&thinsp;&thinsp;   </label><input type="text" placeholder="Es: Rossi" name="cognome" id="cognome" onblur="CheckSurname()" required >
			<div id="cognome_error" class="error" style="font-size: 0.8em" ></div></li>
		<li> <label>Username&thinsp; </label><input type="text" name="username" id="username" onblur="CheckIfAlreadyExists()" required >
		<div id="username_error" class="error" style="font-size: 1.5em" ></div></li>
		<li><label>Password&thinsp;&thinsp;&thinsp;   </label><input type="password" name="password" id="password" onkeyup="prendipsw('password')" onblur="CheckSecurity()"  required >
			<div id="password_error" class="error" style="font-size: 0.8em" ></div></li>
		<li><label>Password&thinsp;&thinsp;&thinsp;   </label><input type="password" name="verificapassword" id="secondpassword" placeholder="Ripeti la password" onkeyup="prendisecondapsw('secondpassword')"  onblur="PassVerify()" required >
			<div id="verpassword_error" class="error" style="font-size: 1.5em"></div></li>

		<li><label> Email&ensp;&ensp;&ensp;&ensp;&thinsp; </label>
		<input type="text" id="email"  name="email" onblur="CheckMail()" placeholder="Inserisci un'email valida." autofocus required>
		<div id="email_error" class="error" style="font-size: 0.8em"></div></li>
		</ul>
		<input type="reset" class ="button" name="Reset" value="reset" id="BtnReset">
		<input type="submit" class = "button" value="Aggiungi" id="Registrati"  style="	margin-bottom: 10%;" onclick="Utente.mostraComandoAggiunta(1)">
	</form>
</div>

			