<?php
require_once('../../includes/Almacenamiento.php');

$_SERVER["REQUEST_METHOD"] = "PUT";

if($_SERVER["REQUEST_METHOD"] == "PUT"
&& isset($_GET['numero']) && isset($_GET['nombre']) && isset($_GET['precioUnitario']) && isset($_GET['stock']) && isset($_GET['gama'])
){
    Almacenamiento::update($_GET['numero'], $_GET['nombre'], $_GET['precioUnitario'], $_GET['stock'], $_GET['gama']);
}