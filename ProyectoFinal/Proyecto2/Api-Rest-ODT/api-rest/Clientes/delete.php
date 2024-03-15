<?php
require_once('../../includes/Clientes.php');

$_SERVER["REQUEST_METHOD"] = "DELETE";

if($_SERVER["REQUEST_METHOD"] == "DELETE"
&& isset($_GET['numero'])
){
    Clientes::delete($_GET['numero']);
}