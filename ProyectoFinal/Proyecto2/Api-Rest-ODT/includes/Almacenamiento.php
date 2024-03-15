<?php
require_once('Database.php');

class Almacenamiento{
    /*
    numero, nombre, precioUnitario, stock, imagen, gama
    */
    public static function create($nombre, $precioUnitario, $stock, $gama){
        $database = new Database();
        $con = $database->getConnection();

        $stmt = $con->prepare("insert into almacenamiento(nombre, precioUnitario, stock, gama)
        values(:nombre, :precioUnitario, :stock, :gama)");
        $stmt->bindParam(":nombre", $nombre);
        $stmt->bindParam(":precioUnitario", $precioUnitario);
        $stmt->bindParam(":stock", $stock);
        $stmt->bindParam(":gama", $gama);
        if($stmt->execute()){
            header("HTTP/1.1 201 Cliente ha sido creado correctamente");
        }else{
            header("HTTP/1.1 404 Cliente no ha sido creado correctamente");
        }
    }

    public static function delete($numero){
        $database = new Database();
        $con = $database->getConnection();
        $stmt = $con->prepare("delete from almacenamiento where numero = :numero");
        $stmt->bindParam(":numero", $numero);
        if($stmt->execute()){
            header("HTTP/1.1 201 Cliente ha sido creado correctamente");
        }else{
            header("HTTP/1.1 404 Cliente no ha sido creado correctamente");
        }
    }

    public static function get_all(){
        $database = new Database();
        $con = $database->getConnection();
        $stmt = $con->prepare("select * from almacenamiento");
        if($stmt->execute()){
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            header("HTTP/1.1 201 OK");
            echo json_encode($result);
        }else{
            header("HTTP/1.1 404 Clientes no ha sido mostrado correctamente");
        }
    }

    public static function update($numero, $nombre, $precioUnitario, $stock, $gama){
        $database = new Database();
        $con = $database->getConnection();

        $stmt = $con->prepare("update almacenamiento set nombre = :nombre, precioUnitario = :precioUnitario, stock = :stock, gama = :gama where numero = :numero");
        $stmt->bindParam(":numero", $numero);
        $stmt->bindParam(":nombre", $nombre);
        $stmt->bindParam(":precioUnitario", $precioUnitario);
        $stmt->bindParam(":stock", $stock);
        $stmt->bindParam(":gama", $gama);
        if($stmt->execute()){
            header("HTTP/1.1 201 Cliente ha sido creado correctamente");
        }else{
            header("HTTP/1.1 404 Cliente no ha sido creado correctamente");
        }
    }
}
