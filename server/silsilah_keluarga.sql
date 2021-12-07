-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 06, 2021 at 10:44 AM
-- Server version: 10.2.3-MariaDB-log
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `silsilah_keluarga`
--

-- --------------------------------------------------------

--
-- Table structure for table `album_keluarga`
--

CREATE TABLE `album_keluarga` (
  `id_album` int(5) NOT NULL,
  `nama_album` varchar(100) NOT NULL,
  `lokasi` varchar(100) NOT NULL,
  `cover_album` text NOT NULL,
  `tanggal_buat` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `album_keluarga`
--

INSERT INTO `album_keluarga` (`id_album`, `nama_album`, `lokasi`, `cover_album`, `tanggal_buat`) VALUES
(22, 'Jalan-Jalan Keluarga', 'Bandung, Jawa Barat', 'http://localhost:3001/uploads/226633-1638692999036.jpg', 'Minggu, 5 Desember 2021'),
(23, 'Wisuda Adrian', 'Bandung, Jawa Barat', 'http://localhost:3001/uploads/2266292-1638693037864.jpg', 'Minggu, 5 Desember 2021'),
(24, 'Kumpul Keluarga', 'Bandung, Jawa Barat', 'http://localhost:3001/uploads/226634-1638693068254.jpg', 'Minggu, 5 Desember 2021'),
(25, 'Kumpul Saudara', 'Bandung, Jawa Barat', 'http://localhost:3001/uploads/226637-1638693438892.jpg', 'Minggu, 5 Desember 2021');

-- --------------------------------------------------------

--
-- Table structure for table `biodata_keluarga`
--

CREATE TABLE `biodata_keluarga` (
  `id` int(5) NOT NULL,
  `nama` varchar(50) DEFAULT NULL,
  `tanggal_lahir` varchar(20) DEFAULT NULL,
  `tempat_lahir` varchar(100) DEFAULT NULL,
  `jenis_kelamin` enum('--Pilih Jenis Kelamin--','Pria','Wanita') NOT NULL DEFAULT '--Pilih Jenis Kelamin--',
  `foto` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `biodata_keluarga`
--

INSERT INTO `biodata_keluarga` (`id`, `nama`, `tanggal_lahir`, `tempat_lahir`, `jenis_kelamin`, `foto`) VALUES
(30, 'Adrian Syahputra Alfinda (Creator)', '1998-03-05', 'Pekanbaru, Riau', 'Pria', 'http://localhost:3001/uploads/foto 4x3-1638692502598.jpg'),
(31, 'Syafnimar Maar', '1946-01-01', 'Pekanbaru, Sumatera Barat', 'Wanita', 'http://localhost:3001/uploads/22662923-1638691401774.jpg'),
(32, 'Rida', '1972-08-05', 'Bandung, Jawa Barat', 'Wanita', 'http://localhost:3001/uploads/226630-1638691510306.jpg'),
(34, 'Firya Fitri Fadhila Alfinda', '2001-05-22', 'Bandung, Jawa Barat', 'Wanita', 'http://localhost:3001/uploads/a-1638691647202.jpg'),
(35, 'Firmansyah Algoumar', '1968-06-01', 'Padang, Sumetara Barat', 'Pria', 'http://localhost:3001/uploads/226628-1638691749879.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `contoh`
--

CREATE TABLE `contoh` (
  `id` int(5) NOT NULL,
  `coba` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contoh`
--

INSERT INTO `contoh` (`id`, `coba`) VALUES
(1, 'bbb,aaa,'),
(2, 'aaa,bbb,aaa,'),
(3, 'aaa,bbb,aaa,'),
(4, 'aaa,bbb,'),
(5, 'aaa,bbb,');

-- --------------------------------------------------------

--
-- Table structure for table `gambar_keluarga`
--

CREATE TABLE `gambar_keluarga` (
  `id_gambar` int(5) NOT NULL,
  `id_album` int(5) DEFAULT NULL,
  `gambar` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gambar_keluarga`
--

INSERT INTO `gambar_keluarga` (`id_gambar`, `id_album`, `gambar`) VALUES
(19, 17, 'http://localhost:3001/uploads/[Anitoki] GP 10 [1080p] [38D6ECF2].mkv_snapshot_13.51_[2020.06.08_10.39.37]-1638090640556.jpg'),
(26, 17, 'http://localhost:3001/uploads/[Anitoki] MDO 05 [1080p] [34656F0F].mkv_snapshot_18.28_[2020.11.03_13.58.14]-1638113475272.jpg'),
(29, 19, 'http://localhost:3001/uploads/[Anitoki]_YC_10_[1080p]_[E5B49F74].mkv_snapshot_05.11.844-1638113497896.jpg'),
(30, 19, 'http://localhost:3001/uploads/[Anitoki] GP 10 [1080p] [38D6ECF2].mkv_snapshot_23.31_[2020.06.08_10.50.29]-1638113752210.jpg'),
(31, 19, 'http://localhost:3001/uploads/[Anitoki] GP 10 [1080p] [38D6ECF2].mkv_snapshot_23.32_[2020.06.08_10.50.30]-1638113752211.jpg'),
(32, 19, 'http://localhost:3001/uploads/[Anitoki] GP 10 [1080p] [38D6ECF2].mkv_snapshot_23.32_[2020.06.08_10.50.34]-1638113752215.jpg'),
(36, 19, 'http://localhost:3001/uploads/[Anitoki] ORG S3 12 [1080p] [A3D64106].mkv_snapshot_04.27_[2020.09.28_01.17.12]-1638113833386.jpg'),
(37, 19, 'http://localhost:3001/uploads/[Anitoki] ORG S3 12 [1080p] [A3D64106].mkv_snapshot_19.20_[2020.09.28_01.37.03]-1638113833390.jpg'),
(38, 19, 'http://localhost:3001/uploads/[Anitoki] ORG S3 12 [1080p] [A3D64106].mkv_snapshot_19.19_[2020.09.28_01.37.02]-1638113833388.jpg'),
(39, 19, 'http://localhost:3001/uploads/[Anitoki] ORG S3 12 [1080p] [A3D64106].mkv_snapshot_19.24_[2020.09.28_01.37.08]-1638113833393.jpg'),
(40, 18, 'http://localhost:3001/uploads/[Anitoki] GP 10 [1080p] [38D6ECF2].mkv_snapshot_23.32_[2020.06.08_10.50.30]-1638114301948.jpg'),
(41, 19, 'http://localhost:3001/uploads/[Anitoki] ORG S3 02 [1080p] [6A977FB5].mkv_snapshot_17.31_[2020.07.17_14.48.21]-1638114361133.jpg'),
(42, 18, 'http://localhost:3001/uploads/[Anitoki] UwA 07 [1080p] [87C23287].mkv_snapshot_02.47_[2020.08.22_06.29.00]-1638281122313.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `hubungan_keluarga`
--

CREATE TABLE `hubungan_keluarga` (
  `id_hubungan` int(5) NOT NULL,
  `id` int(5) NOT NULL,
  `kakek` varchar(100) NOT NULL,
  `nenek` varchar(100) NOT NULL,
  `ayah` varchar(100) NOT NULL,
  `ibu` varchar(100) NOT NULL,
  `suami_istri` varchar(100) NOT NULL,
  `anak_laki_laki` varchar(100) NOT NULL,
  `anak_perempuan` varchar(100) NOT NULL,
  `kakak_laki_laki` varchar(100) NOT NULL,
  `kakak_perempuan` varchar(100) NOT NULL,
  `adik_laki_laki` varchar(100) NOT NULL,
  `adik_perempuan` varchar(100) NOT NULL,
  `saudara_laki_laki` varchar(100) NOT NULL,
  `saudara_perempuan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hubungan_keluarga`
--

INSERT INTO `hubungan_keluarga` (`id_hubungan`, `id`, `kakek`, `nenek`, `ayah`, `ibu`, `suami_istri`, `anak_laki_laki`, `anak_perempuan`, `kakak_laki_laki`, `kakak_perempuan`, `adik_laki_laki`, `adik_perempuan`, `saudara_laki_laki`, `saudara_perempuan`) VALUES
(9, 31, '-', '-', '-', '-', '(Alm) Hj, Gouzali Saydam', 'Firmansyah Algoumar,', '-,', ',', '-,', ',', '-,', '-,', '-,'),
(13, 35, '-', '-', '-', 'Syafnimar Maar', 'Rida', 'Adrian Syahputra Alfinda,', 'Firya Fitri Fadhila Alfinda,', ',', '-,', ',', '-,', '-,', '-,'),
(14, 32, '-', '-', '-', 'Syafnimar Maar', 'Firmansyah Algoumar', 'Adrian Syahputra Alfinda,', 'Firya Fitri Fadhila Alfinda,', ',', '-,', ',', '-,', '-,', '-,'),
(15, 30, '-', 'Syafnimar Maar', 'Firmansyah Algoumar', 'Rida', '-', '-,', '-,', ',', '-,', ',', 'Firya Fitri Fadhila Alfinda,', '-,', '-,'),
(16, 34, '-', 'Syafnimar Maar', 'Firmansyah Algoumar', 'Rida', '-', '-,', '-,', 'Adrian Syahputra Alfinda,', '-,', ',', '-,', '-,', '-,');

-- --------------------------------------------------------

--
-- Table structure for table `info_pendidikan_keluarga`
--

CREATE TABLE `info_pendidikan_keluarga` (
  `id_pendidikan` int(5) NOT NULL,
  `id` int(5) DEFAULT NULL,
  `tk` varchar(100) DEFAULT NULL,
  `sd` varchar(100) DEFAULT NULL,
  `smp` varchar(100) DEFAULT NULL,
  `smk` varchar(100) DEFAULT NULL,
  `pendidikan_tinggi` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `info_pendidikan_keluarga`
--

INSERT INTO `info_pendidikan_keluarga` (`id_pendidikan`, `id`, `tk`, `sd`, `smp`, `smk`, `pendidikan_tinggi`) VALUES
(7, 0, '-', '-', '-', '-', '-'),
(9, 30, '-', 'SDN 005 Bukit Raya Pekanbaru, Riau', 'SMPN 45 Bandung, Jawa Barat', 'SMKN 2 Bandung, Jawa Barat', 'Universitas Komputer Indonesia, Bandung, Jawa Barat'),
(10, 31, '-', '-', '-', '-', '-'),
(11, 32, '-', '-', '-', '-', 'Universitas Komputer Indonesia'),
(12, 34, '-', 'SD Griba Bandung, Jawa Barat', 'SMP Swasta', 'SMKN 2 Bandung, Jawa Barat', 'Universitas Widyatama'),
(13, 35, '-', '-', '-', '-', 'Universitas Pasundan');

-- --------------------------------------------------------

--
-- Table structure for table `moment_keluarga`
--

CREATE TABLE `moment_keluarga` (
  `id_moment` int(5) NOT NULL,
  `judul_moment` text NOT NULL,
  `isi_moment` text NOT NULL,
  `gambar_moment` varchar(150) NOT NULL,
  `tanggal_post` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `moment_keluarga`
--

INSERT INTO `moment_keluarga` (`id_moment`, `judul_moment`, `isi_moment`, `gambar_moment`, `tanggal_post`) VALUES
(4, 'Jalan-Jalan Bersama Keluarga Besar', 'Bersama-sama mencari tempat makan untuk merayakan ulang tahun nenek, setelah makan bersama kami melakukan foto bersama yang di foto oleh staff rumah makan. ', 'http://localhost:3001/uploads/226633-1638693595377.jpg', 'Minggu, 5 Desember 2021'),
(5, 'Saudara Perempuan Berpose', 'lagi pose bersama-sama', 'http://localhost:3001/uploads/226637-1638693779342.jpg', 'Minggu, 5 Desember 2021');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `album_keluarga`
--
ALTER TABLE `album_keluarga`
  ADD PRIMARY KEY (`id_album`);

--
-- Indexes for table `biodata_keluarga`
--
ALTER TABLE `biodata_keluarga`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contoh`
--
ALTER TABLE `contoh`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gambar_keluarga`
--
ALTER TABLE `gambar_keluarga`
  ADD PRIMARY KEY (`id_gambar`);

--
-- Indexes for table `hubungan_keluarga`
--
ALTER TABLE `hubungan_keluarga`
  ADD PRIMARY KEY (`id_hubungan`);

--
-- Indexes for table `info_pendidikan_keluarga`
--
ALTER TABLE `info_pendidikan_keluarga`
  ADD PRIMARY KEY (`id_pendidikan`);

--
-- Indexes for table `moment_keluarga`
--
ALTER TABLE `moment_keluarga`
  ADD PRIMARY KEY (`id_moment`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `album_keluarga`
--
ALTER TABLE `album_keluarga`
  MODIFY `id_album` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `biodata_keluarga`
--
ALTER TABLE `biodata_keluarga`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `contoh`
--
ALTER TABLE `contoh`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `gambar_keluarga`
--
ALTER TABLE `gambar_keluarga`
  MODIFY `id_gambar` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `hubungan_keluarga`
--
ALTER TABLE `hubungan_keluarga`
  MODIFY `id_hubungan` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `info_pendidikan_keluarga`
--
ALTER TABLE `info_pendidikan_keluarga`
  MODIFY `id_pendidikan` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `moment_keluarga`
--
ALTER TABLE `moment_keluarga`
  MODIFY `id_moment` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
