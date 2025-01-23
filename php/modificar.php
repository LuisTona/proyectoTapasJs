<?php

    require_once('Conexion.php');

    $con = new Conexion();

    if($_SERVER['REQUEST_METHOD'] === 'PUT'){
        $datos = json_decode(file_get_contents("php://input"), true);

        if($datos !== null){
            $nombreBar = $datos['nombreBar'];
            $nombreTapa = $datos['nombreTapa'];
            $descripcion = $datos['descripcion'];
            $direccion = $datos['direccion'];
            $telefono = $datos['telefono'];
            $latitud = $datos['latitud'];
            $longitud = $datos['longitud'];
            $hora_apertura = $datos['hora_apertura'];
            $hora_cierre = $datos['hora_cierre'];
            $id = $datos['id_tapa'];

            $ingrediente = [];
            foreach($datos as $key => $value){
                if(preg_match('/^~ingredientes\d+$/', $key)){
                    $ingrediente[] = $value;
                }
            }

            $ingredienteTexto = implode(',', $ingrediente);
            

            try{
                $sql = "SELECT bar FROM tapas WHERE id_tapa = '$id'";
                $result = $con->query($sql);
                if($result->num_rows > 0){
                    $row = $result->fetch_assoc();
                    $id_bar = $row['bar'];
                }
                
            }catch(mysqli_sql_exception $e){
                header("HTTP/1.1 400 Bad Request");
                exit;
            }
            
            try{
                $sql2 = "UPDATE bares SET nombre = '$nombreBar', direccion = '$direccion', telefono = '$telefono', latitud = '$latitud', longitud = '$longitud', hora_apertura = '$hora_apertura', hora_cierre = '$hora_cierre' WHERE id_bar = '$id_bar'";
                $result = $con->query($sql2);
                header("HTTP/1.1 200 Ok");
                header("Content-Type: application/json");
                
            }catch(mysqli_sql_exception $e){
                header("HTTP/1.1 400 Bad Request");
                exit;
            }

            try{
                
                $sql3 = "UPDATE tapas SET nombre = '$nombreTapa', descripcion = '$descripcion', ingredientes = '$ingrediente', bar = '$id_bar' WHERE id_tapa = '$id'";
                $result = $con->query($sql3);
                header("HTTP/1.1 200 Ok");
                header("ContenT-Type: application/json");
                exit;
                
            }catch(mysqli_sql_exception $e){
                header("HTTP/1.1 400 Bad Request");
                exit;
            }
        }
    }

?>