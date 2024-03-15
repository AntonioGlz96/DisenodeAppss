<?php
require_once('../../includes/Administradores.php');

if($_SERVER["REQUEST_METHOD"] == "GET"){
    Administradores::get_all();
}