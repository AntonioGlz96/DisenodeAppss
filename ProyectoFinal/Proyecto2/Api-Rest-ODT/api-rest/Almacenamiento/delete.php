<?php
require_once('../../includes/Almacenamiento.php');

$_SERVER["REQUEST_METHOD"] = "DELETE";

if($_SERVER["REQUEST_METHOD"] == "DELETE"
&& isset($_GET['numero'])
){
    Almacenamiento::delete($_GET['numero']);
}