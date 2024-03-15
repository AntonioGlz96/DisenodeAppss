<?php
require_once('../../includes/Almacenamiento.php');

if($_SERVER["REQUEST_METHOD"] == "POST"
&& isset($_POST['nombre']) && isset($_POST['precioUnitario']) && isset($_POST['stock']) && isset($_POST['gama'])
){
    Almacenamiento::create($_POST['nombre'], $_POST['precioUnitario'], $_POST['stock'], $_POST['gama']);
}