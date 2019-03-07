<?php
	
	//setSession: set $_SESSION properly
	function setSession($username, $userId){
		$_SESSION['userId'] = $userId;
		$_SESSION['username'] = $username;
	}

	//isLogged: check if user has logged in and, if it is the case, returns the username
	function isLogged(){		
		if(isset($_SESSION['userId']))
			return $_SESSION['userId'];
		else
			return false;
	}
	function toArray($mysqliResult) {
		$output = array();
		while($row = $mysqliResult->fetch_assoc())
			array_push($output, $row);
		return $output;
	}

	function checkQuery($statement) {
		if(!$statement) {
			throw new Exception("Preparazione query fallita");
		}
	}
?>