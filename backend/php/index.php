<?php
    include_once("conectar.php");

    $action = $_GET['action'];

    switch ($action) {
        case 'getAll':
            $data = getAll();
            break;

        default:
            http_response_code(400); 
            $data = ['error' => 'Acción no válida'];
            break;
    }

    header('Content-Type: application/json');
    echo json_encode($data);

    function getAll() {
        global $pdo; 

        try {
            $stmt = $pdo->query('SELECT * FROM karaoke');
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            http_response_code(200); 
            return $data;
        } catch (PDOException $e) {
            http_response_code(500); 
            $data = ['error' => $e->getMessage()];
            return $data;
        }
    }
?>
