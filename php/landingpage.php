<?php

    require_once('../vendor/autoload.php');
    require_once("Conexion.php");

    $con = new Conexion();

    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        try{
            $sql = "SELECT b.nombre AS nombre_bar, t.nombre AS nombre_tapa , t.descripcion, t.ingredientes, t.id_tapa FROM tapas t JOIN bares b ON b.id_bar = t.bar"; 
                    
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