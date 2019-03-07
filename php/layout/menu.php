<div id="menu">

		<div id = "Username-Profile" onmouseenter="MostraProfilo()" onmouseleave="NascondiProfilo()">
			<div id = "SpanUsername">
			<span style="color:white; font-size: 2em;"> Welcome, </span><span style=" position: relative; color:white; font-size: 2em;" id="UsernameUtente"><?php echo  $_SESSION['username'];?></span>
				</div>
			<div id = "SpanProfile" style="display: none; text-align: center; margin-bottom: 20%;">
				<a href="./utente/ProfiloSettingUtente.php">
					<span><img src="../css/img/FrecciaDestraBianca.jpg" alt="FrecciaDestraBianca" style=" position: relative;  height: 10%; width: 20%;">Your Profile</span>
				</a>
			</div>

			</div>

	
	
	 	<ul style="list-style-type: none;">
	 		<li>
				<a href="./layout/ClassificaGlobale.php">
					<span>Global Score</span>
				</a>
			</li>
			<li>
				<a href="./layout/StoricoPartiteUtente.php">
					<span>Your Matches </span>
				</a>
			</li>
			<li>
				<a href="./logout.php">
					<span >Sign out</span>
				</a>
			</li>


		</ul>

			<div >
				<ul id="StatisticheUtente" style="list-style-type: none;" >
					<li><p style="color: white; font-size:2.3em;">Your  best scores:<br></p></li>
					<li><label>Very easy: </label><input id="Difficoltaveryeasy" type="text" name="veryeasy" readonly class="RecordTempi" ></li>
					<li><label>Easy: </label><input id = "Difficoltaeasy" type="text" name="easy" readonly class="RecordTempi" ></li>
					<li><label>Medium: </label><input id = "Difficoltamedium" type="text" name="med" readonly class="RecordTempi" ></li>
					<li><label>Tough: </label><input id = "Difficoltatough" type="text" name="tough" readonly class="RecordTempi" ></li>
					<li><label>Extreme: </label><input id = "Difficoltaextreme" type="text" name="Extreme" readonly class="RecordTempi" ></li>
				</ul>
		</div>	
</div>