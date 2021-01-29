/*
SQLyog Enterprise - MySQL GUI v6.15
MySQL - 5.5.5-10.1.38-MariaDB : Database - leavemessage62
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

create database if not exists `leavemessage62`;

USE `leavemessage62`;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*Table structure for table `admins` */

DROP TABLE IF EXISTS `admins`;

CREATE TABLE `admins` (
  `adminId` int(11) NOT NULL AUTO_INCREMENT,
  `adminName` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `adminPwd` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`adminId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `admins` */

insert  into `admins`(`adminId`,`adminName`,`adminPwd`) values (1,'tom','123'),(2,'jarry','123'),(7,'123','123'),(17,'','');

/*Table structure for table `message` */

DROP TABLE IF EXISTS `message`;

CREATE TABLE `message` (
  `messageId` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `content` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `addTime` datetime DEFAULT NULL,
  `face` char(10) COLLATE utf8_unicode_ci DEFAULT '1.gif',
  `reply` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `flag` smallint(6) NOT NULL,
  PRIMARY KEY (`messageId`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `message` */

insert  into `message`(`messageId`,`author`,`title`,`content`,`addTime`,`face`,`reply`,`flag`) values (12,'马会鹏','太极宗师','闪电五连鞭','2020-11-25 16:46:58','1.gif','',0),(14,'12313','123','123','2020-11-26 14:49:08','22.gif','',0),(15,'娃哈哈哈哈哈哈哈','娃哈哈哈哈哈哈哈','娃哈哈哈哈哈哈哈','2020-11-26 14:49:08','1.gif','',0),(16,'娃哈哈哈哈哈哈哈','娃哈哈哈哈哈哈哈','娃哈哈哈哈哈哈哈','2020-11-26 14:49:08','1.gif','',0),(17,'2020-11-26 14:49:08','2020-11-26 14:49:08','2020-11-26 14:49:08','2020-11-26 14:49:08','1.gif','',0),(18,'娃哈哈哈哈哈哈哈','针不戳','凄凄切切群群群','2020-11-26 16:14:53','42.gif','',0),(19,'11111','11111','11111','2020-11-26 16:19:40','1.gif','',0),(20,'131231','11111','111','2020-11-26 16:19:46','1.gif','',0),(21,'111111','111111','1111111111111111111','2020-11-26 16:19:52','1.gif','',0),(22,'131231','131231','131231','2020-11-26 16:20:01','1.gif','',0),(27,'00','00','000','2020-11-27 16:30:18','1.gif','',0),(83,'娃哈哈哈哈哈哈哈','针不戳','1','2020-12-16 11:36:44','1.gif','',0),(84,'131231','123123','111','2020-12-16 11:37:40','1.gif','',0),(85,'娃哈哈哈哈哈哈哈','针不戳','1','2020-12-16 11:40:44','1.gif','',0),(86,'娃哈哈哈哈哈哈哈','针不戳','1','2020-12-16 11:42:56','1.gif','',0),(97,'123','123','123','2020-12-16 21:28:40','7.gif','',0),(98,'123','123','123','2020-12-16 21:34:50','7.gif','',0),(99,'123','123','123','2020-12-16 21:41:20','7.gif','',0),(100,'1','1','1','2020-12-16 21:45:52','1.gif','',0),(101,'2','2','2','2020-12-16 21:45:59','4.gif','',0),(102,'123','123','123','2020-12-17 10:53:40','11.gif','',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
