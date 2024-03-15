<?php
require_once('Database.php');

class Actividades{
    public static function get_all(){
        $database = new Database();
        $con = $database->getConnection();
        $stmt = $con->prepare("select * from actividades");
        if($stmt->execute()){
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            header("HTTP/1.1 201 OK");
            echo json_encode($result);
        }else{
            header("HTTP/1.1 404 Clientes no ha sido mostrado correctamente");
        }
    }
}