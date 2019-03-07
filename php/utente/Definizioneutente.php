<?php
	
	require_once DIR_UTIL . "/SudokuDbManager.php";
	require_once DIR_UTIL . "/sessionUtil.php";

class Utente{
	private $idUtente;
	private $nome;
	private $cognome;
	private $username;
	private $password;
	private $email;
	private $admin;
	
	public function __construct($fields = array()) {
		if($fields) {
			$this->username = $fields['username'];
			$this->nome = $fields['nome'];
			$this->cognome = $fields['cognome'];
			$this->email = $fields['email'];
			$this->password = $fields['password'];
			$this->admin = 0;
		}
	}
		
	public static function auth($username,$password) {
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("SELECT * FROM user WHERE BINARY username=?");
		checkQuery($stmnt);	
		$stmnt->bind_param("s",$username);
		$stmnt->execute();
		$result = $stmnt->get_result();
		$utente = $result->fetch_object('Utente');
		if(!$utente) 
			return null;
		if($utente->password===$password){
			echo $utente->idUtente;
			echo $password;
			return $utente;
		}
		else
			return null;
	}

	public function __set($field,$value) {
		$this->$field = $value;
	}

	public function __get($field) {
		return $this->$field;
	}

	public function create() {
		global $sudokuDB;
		if(($this->exists_mail($this->email))>0||($this->exists_user($this->username))>0){
			return -1;
		}
		$stmnt = $sudokuDB->prepare("INSERT INTO user(username,nome,cognome,email,password) VALUES(?,?,?,?,?)");
		checkQuery($stmnt);
		$stmnt->bind_param("sssss",$this->username,$this->nome,$this->cognome,$this->email,$this->password);
		$stmnt->execute();
		$this->idUtente = $sudokuDB->getConnection()->insert_id;
		return $this->idUtente;
	}
public static function exists_mail($email){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("SELECT * FROM user WHERE  BINARY email = ?");
		//checkQuery($stmnt);	
		$stmnt->bind_param("s", $email);
		$stmnt->execute();
		$num = $stmnt->get_result()->num_rows;
		return $num;
	}
	public static function exists_user($username){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("SELECT * FROM user WHERE  BINARY username = ? ");
		//checkQuery($stmnt);	
		$stmnt->bind_param("s",$username);
		$stmnt->execute();
		$num = $stmnt->get_result()->num_rows;
		return $num;
	}


	public static function recuperaUtente($id) {
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("SELECT * FROM user WHERE idUtente=?");
		checkQuery($stmnt);
		$stmnt->bind_param("i",$id);
		$stmnt->execute();
		$result = $stmnt->get_result();
		if($result->num_rows == 0) {
			throw new Exception("Nessun utente trovato");
		}
		$utente = $result->fetch_object('Utente');

		return $utente;
	}

	public static function getId($username){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("SELECT idUtente FROM user WHERE username=?");
		checkQuery($stmnt);
		$stmnt->bind_param("s", $username);
		$stmnt->execute();
		$result = $stmnt->get_result();
		if($result->num_rows == 0) {
			throw new Exception("Nessun utente trovato");
		}
		return toArray($result);
	}

	public static function getUsername($id){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("SELECT username FROM user WHERE idUtente=?");
		checkQuery($stmnt);
		$stmnt->bind_param("i", $id);
		$stmnt->execute();
		$result = $stmnt->get_result();

		return toArray($result);
	}

	public static function getUtenti() {
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("SELECT username FROM user ORDER BY nome");
		checkQuery($stmnt);	
		$stmnt->execute();
		$result = $stmnt->get_result();
		return toArray($result);
	}

	public static function updatePassword($id, $password){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("UPDATE user SET password=? WHERE idUtente=?");
		checkQuery($stmnt);	
		$stmnt->bind_param("si", $password, $id);
		$num = $stmnt->execute();
		return $num;		
	}

