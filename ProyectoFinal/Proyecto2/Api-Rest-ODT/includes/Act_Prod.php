<?php
require_once('Database.php');

class Act_Prod{
    public static function create($actividad, $producto){
        $database = new Database();
        $con = $database->getConnection();

        $stmt = $con->prepare("insert into act_prod values(:actividad, :producto");
        $stmt->bindParam(":actividad", $actividad);
        $stmt->bindParam(":producto", $producto);
        if($stmt->execute()){
            header("HTTP/1.1 201 Cliente ha sido creado correctamente");
        }else{
            header("HTTP/1.1 404 Cliente no ha sido creado correctamente");
        }
    }
    public static function get_all(){
        $database = new Database();
        $con = $database->getConnection();
        $stmt = $con->prepare("select * from act_prod");
        if($stmt->execute()){
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            header("HTTP/1.1 201 OK");
            echo json_encode($result);
        }else{
            header("HTTP/1.1 404 Clientes no ha sido mostrado correctamente");
        }
    }
}
