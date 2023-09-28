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

// Obtener valores únicos de la tabla
$valores = array();
$campos = array("artista", "cancion", "genero");

foreach ($campos as $campo) {
    $sql = "SELECT DISTINCT $campo FROM karaoke";
    $result = $conn->query($sql);

    $valores[$campo] = array();
    while ($row = $result->fetch_assoc()) {
        array_push($valores[$campo], $row[$campo]);
    }
}

// Devolver los valores en formato JSON
header('Content-Type: application/json');
echo json_encode($valores);


$conn->close();
?>
