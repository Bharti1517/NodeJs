-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2019 at 07:17 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `landandexpand_2`
--

-- --------------------------------------------------------

--
-- Table structure for table `access_table`
--

CREATE TABLE `access_table` (
  `userID` int(11) NOT NULL,
  `programID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `access_table`
--

INSERT INTO `access_table` (`userID`, `programID`) VALUES
(5, 4),
(14, 1),
(7, 2),
(6, 3),
(5, 3);

-- --------------------------------------------------------

--
-- Table structure for table `actionitems`
--

CREATE TABLE `actionitems` (
  `actionItemsID` int(11) DEFAULT NULL,
  `userID` int(11) DEFAULT NULL,
  `programID` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `actionitems`
--

INSERT INTO `actionitems` (`actionItemsID`, `userID`, `programID`, `description`, `comments`, `status`, `startDate`, `endDate`) VALUES
(1, 3, 1, 'Increase headcount', 'working on it', 'In Progress', '2019-04-01', '2019-06-30');

-- --------------------------------------------------------

--
-- Table structure for table `development_program_cost`
--

CREATE TABLE `development_program_cost` (
  `projectID` int(11) DEFAULT NULL,
  `programID` int(11) DEFAULT NULL,
  `projectName` varchar(255) DEFAULT NULL,
  `plannedCost` float DEFAULT NULL,
  `idealCost` float DEFAULT NULL,
  `actualCost` float DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `week` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `development_program_cost`
--

INSERT INTO `development_program_cost` (`projectID`, `programID`, `projectName`, `plannedCost`, `idealCost`, `actualCost`, `state`, `week`) VALUES
(1, 1, 'Break da Bank', 1106, 1100, 1206, 1, 201915),
(2, 1, 'Mega Moolah', 826, 800, 805, 1, 201915),
(3, 1, 'Cricket Star', 996, 995, 990, 1, 201915);

-- --------------------------------------------------------

--
-- Table structure for table `development_program_schedule`
--

CREATE TABLE `development_program_schedule` (
  `projectID` int(11) DEFAULT NULL,
  `programID` int(11) DEFAULT NULL,
  `projectName` varchar(255) DEFAULT NULL,
  `plannedDate` date DEFAULT NULL,
  `estimatedDate` date DEFAULT NULL,
  `Comments` varchar(255) DEFAULT NULL,
  `percentage_of_completion` int(11) NOT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `development_program_schedule`
--

INSERT INTO `development_program_schedule` (`projectID`, `programID`, `projectName`, `plannedDate`, `estimatedDate`, `Comments`, `percentage_of_completion`, `status`) VALUES
(1, 1, 'Break da Bank', '2019-06-15', '2019-06-21', 'enhancements', 70, '1'),
(2, 1, 'Mega Moolah', '2019-06-21', '2019-06-30', 'Bug fixes', 80, '1');

-- --------------------------------------------------------

--
-- Table structure for table `headcount`
--

CREATE TABLE `headcount` (
  `programID` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `quarter` int(11) DEFAULT NULL,
  `onsite` int(11) DEFAULT NULL,
  `Offshore` int(11) DEFAULT NULL,
  `projected` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `headcount`
--

INSERT INTO `headcount` (`programID`, `year`, `quarter`, `onsite`, `Offshore`, `projected`) VALUES
(1, 2018, 4, 0, 85, 0),
(1, 2019, 1, 0, 95, 0),
(1, 2019, 2, 1, 100, 1),
(1, 2019, 3, 1, 110, 1);

-- --------------------------------------------------------

--
-- Table structure for table `monthheadcount`
--

CREATE TABLE `monthheadcount` (
  `programID` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `month` int(11) DEFAULT NULL,
  `headcount` int(11) DEFAULT NULL,
  `projected` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `monthheadcount`
--

INSERT INTO `monthheadcount` (`programID`, `year`, `month`, `headcount`, `projected`) VALUES
(1, 2019, 1, 90, 0),
(1, 2019, 2, 93, 0),
(1, 2019, 3, 95, 0),
(1, 2019, 4, 98, 0),
(1, 2019, 5, 99, 0),
(1, 2019, 6, 100, 1),
(1, 2019, 7, 102, 1),
(1, 2019, 8, 105, 1),
(1, 2019, 9, 110, 1);

-- --------------------------------------------------------

--
-- Table structure for table `programdetails`
--

CREATE TABLE `programdetails` (
  `programID` int(11) NOT NULL,
  `programName` varchar(255) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `programdetails`
--

INSERT INTO `programdetails` (`programID`, `programName`, `state`, `location`) VALUES
(1, 'Game Changers', 1, 'Pune & Hyderabad'),
(2, 'Portfolio                       ', 1, 'Pune'),
(3, 'Testing Shared Services (TSS)', 1, 'Pune & Hyderabad'),
(4, 'Platforms', 1, 'Pune');

-- --------------------------------------------------------

--
-- Table structure for table `revenue`
--

CREATE TABLE `revenue` (
  `programID` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `quarter` int(11) DEFAULT NULL,
  `revenueOnsite` float DEFAULT NULL,
  `revenueoffshore` float DEFAULT NULL,
  `projected` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `revenue`
--

INSERT INTO `revenue` (`programID`, `year`, `quarter`, `revenueOnsite`, `revenueoffshore`, `projected`) VALUES
(1, 2018, 4, 0.5, 4.1, 0),
(1, 2019, 1, 0.7, 4.3, 0),
(1, 2019, 2, 0.8, 4.5, 1),
(1, 2019, 3, 0.9, 4.8, 1);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `roleId` int(11) NOT NULL,
  `roleName` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`roleId`, `roleName`) VALUES
(1, 'AVP'),
(2, 'VBU Head'),
(3, 'Delivery Manager'),
(4, 'Program Manager'),
(5, 'Engagement Manager'),
(6, 'GMR'),
(7, 'Client');

-- --------------------------------------------------------

--
-- Table structure for table `srf`
--

CREATE TABLE `srf` (
  `id` int(11) DEFAULT NULL,
  `srfID` int(11) DEFAULT NULL,
  `programID` int(11) DEFAULT NULL,
  `reqDate` date DEFAULT NULL,
  `offeredDate` date DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `srf`
--

INSERT INTO `srf` (`id`, `srfID`, `programID`, `reqDate`, `offeredDate`, `status`) VALUES
(1, 422178, 1, '2019-05-01', NULL, 'Open'),
(2, 411948, 1, '2019-04-15', NULL, 'Cancelled'),
(3, 456889, 1, '2019-05-16', NULL, 'Open'),
(4, 445898, 1, '2019-05-10', '2019-05-16', 'Offered'),
(5, 424666, 1, '2019-05-05', '2019-05-10', 'Closed');

-- --------------------------------------------------------

--
-- Table structure for table `support_program_cost`
--

CREATE TABLE `support_program_cost` (
  `projectID` int(11) DEFAULT NULL,
  `programID` int(11) DEFAULT NULL,
  `projectName` varchar(255) DEFAULT NULL,
  `devCost` float DEFAULT NULL,
  `qaCost` float DEFAULT NULL,
  `pcCost` float DEFAULT NULL,
  `pmCost` float DEFAULT NULL,
  `week` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `taskDescription` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `support_program_cost`
--

INSERT INTO `support_program_cost` (`projectID`, `programID`, `projectName`, `devCost`, `qaCost`, `pcCost`, `pmCost`, `week`, `state`, `taskDescription`) VALUES
(1, 2, 'Support', 110, 50, 10, 15, 201915, 1, 'CDN Cache issue'),
(1, 2, 'Support', 50, 10, 0, 0, 201915, 1, 'Durban Support');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `roleID` int(200) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `emailID` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `managerID` int(11) DEFAULT NULL,
  `allocation` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `roleID`, `firstName`, `lastName`, `emailID`, `description`, `designation`, `username`, `password`, `managerID`, `allocation`, `state`) VALUES
(1, 1, 'Prameela', 'K', 'prameela.k@zensar.com', 'ADC', NULL, 'PK0001', 'prameela123', 0, 0, NULL),
(2, 2, 'Raju', 'Hari', 'Raju.H@zensar.com', 'ADC', NULL, 'RH0002', 'Raju123', 1, 0, NULL),
(3, 3, 'Niraj', 'N', 'Niraj.N@zensar.com', 'Derivco ODC', NULL, 'NN0003', 'NirajN123', 2, 0, NULL),
(4, 4, 'Pallavi', 'Kale', 'Pallavi.k@zensar.com', 'Game Changers', NULL, 'PK0004', 'Pallavi123', 3, 0, 0),
(5, 4, 'Anand', 'Joshi', 'Anand.J@zensar.com', 'Platforms', NULL, 'AJ0005', 'Anand123', 3, 0, NULL),
(6, 4, 'Ashish', 'Dhagat', 'Ashish.D@zensar.com', 'Testing Shared Services', NULL, 'AD0006', 'Ashish123', 3, 0, NULL),
(7, 4, 'Ashfaq', 'Sorathia', 'Ashfaq.S@zensar.com', 'Portfolio', NULL, 'AS0007', 'Ashfaq123', 3, 0, NULL),
(8, 5, 'Ravi', 'Saha', 'Ravi.S@zensar.com', '', NULL, 'RS0008', 'Ravi123', 2, 0, NULL),
(9, 6, 'Ruhi', 'B', 'Ruhi.S@zensar.com', '.', NULL, 'RB0009', 'Ruhi123', 2, 0, NULL),
(10, 2, 'K', 'K', 'K.K@zensar.com', '.', NULL, 'KK0010', 'KK123', 1, 0, NULL),
(11, 7, '', 'Willett', 'Mark.Willett@derivco.co.za', 'Client ', NULL, 'Mark W', 'mark123', 0, 0, NULL),
(12, 7, 'Theo', 'Naicker', 'Theo.Naicker@derivco.co.za', 'Client', NULL, 'Theo N', 'theo123', 0, 0, NULL),
(13, 4, 'Avinash', 'Kale', 'a.kale2@zensar.com', NULL, 'Sr Vice President', 'AK18629', 'avinash123', 2, NULL, NULL),
(14, 3, 'Akshaya', 'Alva', 'akshaya.alva@zensar.com', NULL, 'Program Manager', 'AA50434', 'akshaya123', 2, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access_table`
--
ALTER TABLE `access_table`
  ADD KEY `userID` (`userID`),
  ADD KEY `FK_PersonOrder` (`programID`);

--
-- Indexes for table `actionitems`
--
ALTER TABLE `actionitems`
  ADD KEY `userID` (`userID`),
  ADD KEY `programID` (`programID`);

--
-- Indexes for table `development_program_cost`
--
ALTER TABLE `development_program_cost`
  ADD KEY `programID` (`programID`);

--
-- Indexes for table `development_program_schedule`
--
ALTER TABLE `development_program_schedule`
  ADD KEY `programID` (`programID`);

--
-- Indexes for table `headcount`
--
ALTER TABLE `headcount`
  ADD KEY `programID` (`programID`);

--
-- Indexes for table `monthheadcount`
--
ALTER TABLE `monthheadcount`
  ADD KEY `programID` (`programID`);

--
-- Indexes for table `programdetails`
--
ALTER TABLE `programdetails`
  ADD PRIMARY KEY (`programID`);

--
-- Indexes for table `revenue`
--
ALTER TABLE `revenue`
  ADD KEY `programID` (`programID`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`roleId`);

--
-- Indexes for table `srf`
--
ALTER TABLE `srf`
  ADD KEY `programID` (`programID`);

--
-- Indexes for table `support_program_cost`
--
ALTER TABLE `support_program_cost`
  ADD KEY `programID` (`programID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`),
  ADD KEY `Role_contraint` (`roleID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `roleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `access_table`
--
ALTER TABLE `access_table`
  ADD CONSTRAINT `FK_PersonOrder` FOREIGN KEY (`programID`) REFERENCES `programdetails` (`programID`),
  ADD CONSTRAINT `access_table_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`);

--
-- Constraints for table `actionitems`
--
ALTER TABLE `actionitems`
  ADD CONSTRAINT `actionitems_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`),
  ADD CONSTRAINT `actionitems_ibfk_2` FOREIGN KEY (`programID`) REFERENCES `programdetails` (`programID`);

