-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 23, 2021 at 09:11 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cantata`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `AdminId` varchar(10) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Fname` varchar(45) NOT NULL,
  `LName` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cover`
--

CREATE TABLE `cover` (
  `CoverId` int(11) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `UpdatedAt` timestamp NULL DEFAULT NULL,
  `ActiveState` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `LyricId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `covercomment`
--

CREATE TABLE `covercomment` (
  `CoverCommentId` int(11) NOT NULL,
  `Comment` longtext NOT NULL,
  `CoverId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `coverrating`
--

CREATE TABLE `coverrating` (
  `Likes` int(11) NOT NULL DEFAULT 0,
  `Dislikes` int(11) NOT NULL DEFAULT 0,
  `CoverId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cover_has_tags`
--

CREATE TABLE `cover_has_tags` (
  `LyricId` int(11) NOT NULL,
  `TagId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `lyriccomment`
--

CREATE TABLE `lyriccomment` (
  `LyricCommentId` int(11) NOT NULL,
  `Comment` longtext NOT NULL,
  `LyricId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `lyricrating`
--

CREATE TABLE `lyricrating` (
  `Likes` int(11) NOT NULL DEFAULT 0,
  `Dislikes` int(11) NOT NULL DEFAULT 0,
  `LyricId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `lyrics`
--

CREATE TABLE `lyrics` (
  `LyricId` int(11) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `UpdatedAt` timestamp NULL DEFAULT NULL,
  `ActiveState` int(11) NOT NULL,
  `UserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `lyrics_has_tags`
--

CREATE TABLE `lyrics_has_tags` (
  `LyricId` int(11) NOT NULL,
  `TagId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `NotificationId` int(11) NOT NULL,
  `Message` longtext NOT NULL,
  `AdminId` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reportedcover`
--

CREATE TABLE `reportedcover` (
  `ReportId` int(11) NOT NULL,
  `Reason` longtext NOT NULL,
  `CoverId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reportedlyrics`
--

CREATE TABLE `reportedlyrics` (
  `ReportId` int(11) NOT NULL,
  `Reason` longtext NOT NULL,
  `LyricId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reportedusers`
--

CREATE TABLE `reportedusers` (
  `ReportId` int(11) NOT NULL,
  `Reason` longtext NOT NULL,
  `UserId` int(11) NOT NULL,
  `ReportedBy` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `TagId` int(11) NOT NULL,
  `Tag` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserId` int(11) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Fname` varchar(255) NOT NULL,
  `Lname` varchar(45) NOT NULL,
  `Bio` varchar(1000) NOT NULL,
  `Username` varchar(500) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `ActiveStatus` int(11) NOT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `Image` varchar(200) DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL,
  `GoogleId` varchar(255) NOT NULL,
  `RememberToken` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserId`, `Email`, `Fname`, `Lname`, `Bio`, `Username`, `Password`, `ActiveStatus`, `CreatedAt`, `Image`, `UpdatedAt`, `GoogleId`, `RememberToken`) VALUES
(1, 'user@gmail.com', 'Helen', 'Author auth', 'gud at everything', '@helen', 'user1', 1, '2021-09-13 00:00:00', 'http://localhost:5000/images/Capture50.PNG', '2021-09-14 00:00:00', '', 'cantata001'),
(2, 'test.dds0001@gmail.com', 'Test', 'Demo', 'sad', '@a1', '$2b$10$M55FlqPmljepszE4XvvuNuRKm2PD1kZMjunc7Kz26tBF5V7R20qTa', 0, '2021-09-23 12:13:41', 'http://localhost:5000/images/long-des.png', NULL, '', NULL),
(3, 'test1@gmail.com', 'test1', 'demo', 'good', '@test1', '$2b$10$vD6ulNOmHF1rGUbgweEOGeX2ogZ.K8E5EQePe8G21n9rMdSjlAW2.', 0, '2021-09-23 12:39:04', 'http://localhost:5000/images/image-web-home.png', NULL, '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `userrating`
--

CREATE TABLE `userrating` (
  `Likes` int(11) NOT NULL DEFAULT 0,
  `Dislikes` int(11) NOT NULL DEFAULT 0,
  `UserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user_has_followers`
--

CREATE TABLE `user_has_followers` (
  `UserId` int(11) NOT NULL,
  `FollowerId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user_has_notification`
--

CREATE TABLE `user_has_notification` (
  `UserId` int(11) NOT NULL,
  `NotificationId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`AdminId`);

--
-- Indexes for table `cover`
--
ALTER TABLE `cover`
  ADD PRIMARY KEY (`CoverId`),
  ADD KEY `fk_Cover_User1` (`UserId`),
  ADD KEY `fk_Cover_Lyrics1` (`LyricId`);

--
-- Indexes for table `covercomment`
--
ALTER TABLE `covercomment`
  ADD PRIMARY KEY (`CoverCommentId`),
  ADD KEY `fk_CoverComment_Cover1` (`CoverId`);

--
-- Indexes for table `coverrating`
--
ALTER TABLE `coverrating`
  ADD KEY `fk_CoverRating_Cover1` (`CoverId`);

--
-- Indexes for table `cover_has_tags`
--
ALTER TABLE `cover_has_tags`
  ADD PRIMARY KEY (`LyricId`,`TagId`),
  ADD KEY `fk_Cover_has_Tags_Tags1` (`TagId`);

--
-- Indexes for table `lyriccomment`
--
ALTER TABLE `lyriccomment`
  ADD PRIMARY KEY (`LyricCommentId`),
  ADD KEY `fk_LyricComment_Lyrics1` (`LyricId`);

--
-- Indexes for table `lyricrating`
--
ALTER TABLE `lyricrating`
  ADD KEY `fk_LyricRating_Lyrics1` (`LyricId`);

--
-- Indexes for table `lyrics`
--
ALTER TABLE `lyrics`
  ADD PRIMARY KEY (`LyricId`),
  ADD KEY `fk_Lyrics_User1` (`UserId`);

--
-- Indexes for table `lyrics_has_tags`
--
ALTER TABLE `lyrics_has_tags`
  ADD PRIMARY KEY (`LyricId`,`TagId`),
  ADD KEY `fk_Lyrics_has_Tags_Tags1` (`TagId`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`NotificationId`),
  ADD KEY `fk_Notification_Admin` (`AdminId`);

--
-- Indexes for table `reportedcover`
--
ALTER TABLE `reportedcover`
  ADD PRIMARY KEY (`ReportId`,`CoverId`),
  ADD KEY `fk_ReportedContent_Cover10` (`CoverId`);

--
-- Indexes for table `reportedlyrics`
--
ALTER TABLE `reportedlyrics`
  ADD PRIMARY KEY (`ReportId`,`LyricId`),
  ADD KEY `fk_ReportedContent_Lyrics1` (`LyricId`);

--
-- Indexes for table `reportedusers`
--
ALTER TABLE `reportedusers`
  ADD PRIMARY KEY (`ReportId`),
  ADD KEY `fk_ReportedUsers_User1` (`UserId`),
  ADD KEY `fk_ReportedUsers_User2` (`ReportedBy`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`TagId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserId`);

--
-- Indexes for table `userrating`
--
ALTER TABLE `userrating`
  ADD KEY `fk_UserRating_User1` (`UserId`);

--
-- Indexes for table `user_has_followers`
--
ALTER TABLE `user_has_followers`
  ADD PRIMARY KEY (`UserId`,`FollowerId`),
  ADD KEY `fk_User_has_User_User2` (`FollowerId`);

--
-- Indexes for table `user_has_notification`
--
ALTER TABLE `user_has_notification`
  ADD PRIMARY KEY (`UserId`,`NotificationId`),
  ADD KEY `fk_User_has_Notification_Notification1` (`NotificationId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cover`
--
ALTER TABLE `cover`
  MODIFY `CoverId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `covercomment`
--
ALTER TABLE `covercomment`
  MODIFY `CoverCommentId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lyriccomment`
--
ALTER TABLE `lyriccomment`
  MODIFY `LyricCommentId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lyrics`
--
ALTER TABLE `lyrics`
  MODIFY `LyricId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `NotificationId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reportedcover`
--
ALTER TABLE `reportedcover`
  MODIFY `ReportId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reportedlyrics`
--
ALTER TABLE `reportedlyrics`
  MODIFY `ReportId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reportedusers`
--
ALTER TABLE `reportedusers`
  MODIFY `ReportId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cover`
--
ALTER TABLE `cover`
  ADD CONSTRAINT `fk_Cover_Lyrics1` FOREIGN KEY (`LyricId`) REFERENCES `lyrics` (`LyricId`),
  ADD CONSTRAINT `fk_Cover_User1` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`);

--
-- Constraints for table `covercomment`
--
ALTER TABLE `covercomment`
  ADD CONSTRAINT `fk_CoverComment_Cover1` FOREIGN KEY (`CoverId`) REFERENCES `cover` (`CoverId`);

--
-- Constraints for table `coverrating`
--
ALTER TABLE `coverrating`
  ADD CONSTRAINT `fk_CoverRating_Cover1` FOREIGN KEY (`CoverId`) REFERENCES `cover` (`CoverId`);

--
-- Constraints for table `cover_has_tags`
--
ALTER TABLE `cover_has_tags`
  ADD CONSTRAINT `fk_Cover_has_Tags_Cover1` FOREIGN KEY (`LyricId`) REFERENCES `cover` (`CoverId`),
  ADD CONSTRAINT `fk_Cover_has_Tags_Tags1` FOREIGN KEY (`TagId`) REFERENCES `tags` (`TagId`);

--
-- Constraints for table `lyriccomment`
--
ALTER TABLE `lyriccomment`
  ADD CONSTRAINT `fk_LyricComment_Lyrics1` FOREIGN KEY (`LyricId`) REFERENCES `lyrics` (`LyricId`);

--
-- Constraints for table `lyricrating`
--
ALTER TABLE `lyricrating`
  ADD CONSTRAINT `fk_LyricRating_Lyrics1` FOREIGN KEY (`LyricId`) REFERENCES `lyrics` (`LyricId`);

--
-- Constraints for table `lyrics`
--
ALTER TABLE `lyrics`
  ADD CONSTRAINT `fk_Lyrics_User1` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`);

--
-- Constraints for table `lyrics_has_tags`
--
ALTER TABLE `lyrics_has_tags`
  ADD CONSTRAINT `fk_Lyrics_has_Tags_Lyrics1` FOREIGN KEY (`LyricId`) REFERENCES `lyrics` (`LyricId`),
  ADD CONSTRAINT `fk_Lyrics_has_Tags_Tags1` FOREIGN KEY (`TagId`) REFERENCES `tags` (`TagId`);

--
-- Constraints for table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `fk_Notification_Admin` FOREIGN KEY (`AdminId`) REFERENCES `admin` (`AdminId`);

--
-- Constraints for table `reportedcover`
--
ALTER TABLE `reportedcover`
  ADD CONSTRAINT `fk_ReportedContent_Cover10` FOREIGN KEY (`CoverId`) REFERENCES `cover` (`CoverId`);

--
-- Constraints for table `reportedlyrics`
--
ALTER TABLE `reportedlyrics`
  ADD CONSTRAINT `fk_ReportedContent_Lyrics1` FOREIGN KEY (`LyricId`) REFERENCES `lyrics` (`LyricId`);

--
-- Constraints for table `reportedusers`
--
ALTER TABLE `reportedusers`
  ADD CONSTRAINT `fk_ReportedUsers_User1` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`),
  ADD CONSTRAINT `fk_ReportedUsers_User2` FOREIGN KEY (`ReportedBy`) REFERENCES `user` (`UserId`);

--
-- Constraints for table `userrating`
--
ALTER TABLE `userrating`
  ADD CONSTRAINT `fk_UserRating_User1` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`);

--
-- Constraints for table `user_has_followers`
--
ALTER TABLE `user_has_followers`
  ADD CONSTRAINT `fk_User_has_User_User1` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`),
  ADD CONSTRAINT `fk_User_has_User_User2` FOREIGN KEY (`FollowerId`) REFERENCES `user` (`UserId`);

--
-- Constraints for table `user_has_notification`
--
ALTER TABLE `user_has_notification`
  ADD CONSTRAINT `fk_User_has_Notification_Notification1` FOREIGN KEY (`NotificationId`) REFERENCES `notification` (`NotificationId`),
  ADD CONSTRAINT `fk_User_has_Notification_User1` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
