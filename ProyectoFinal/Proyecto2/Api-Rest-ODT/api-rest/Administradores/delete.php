<?php
require_once('../../includes/Administradores.php');

$_SERVER["REQUEST_METHOD"] = "DELETE";

if($_SERVER["REQUEST_METHOD"] == "DELETE"
&& isset($_GET['matricula'])
){
    Administradores::delete($_GET['matricula']);
}