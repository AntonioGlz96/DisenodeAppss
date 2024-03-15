<?php
require_once('../../includes/Administradores.php');

if($_SERVER["REQUEST_METHOD"] == "POST"
&& isset($_POST['nombre']) && isset($_POST['apePaterno']) && isset($_POST['apeMaterno']) && isset($_POST['dirCalle']) && isset($_POST['dirNumero']) && isset($_POST['dirColonia']) && isset($_POST['dirCP']) && isset($_POST['correo']) && isset($_POST['contrasena']) && isset($_POST['numTel'])
){
    Administradores::create($_POST['nombre'], $_POST['apePaterno'], $_POST['apeMaterno'], $_POST['dirCalle'], $_POST['dirNumero'], $_POST['dirColonia'], $_POST['dirCP'], $_POST['correo'], $_POST['contrasena'], $_POST['numTel']);
}