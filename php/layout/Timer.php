		  	<div id="GestioneTimer" >
  			
  				<span> 
  				<input id = "Timer" type="text" name="Timer" readonly="" placeholder="00:00">
  				</span><br><br>
  			<div id = "ButtonTime">
  			 <button id="StopTime"  onclick="StopTimer()"><img src="../css/images/Pause.png" alt="Pause" width="42" height="42"></button>
  			 <button id="PlayTime" onclick="PlayTimer()"><img src="../css/images/Play.png" alt="Play" width="42" height="42"></button><br><br>
        </div>
  			 <input type="button" id="BtnStart" class = "ButtonTime" onclick="StartGame()" value="Start">
            <div id = "Parametri"><br>
          <input type="button" id="BtnSolveOne"  class = "Buttons" onclick="SolveOne()" value="Solve One">
          <input type="button" id="BtnSolveAll" class = "Buttons" onclick="RisolviSudoku()" value="Solve All">
       </div> 
  			</div>