<?php
require_once('Database.php');

class Clientes{
    /*
    numero, nombre, apePaterno, apeMaterno, dirCalle, dirNumero, dirColonia, dirCP, correo, contrasena, numTel, nombreFiscal
    */
    public static function create($nombre, $apePaterno, $apeMaterno, $dirCalle, $dirNumero, $dirColonia, $dirCP, $correo, $contrasena, $numTel, $nombreFiscal){
        $database = new Database();
        $con = $database->getConnection();

        $stmt = $con->prepare("insert into clientes(nombre, apePaterno, apeMaterno, dirCalle, dirNumero, dirColonia, dirCP, correo, contrasena, numTel, nombreFiscal)
        values(:nombre, :apePaterno, :apeMaterno, :dirCalle, :dirNumero, :dirColonia, :dirCP, :correo, :contrasena, :numTel, :nombreFiscal)");
        $stmt->bindParam(":nombre", $nombre);
        $stmt->bindParam(":apePaterno", $apePaterno);
        $stmt->bindParam(":apeMaterno", $apeMaterno);
        $stmt->bindParam(":dirCalle", $dirCalle);
        $stmt->bindParam(":dirNumero", $dirNumero);
        $stmt->bindParam(":dirColonia", $dirColonia);
        $stmt->bindParam(":dirCP", $dirCP);
        $stmt->bindParam(":correo", $correo);
        $stmt->bindParam(":contrasena", $contrasena);
        $stmt->bindParam(":numTel", $numTel);
        $stmt->bindParam(":nombreFiscal", $nombreFiscal);
        if($stmt->execute()){
            header("HTTP/1.1 201 Cliente ha sido creado correctamente");
        }else{
            header("HTTP/1.1 404 Cliente no ha sido creado correctamente");
        }
    }

    public static function delete($numero){
        $database = new Database();
        $con = $database->getConnection();

        $stmt = $con->prepare("delete from clientes where numero = :numero");
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
        $stmt = $con->prepare("select * from clientes");
        if($stmt->execute()){
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            header("HTTP/1.1 201 OK");
            echo json_encode($result);
        }else{
            header("HTTP/1.1 404 Clientes no ha sido mostrado correctamente");
        }
    }

    public static function update($numero ,$nombre, $apePaterno, $apeMaterno, $dirCalle, $dirNumero, $dirColonia, $dirCP, $correo, $contrasena, $numTel, $nombreFiscal){
        $database = new Database();
        $con = $database->getConnection();

        $stmt = $con->prepare("update clientes set nombre = :nombre, apePaterno = :apePaterno, apeMaterno = :apeMaterno, dirCalle = :dirCalle, dirNumero = :dirNumero, dirColonia = :dirColonia, dirCP = :dirCP, correo = :correo, contrasena = :contrasena, numTel = :numTel, nombreFiscal = :nombreFiscal where numero = :numero");
        $stmt->bindParam(":numero", $numero);
        $stmt->bindParam(":nombre", $nombre);
        $stmt->bindParam(":apePaterno", $apePaterno);
        $stmt->bindParam(":apeMaterno", $apeMaterno);
        $stmt->bindParam(":dirCalle", $dirCalle);
        $stmt->bindParam(":dirNumero", $dirNumero);
        $stmt->bindParam(":dirColonia", $dirColonia);
        $stmt->bindParam(":dirCP", $dirCP);
        $stmt->bindParam(":correo", $correo);
        $stmt->bindParam(":contrasena", $contrasena);
        $stmt->bindParam(":numTel", $numTel);
        $stmt->bindParam(":nombreFiscal", $nombreFiscal);
        if($stmt->execute()){
            header("HTTP/1.1 201 Cliente ha sido actualizado correctamente");
        }else{
            header("HTTP/1.1 404 Cliente no ha sido actualizado correctamente");
        }
    }
}
