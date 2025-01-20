<?php

    require_once('../vendor/autoload.php');
    require_once("Conexion.php");

    $con = new Conexion();

    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        try{
            $sql = "SELECT b.nombre_bar, t.nombre , t.descripcion, t.ingredientes, t.id_tapa
                    FROM bar_tapa bt
                    JOIN bares b ON bt.id_bar = b.id_bar
                    JOIN tapas t ON bt.id_tapa = t.id_tapa";
            $result = $con->query($sql);
            if($result->num_rows > 0){
                $tapas = array();
                while($row = $result->fetch_assoc()){
                    $tapas[] = $row;
                }
                header("HTTP/1.1 200 OK");
                echo json_encode($tapas);
            }
        }catch(mysqli_sql_exception $e){
            header("HTTP/1.1 400 Bad Request");
            exit;
        }
    }


?>