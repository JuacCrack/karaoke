<?php
$servername = "162.211.84.136";
$username = "sigloxxcom_angel";
$password = "sigloxx2023*";
$dbname = "sigloxxcom_cantobar";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}