	public static function updateEmail($id, $email){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("UPDATE user SET email=? WHERE idUtente=?");
		checkQuery($stmnt);	
		$stmnt->bind_param("si", $email, $id);
		$num = $stmnt->execute();
		return $num;		
	}
	public static function deleteUser($username){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("DELETE  FROM user  WHERE username=?");
		checkQuery($stmnt);
		$stmnt->bind_param("s", $username);
		$num = $stmnt->execute();
		return $num;	
	}
	public static function AggiornaClassificaVeryEasy($username,$punt){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("UPDATE classificautenteveryeasy SET punteggioveryeasy=? WHERE username=?");
		checkQuery($stmnt);
		$stmnt->bind_param("ss", $punt,$username);
		$num = $stmnt->execute();
		return $num;
	}
	public static function AggiornaClassificaEasy($username,$punt){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("UPDATE classificautenteeasy SET punteggioeasy=? WHERE username=?");
		checkQuery($stmnt);
		$stmnt->bind_param("ss", $punt,$username);
		$num = $stmnt->execute();
		return $num;
	}
	public static function AggiornaClassificaMedium($username,$punt){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("UPDATE classificautentemedium SET punteggiomedium=? WHERE username=?");
		checkQuery($stmnt);
		$stmnt->bind_param("ss", $punt,$username);
		$num = $stmnt->execute();
		return $num;
	}
	public static function AggiornaClassificaTough($username,$punt){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("UPDATE classificautentetough SET punteggiotough=? WHERE username=?");
		checkQuery($stmnt);
		$stmnt->bind_param("ss", $punt,$username);
		$num = $stmnt->execute();
		return $num;
	}
	public static function AggiornaClassificaExtreme($username,$punt){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("UPDATE classificautenteextreme SET punteggioextreme=? WHERE username=?");
		checkQuery($stmnt);
		$stmnt->bind_param("ss", $punt,$username);
		$num = $stmnt->execute();
		return $num;
	}

//inserimento iniziale nelle classifiche alla registrazione

	public static function InserisciClassificaVeryEasy($username,$punt){
		global $sudokuDB;	
		echo json_encode($punt);
		echo json_encode($username);
		$stmnt = $sudokuDB->prepare("INSERT INTO classificautenteveryeasy(username,punteggioveryeasy) VALUES(?,?)");
		checkQuery($stmnt);
		$stmnt->bind_param("ss",$username,$punt);
		$num = $stmnt->execute();
		return $num;
	}
	public static function InserisciClassificaEasy($username,$punt){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("INSERT INTO classificautenteeasy(username,punteggioeasy) VALUES(?,?)");
		checkQuery($stmnt);
		$stmnt->bind_param("ss", $username, $punt);
		$num = $stmnt->execute();
		return $num;
	}
	public static function InserisciClassificaMedium($username,$punt){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("INSERT INTO classificautentemedium(username,punteggiomedium) VALUES(?,?)");
		checkQuery($stmnt);
		$stmnt->bind_param("ss",$username,$punt);
		$num = $stmnt->execute();
		return $num;
	}
	public static function InserisciClassificaTough($username,$punt){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("INSERT INTO classificautentetough(username,punteggiotough) VALUES(?,?)");
		checkQuery($stmnt);
		$stmnt->bind_param("ss",$username,$punt);
		$num = $stmnt->execute();
		return $num;
	}
	public static function InserisciClassificaExtreme($username,$punt){
		global $sudokuDB;
		$stmnt = $sudokuDB->prepare("INSERT INTO classificautenteextreme(username,punteggioextreme) VALUES(?,?)");
		checkQuery($stmnt);
		$stmnt->bind_param("ss",$username,$punt);
		$num = $stmnt->execute();
		return $num;
	}
//rimozione dalle classifiche al momento dell'eliminazione di un utente

	public static function RimuoviClassificaVeryEasy($username){
		global $sudokuDB;	
		$stmnt = $sudokuDB->prepare("DELETE FROM classificautenteveryeasy WHERE username=?");
		checkQuery($stmnt);
		$stmnt->bind_param("s",$username);
		$num = $stmnt->execute();
		return $num;
	}

	public static function RimuoviClassificaEasy($username){
		global $sudokuDB;	
		$stmnt = $sudokuDB->prepare("DELETE FROM classificautenteeasy WHERE username=?");
		checkQuery($stmnt);
		$stmnt->bind_param("s",$username);
		$num = $stmnt->execute();
		return $num;
	}

