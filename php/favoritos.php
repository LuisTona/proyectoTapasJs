<?php

    require_once('Conexion.php');

    $con = new Conexion();

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $datos = $_REQUEST;
        if($datos != null){
            $nombre = $datos['nombre'];
            $id_tapa = $datos['id_tapa'];
            try{
                $sql = "SELECT id_cliente FROM clientes WHERE nombre_usuario = '$nombre'";
                $result = $con->query($sql);
                if($result->affected_rows > 0){
                    $cliente = $resulst->fecth_assoc();
                    $id_cliente = $cliente['id_cliente'];
                    header("HTTP/1.1 200 ok");
                }

            }catch(mysqli_sql_exception $e){
                header("HTTP/1.1 500 Interval Server Error");
                exit;
            }

            try{
                $sql2 = "INSERT INTO favoritos (id_cliente, id_tapa) VALUES ('$id_cliente', '$id_tapa')";
                $result2 = $con->query($sql2);
                if($result2->affected_rows > 0){
                    header("HTTP/1.1 201 Created");
                    echo json_encode([$con->insert_id]);
                }
            }catch(mysqli_sql_exception $e){
                header("HTTP/1.1 500 Interval Server Error");
                exit;
            }
        }else{
            header("HTTP/1.1 404 Not Found");
            exit;
        }
    }

?>