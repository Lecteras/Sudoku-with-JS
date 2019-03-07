DROP DATABASE if EXISTS sudokudb;
CREATE DATABASE  IF NOT EXISTS `sudokudb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `sudokudb`;
-- MySQL dump 10.13  Distrib 5.6.19, for osx10.7 (i386)
--
-- Host: 127.0.0.1    Database: sudokudb
-- ------------------------------------------------------
-- Server version 5.6.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `idUtente` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `cognome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `admin` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`idUtente`),
  UNIQUE KEY `Username` (`username`),
  UNIQUE KEY `Username_2` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'pippo','pippo','disney','pippo@gmail.com','pippo',0),(2,'pluto','pluto','disney','pluto@gmail.com','pluto',0),(3,'pweb','pweb','pweb','pweb@pweb.com','pweb',0),(4,'admin','admin','admin','admin@admin.com','admin',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `classificautenteveryeasy`
--

DROP TABLE IF EXISTS `classificautenteveryeasy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classificautenteveryeasy` (
  `username` varchar(50) NOT NULL,
  `punteggioveryeasy` varchar(50) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classificautenteveryeasy`
--

LOCK TABLES `classificautenteveryeasy` WRITE;
/*!40000 ALTER TABLE `classificautenteveryeasy` DISABLE KEYS */;
INSERT INTO `classificautenteveryeasy` VALUES ('pippo','23:40'),('pluto','43:10'),('pweb','15:30'),('admin','32:30');
/*!40000 ALTER TABLE `classificautenteveryeasy` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `classificautenteeasy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classificautenteeasy` (
  `username` varchar(50) NOT NULL,
  `punteggioeasy` varchar(50) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classificautenteeasy`
--

LOCK TABLES `classificautenteeasy` WRITE;
/*!40000 ALTER TABLE `classificautenteeasy` DISABLE KEYS */;
INSERT INTO `classificautenteeasy` VALUES ('pippo','15:04'),('pluto','34:60'),('pweb','40:50'),('admin','36:40');
/*!40000 ALTER TABLE `classificautenteeasy` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `classificautentemedium`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classificautentemedium` (
  `username` varchar(50) NOT NULL,
  `punteggiomedium` varchar(50) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classificautentemedium`
--

LOCK TABLES `classificautentemedium` WRITE;
/*!40000 ALTER TABLE `classificautentemedium` DISABLE KEYS */;
INSERT INTO `classificautentemedium` VALUES ('pippo','43:02'),('pluto','20:50'),('pweb','32:40'),('admin','39:30');
/*!40000 ALTER TABLE `classificautentemedium` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `classificautentetough`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classificautentetough` (
  `username` varchar(50) NOT NULL,
  `punteggiotough` varchar(50) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classificautentetough`
--

LOCK TABLES `classificautentetough` WRITE;
/*!40000 ALTER TABLE `classificautentetough` DISABLE KEYS */;
INSERT INTO `classificautentetough` VALUES ('pippo','10:60'),('pluto','45:30'),('pweb','23:00'),('admin','19:30');
/*!40000 ALTER TABLE `classificautentetough` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `classificautenteextreme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classificautenteextreme` (
  `username` varchar(50) NOT NULL,
  `punteggioextreme` varchar(50) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classificautenteextreme`
--

LOCK TABLES `classificautenteextreme` WRITE;
/*!40000 ALTER TABLE `classificautenteextreme` DISABLE KEYS */;
INSERT INTO `classificautenteextreme` VALUES ('pippo','40:30'),('pluto','50:30'),('pweb','23:04'),('admin','15:70');
/*!40000 ALTER TABLE `classificautenteextreme` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `PartiteUtenti`
--

DROP TABLE IF EXISTS `PartiteUtenti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PartiteUtenti` (
`idUtente` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `punteggio` varchar(50) NOT NULL,
  `difficolta` varchar(50) NOT NULL,
  `data`         varchar(50) NOT NULL, 
   PRIMARY KEY (`idUtente`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PartiteUtenti`
--

LOCK TABLES `PartiteUtenti` WRITE;
/*!40000 ALTER TABLE `PartiteUtenti` DISABLE KEYS */;
INSERT INTO `PartiteUtenti` VALUES (0,'pippo','52:30','veryeasy','2018/03/02'),(1,'pluto','55:43','easy','2018/05/02'),(2,'pweb','39:60','medium','2018/03/20'),(3,'admin','53:40','tough','2016/05/02'),(4,'admin','15:70','extreme','2018/06/02'),(5,'pippo','40:30','extreme','2017/11/12'),(6,'pluto','50:30','extreme','2017/10/12'),(7,'pweb','23:04','extreme','2017/07/12'),(8,'pippo','10:60','tough','2015/11/12'),(9,'pluto','45:30','tough','2015/11/10'),(10,'pweb','23:00','tough','2015/11/12'),(11,'pippo','43:02','medium','2016/11/12'),(12,'pluto','20:50','medium','2016/11/12'),(13,'pweb','32:40','medium','2016/11/12'),(14,'admin','39:30','medium','2016/11/12'),(15,'pippo','15:04','easy','2018/11/02'),(16,'pluto','34:60','easy','2015/03/12'),(17,'pweb','40:50','easy','2015/03/12'),
(18,'pippo','23:40','veryeasy','2018/06/02'),(19,'pluto','43:10','veryeasy','2015/03/12'),(20,'pweb','15:30','veryeasy','2015/09/12'),(21,'admin','32:30','veryeasy','2015/09/12'),(22,'admin','39:30','extreme','2018/01/12'),(23,'admin','36:40','easy','2018/08/12');
/*!40000 ALTER TABLE `PartiteUtenti` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-12-11 11:44:33