	public static function RimuoviClassificaMedium($username){
		global $sudokuDB;	
		$stmnt = $sudokuDB->prepare("DELETE FROM classificautentemedium WHERE username=?");
		checkQuery($stmnt);
		$stmnt->bind_param("s",$username);
		$num = $stmnt->execute();
		return $num;
	}
	public static function RimuoviClassificaTough($username){
		global $sudokuDB;	
		$stmnt = $sudokuDB->prepare("DELETE FROM classificautentetough WHERE username=?");
		checkQuery($stmnt);
		$stmnt->bind_param("s",$username);
		$num = $stmnt->execute();
		return $num;
	}
	public static function RimuoviClassificaExtreme($username){
		global $sudokuDB;	
		$stmnt = $sudokuDB->prepare("DELETE FROM classificautenteextreme WHERE username=?");
		checkQuery($stmnt);
		$stmnt->bind_param("s",$username);
		$num = $stmnt->execute();
		return $num;
	}
	public static function CaricaClassifica($username){//locale dell'utente
			global $sudokuDB;
		$stmnt = $sudokuDB->prepare("SELECT cve.punteggioveryeasy,ce.punteggioeasy,cm.punteggiomedium,ct.punteggiotough,cex.punteggioextreme
FROM classificautenteveryeasy cve INNER JOIN classificautenteeasy ce INNER JOIN classificautentemedium cm INNER JOIN
classificautentetough ct INNER JOIN classificautenteextreme cex
ON  cve.username=ce.username AND ce.username=cm.username AND cm.username=ct.username AND ct.username=cex.username
WHERE cve.username=?");
		checkQuery($stmnt);	
		$stmnt->bind_param("s",$username);
		$stmnt->execute();
		$result = $stmnt->get_result();
		return toArray($result);
	}

	public static function CaricaClassificaGlobale($Livello){
		global $sudokuDB;

switch ($Livello) {
    case "veryeasy":
        $stmnt = $sudokuDB->prepare("SELECT * FROM classificautenteveryeasy ORDER BY punteggioveryeasy asc");
        break;
    case "easy":
  		 $stmnt = $sudokuDB->prepare("SELECT * FROM classificautenteeasy ORDER BY punteggioeasy asc");
        break;
    case "medium":
         $stmnt = $sudokuDB->prepare("SELECT * FROM classificautentemedium ORDER BY punteggiomedium asc");
        break;
    case "tough":
         $stmnt = $sudokuDB->prepare("SELECT * FROM classificautentetough ORDER BY punteggiotough asc ");
        break;
     case "extreme":
         $stmnt = $sudokuDB->prepare("SELECT * FROM classificautenteextreme ORDER BY punteggioextreme asc ");
        break;
 	}
		checkQuery($stmnt);	
		$stmnt->execute();
		$result = $stmnt->get_result();


	while(  $myrow = $result->fetch_array(MYSQLI_NUM)){
		   $new_array[] = $myrow; // Inside while loop
		}
		return $new_array;
	}

	public static function CaricaPartiteUtente($username,$difficolta){
			global $sudokuDB;

        $stmnt = $sudokuDB->prepare("SELECT  punteggio,data  FROM PartiteUtenti where username= ? and difficolta=? ORDER BY punteggio asc");
		checkQuery($stmnt);
		$stmnt->bind_param("ss",$username,$difficolta);	
		$stmnt->execute();
		$result = $stmnt->get_result();
		if($result->num_rows == 0) {
			return -1;
		}
	while(  $myrow = $result->fetch_array(MYSQLI_NUM)){
		   $new_array[] = $myrow; // Inside while loop
		}
		return $new_array;
	}
	public static function InserisciStoricoUtente($username,$punteggio,$difficolta,$data){
		global $sudokuDB;
		echo $data;
		$stmnt = $sudokuDB->prepare("INSERT INTO PartiteUtenti(username,punteggio,difficolta,data) VALUES(?,?,?,?)");
		checkQuery($stmnt);
		$stmnt->bind_param("ssss",$username,$punteggio,$difficolta,$data);
		$num=$stmnt->execute();
		return num;
	}
}

?>