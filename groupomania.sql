-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomania
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `responses`
--

DROP TABLE IF EXISTS `responses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `responses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(500) NOT NULL,
  `date` datetime DEFAULT NULL,
  `author` varchar(100) NOT NULL,
  `topicId` int NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `responses`
--

LOCK TABLES `responses` WRITE;
/*!40000 ALTER TABLE `responses` DISABLE KEYS */;
INSERT INTO `responses` VALUES (33,'Je test les réponses','2022-04-30 00:00:00','test test',1,'2022-04-30 16:03:10','2022-04-30 16:03:10'),(34,'je reteste','2022-04-30 00:00:00','test test',1,'2022-04-30 16:03:29','2022-04-30 16:03:29'),(35,'test','2022-04-30 00:00:00','test test',1,'2022-04-30 16:38:16','2022-04-30 16:38:16'),(36,'test','2022-04-30 00:00:00','test test',1,'2022-04-30 16:39:42','2022-04-30 16:39:42'),(37,'test','2022-04-30 00:00:00','test test',1,'2022-04-30 16:40:08','2022-04-30 16:40:08'),(38,'test','2022-04-30 00:00:00','test test',1,'2022-04-30 16:43:33','2022-04-30 16:43:33'),(39,'test','2022-04-30 16:45:02','test test',1,'2022-04-30 16:45:02','2022-04-30 16:45:02'),(40,'test','2022-04-30 16:49:04','test test',2,'2022-04-30 16:49:04','2022-04-30 16:49:04'),(41,'test','2022-04-30 16:56:01','test test',5,'2022-04-30 16:56:01','2022-04-30 16:56:01'),(42,'test','2022-05-02 08:00:49','test test',5,'2022-05-02 08:00:49','2022-05-02 08:00:49'),(43,'test','2022-05-02 11:13:39','test test',6,'2022-05-02 11:13:39','2022-05-02 11:13:39'),(44,'test','2022-05-02 11:23:10','test test',3,'2022-05-02 11:23:10','2022-05-02 11:23:10'),(45,'test','2022-05-03 07:51:03','test test',2,'2022-05-03 07:51:03','2022-05-03 07:51:03'),(46,'test','2022-05-03 07:51:19','test test',4,'2022-05-03 07:51:19','2022-05-03 07:51:19'),(47,'hey c\'est trier','2022-05-03 07:51:34','test test',1,'2022-05-03 07:51:34','2022-05-03 07:51:34'),(48,'test','2022-05-03 07:53:37','test test',1,'2022-05-03 07:53:37','2022-05-03 07:53:37'),(49,'test','2022-05-03 07:54:45','test test',1,'2022-05-03 07:54:45','2022-05-03 07:54:45'),(50,'Blaablavldkqjdlkqn ld qlkzdnjqlkdq dklqj lkdjql dqjl ldkzj','2022-05-03 11:46:51','test test',1,'2022-05-03 11:46:51','2022-05-03 11:46:51'),(51,'test2','2022-05-03 12:17:53','test test',3,'2022-05-03 12:17:53','2022-05-03 12:17:53'),(52,'test','2022-05-03 12:18:31','test test',3,'2022-05-03 12:18:31','2022-05-03 12:18:31'),(53,'test','2022-05-03 12:19:37','test test',3,'2022-05-03 12:19:37','2022-05-03 12:19:37'),(54,'test3','2022-05-03 12:19:48','test test',3,'2022-05-03 12:19:48','2022-05-03 12:19:48');
/*!40000 ALTER TABLE `responses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topics`
--

DROP TABLE IF EXISTS `topics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `content` varchar(5000) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `responses` int DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topics`
--

LOCK TABLES `topics` WRITE;
/*!40000 ALTER TABLE `topics` DISABLE KEYS */;
INSERT INTO `topics` VALUES (3,'test23','test','teqst','2022-04-30 00:00:00',5,'2022-04-30 12:40:03','2022-05-03 12:19:48');
/*!40000 ALTER TABLE `topics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL DEFAULT 'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png',
  `role` enum('user','admin') NOT NULL DEFAULT 'user',
  `password` varchar(255) NOT NULL DEFAULT 'fail',
  `token` varchar(255) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Test','test','test123@test.fr','https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png','user','$2b$10$NjP7gaxqr6uC6lEwava28.1zdP2pKKYGNQDoqmRrVg4wbauM2lcum','0','2022-04-26 09:31:59','2022-05-03 11:20:22'),(2,'Admin','Admin','admin@test.fr','https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png','admin','$2b$10$LIY.PqaLIMHq2sL0YqiY6./7REKoHvZndgjAPsb4BCaBMD03eNihq','0','2022-04-28 15:43:05','2022-04-29 14:53:31'),(4,'testDelete','test','test@test.fr','https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png','user','$2b$10$WR8BVk.cZ/EWBxGojqGMje6LsMPU2AAa4eM3n69//IllQ9ef9lvRi','0','2022-04-30 09:17:22','2022-04-30 09:17:22');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-03 15:31:47
