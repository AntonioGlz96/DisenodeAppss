<?php
require_once('Database.php');

class Administradores{
    /*
    numero, nombre, apePaterno, apeMaterno, dirCalle, dirNumero, dirColonia, dirCP, correo, contrasena, numTel, nombreFiscal
    */
    public static function create($nombre, $apePaterno, $apeMaterno, $dirCalle, $dirNumero, $dirColonia, $dirCP, $correo, $contrasena, $numTel){
        $database = new Database();
        $con = $database->getConnection();

        $stmt = $con->prepare("insert into administradores(nombre, apePaterno, apeMaterno, dirCalle, dirNumero, dirColonia, dirCP, correo, contrasena, numTel)
        values(:nombre, :apePaterno, :apeMaterno, :dirCalle, :dirNumero, :dirColonia, :dirCP, :correo, :contrasena, :numTel)");
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
        if($stmt->execute()){
            header("HTTP/1.1 201 Cliente ha sido creado correctamente");
        }else{
            header("HTTP/1.1 404 Cliente no ha sido creado correctamente");
        }
    }

    public static function delete($matricula){
        $database = new Database();
        $con = $database->getConnection();
        $stmt = $con->prepare("delete from administradores where matricula = :matricula");
        $stmt->bindParam(":matricula", $matricula);
        if($stmt->execute()){
            header("HTTP/1.1 201 Cliente ha sido creado correctamente");
        }else{
            header("HTTP/1.1 404 Cliente no ha sido creado correctamente");
        }
    }

    public static function get_all(){
        $database = new Database();
        $con = $database->getConnection();
        $stmt = $con->prepare("select * from administradores");
        if($stmt->execute()){
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            header("HTTP/1.1 201 OK");
            echo json_encode($result);
        }else{
            header("HTTP/1.1 404 Clientes no ha sido mostrado correctamente");
        }
    }

    public static function update($matricula ,$nombre, $apePaterno, $apeMaterno, $dirCalle, $dirNumero, $dirColonia, $dirCP, $correo, $contrasena, $numTel){
        $database = new Database();
        $con = $database->getConnection();

        $stmt = $con->prepare("update administradores set nombre = :nombre, apePaterno = :apePaterno, apeMaterno = :apeMaterno, dirCalle = :dirCalle, dirNumero = :dirNumero, dirColonia = :dirColonia, dirCP = :dirCP, correo = :correo, contrasena = :contrasena, numTel = :numTel where matricula = :matricula");
        $stmt->bindParam(":matricula", $matricula);
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
        if($stmt->execute()){
            header("HTTP/1.1 201 Cliente ha sido actualizado correctamente");
        }else{
            header("HTTP/1.1 404 Cliente no ha sido actualizado correctamente");
        }
    }
}
