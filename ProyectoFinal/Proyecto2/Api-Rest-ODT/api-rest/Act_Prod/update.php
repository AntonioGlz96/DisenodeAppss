<?php
require_once('../../includes/Clientes.php');

$_SERVER["REQUEST_METHOD"] = "PUT";

if($_SERVER["REQUEST_METHOD"] == "PUT"
&& isset($_GET['numero']) && isset($_GET['nombre']) && isset($_GET['apePaterno']) && isset($_GET['apeMaterno']) && isset($_GET['dirCalle']) && isset($_GET['dirNumero']) && isset($_GET['dirColonia']) && isset($_GET['dirCP']) && isset($_GET['correo']) && isset($_GET['contrasena']) && isset($_GET['numTel']) && isset($_GET['nombreFiscal'])
){
    echo "Entre aqui";
    Clientes::update_clientes($_GET['numero'], $_GET['nombre'], $_GET['apePaterno'], $_GET['apeMaterno'], $_GET['dirCalle'], $_GET['dirNumero'], $_GET['dirColonia'], $_GET['dirCP'], $_GET['correo'], $_GET['contrasena'], $_GET['numTel'], $_GET['nombreFiscal']);
}