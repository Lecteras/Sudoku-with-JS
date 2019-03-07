<?php  
	
	
    require DIR_UTIL . "dbConfig.php"; 			// includes database class
    $sudokuDB = new SudokuDbManager(); // creates a new istance of Database Class

	class SudokuDbManager {
		private $mysqli_conn = null;
	
		function SudokuDbManager(){
			$this->openConnection();
		}
    		function getConnection(){
			return $this->mysqli_conn;
		}
    
    	function openConnection(){
    		if (!$this->isOpened()){
    			global $dbHostname;
    			global $dbUsername;
    			global $dbPassword;
    			global $dbName;
    			
    			$this->mysqli_conn = new mysqli($dbHostname, $dbUsername, $dbPassword);
				if ($this->mysqli_conn->connect_error) 
					die('Connect Error (' . $this->mysqli_conn->connect_errno . ') ' . $this->mysqli_conn->connect_error);

				$this->mysqli_conn->select_db($dbName) or
					die ('Can\'t use pweb: ' . mysqli_error());
			}
    	}
    
    	//Check if the connection to the database id opened
    	function isOpened(){
       		return ($this->mysqli_conn != null);
    	}

   		// Executes a query and returns the results
		function performQuery($queryText) {
			if (!$this->isOpened())
				$this->openConnection();
			
			return $this->mysqli_conn->query($queryText);
		}
		
		function sqlInjectionFilter($parameter){
			if(!$this->isOpened())
				$this->openConnection();
				
			return $this->mysqli_conn->real_escape_string($parameter);
		}
		function prepare($text){
			return $this->mysqli_conn->prepare($text);
		}
		
		function connectionOk(){
			return $this->mysqli_conn->connect_error;
		}
		function closeConnection(){
 	       	//Close the connection
 	       	if($this->mysqli_conn !== null)
				$this->mysqli_conn->close();
			
			$this->mysqli_conn = null;
		}
	}

?>