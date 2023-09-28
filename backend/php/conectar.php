<?php
$servername = "162.211.84.136";
$username = "sigloxxcom_angel";
$password = "sigloxx2023*";
$dbname = "sigloxxcom_cantobar";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec('SET NAMES utf8');
} catch (PDOException $e) {
    die("Conexión fallida: " . $e->getMessage());
}
?>
