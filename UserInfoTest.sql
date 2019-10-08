-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.62-log - MySQL Community Server (GPL)
-- 服务器OS:                        Win64
-- HeidiSQL 版本:                  10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for test
CREATE DATABASE IF NOT EXISTS `test` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `test`;

-- Dumping structure for table test.userinfotest
DROP TABLE IF EXISTS `userinfotest`;
CREATE TABLE IF NOT EXISTS `userinfotest` (
  `User_ID` int(11) NOT NULL AUTO_INCREMENT,
  `User_Name` char(20) NOT NULL,
  `User_Password` char(20) NOT NULL,
  PRIMARY KEY (`User_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Dumping data for table test.userinfotest: ~5 rows (大约)
/*!40000 ALTER TABLE `userinfotest` DISABLE KEYS */;
INSERT INTO `userinfotest` (`User_ID`, `User_Name`, `User_Password`) VALUES
	(1, 'zhangsan', '123456'),
	(2, 'lisi', '1234567'),
	(3, 'wangwu', '12345678'),
	(6, 'Smart', 'aassdd'),
	(7, 'hello', 'password');
/*!40000 ALTER TABLE `userinfotest` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
