<?php

    require_once('Conexion.php');

    $con = new Conexion();

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $datos = json_decode(file_get_contents("php://input"), true);

        if($datos != null){
            $nombreBar = $datos['nombreBar'];
            $nombreTapa = $datos['nombreTapa'];
            $descripcion = $datos['descripcion'];
            $direccion = $datos['direccion'];
            $telefono = $datos['telefono'];
            $latitud = $datos['latitud'];
            $longitud = $datos['longitud'];
            $hora_apertura = $datos['hora_apertura'];
            $hora_cierre = $datos['hora_cierre'];

            $ingrediente = [];
            foreach($datos as $key => $value){
                if(preg_match('/^~ingredientes\d+$/', $key)){
                    $ingrediente[] = $value;
                }
            }

            $ingredienteTexto = implode(',', $ingrediente);
            print_r($ingredienteTexto);
            try{
                $sql = "SELECT id_bar FROM bares WHERE nombre = '$nombreBar'";
                $resultado = $con->query($sql);
        
                if($resultado->num_rows > 0){
                    $row = $resultado->fetch_assoc();
                    $idBar = $row['id_bar'];
                }else{
                    $sqlInsertar = "INSERT INTO bares (nombre, direccion, telefono, latitud, longitud, hora_apertura, hora_cierre) VALUES ('$nombreBar', '$direccion', '$telefono', '$latitud', '$longitud', '$hora_apertura', '$hora_cierre')";
                    $result = $con->query($sqlInsertar);
                    $idBar = $con->insert_id;
                    
                    header("HTTP/1.1 201 Created");
                    header("Content-type:Application/json");
                    echo json_encode(["id" => $con->insert_id]);
                    
                }
                
                
            }catch(mysqli_sql_exception $e){
                header("HTTP/1.1 500 interval Server Error");
                exit;
            }
        }
        try{
            $sqlTapa = "INSERT INTO tapas (nombre, descripcion, ingredientes, bar) VALUES ('$nombreTapa', '$descripcion', '$ingredienteTexto', '$idBar')";
            $result2 = $con->query($sqlTapa);
            $id_tapa = $con->insert_id;
            header("HTTP/1.1 201 Created");
            header("Content-type:Application/json");
            echo json_encode(["id" => $con->insert_id]);
        }catch(mysqli_sql_exception $e){
            header("HTTP/1.1 500 Interval server Error");
            exit;
        }
        
    }

?>