--
-- Constraints for table `development_program_cost`
--
ALTER TABLE `development_program_cost`
  ADD CONSTRAINT `development_program_cost_ibfk_1` FOREIGN KEY (`programID`) REFERENCES `programdetails` (`programID`);

--
-- Constraints for table `development_program_schedule`
--
ALTER TABLE `development_program_schedule`
  ADD CONSTRAINT `development_program_schedule_ibfk_1` FOREIGN KEY (`programID`) REFERENCES `programdetails` (`programID`);

--
-- Constraints for table `headcount`
--
ALTER TABLE `headcount`
  ADD CONSTRAINT `headcount_ibfk_1` FOREIGN KEY (`programID`) REFERENCES `programdetails` (`programID`);

--
-- Constraints for table `monthheadcount`
--
ALTER TABLE `monthheadcount`
  ADD CONSTRAINT `monthheadcount_ibfk_1` FOREIGN KEY (`programID`) REFERENCES `programdetails` (`programID`);

--
-- Constraints for table `revenue`
--
ALTER TABLE `revenue`
  ADD CONSTRAINT `revenue_ibfk_1` FOREIGN KEY (`programID`) REFERENCES `programdetails` (`programID`);

--
-- Constraints for table `srf`
--
ALTER TABLE `srf`
  ADD CONSTRAINT `srf_ibfk_1` FOREIGN KEY (`programID`) REFERENCES `programdetails` (`programID`);

--
-- Constraints for table `support_program_cost`
--
ALTER TABLE `support_program_cost`
  ADD CONSTRAINT `support_program_cost_ibfk_1` FOREIGN KEY (`programID`) REFERENCES `programdetails` (`programID`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `Role_contraint` FOREIGN KEY (`roleID`) REFERENCES `role` (`roleId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
