	<?php

   	require_once  "./../config.php";
	require_once DIR_UTENTE . "Definizioneutente.php";
    require_once DIR_UTIL . "SudokuDbManager.php"; 
    require_once DIR_UTIL . "sessionUtil.php";
    require_once DIR_UTIL . "dbConfig.php";
	session_start();
   	if (!isset($_SESSION['logged'])||$_SESSION['logged']==false){
		    header('Location: ./../../index.php');
		    exit;
    }
    $Ut = Utente::getId($_SESSION["username"]);
    $id = $Ut[0]['idUtente'];
    $Utente = Utente::recuperaUtente($id);
?>
	<!DOCTYPE html>
	<html lang="it">
		<head>
			<meta charset="utf-8"> 
	    	<meta name = "author" content = "Rasla Davide">
	    	<meta name = "keywords" content = "Sudoku">

		<link rel="stylesheet" href="../../css/Gestione_Profilo.css" type="text/css" media="screen">
		<script src="../../js/ajax/ajaxManager.js"></script>
		<script src="../../js/ajax/utente.js"></script>
		<script  src="../../js/DOM.js"></script>
		<script  src="../../js/ajax/VerificaFormAdmin.js"></script>	

			<title><?php echo $Utente->nome?>'s page</title>
		</head>
		<body >
			<div style="width: 20%;"><a id="BackPage" href="../Griglia_Sudoku.php"> <img src="../../css/img/WhiteArrow.jpg" alt="WhiteArrow" style="height: 70%; width: 40%;"></a></div>
		<div id = "WrapperDesk">
				<div id="UserDesk">
					
					<h1><?php echo $Utente->nome?> profile's</h1>
				<div id = "DatiUtente">
					<ul id = "Dati_Profilo" >
						<li><label>Name: </label><span> <?php echo $Utente->nome ?></span><br></li>
						<li><label>Surname: </label><span> <?php echo $Utente->cognome ?> </span><br></li>
						<li   ><label>E-mail: </label><span onmouseenter="MostraModificaMail()" id="Spanemail"> <?php echo $Utente->email ?> </span><br>
						<div id="div_email">
			<button id="comando_modificaemail" class="button" onclick="mostraemail(0)"  onmouseleave="NascondiModificaMail()"> Modifica e-mail </button> 
					</div></li>	
					</ul>
						<?php
							echo '<form name="dati" id="modifica_email" method="POST" action="javascript:Utente.ModificaEmailUtente('. json_encode($id) .')">';
						?>
							<div>
								<label style="color: white;"> Inserisci nuova email: </label>
								<input type="text" name="reEmail" id="nuovaemail" required>
								<input class="button" type="submit" value="Modifica" onclick="mostraemail(1)">
							</div>	
					
					</form>	
					<ul>
						<li><label>Username: </label><span> <?php echo $Utente->username ?> </span><br></li>
						<li  ><label>Password: </label><span onmouseenter="MostraModificaPassword()" id="Spanpsw" > <?php echo $Utente->password ?> </span>
					<div id="div_password"  onmouseleave="NascondiModificaPassword()">
					<button id="comando_modifica" class="button" onclick="mostraPassword(0)"> Modifica password </button> 
					</div></li>
					</ul>
								<?php 
									echo '<br><form name="dati" id="modifica_password" method="POST" action="javascript:Utente.ModificaPasswordUtente('. json_encode($id) .')">';
								?>
									<div>
										<label style="color:white;"> Inserisci nuova password </label>
										<input type="password" name="repassword" id="nuovapassword" required>
										<input type="submit" value="Modifica" onclick="Utente.mostraPassword(1)">
									</div>	
							
						</form>	
				
				</div>
				
	<?php 
	if($Utente->admin==1){//se sono admin
		include DIR_AJAX_UTIL . "FormEliminazione.php";
			
	
		}?>

			<?php 
	if($Utente->admin==1){//se sono admin
		include DIR_AJAX_UTIL . "AggiungiUtente.php";
			
		}?>
			
				
			</div>
		</div>	
		</body>
	</html>
