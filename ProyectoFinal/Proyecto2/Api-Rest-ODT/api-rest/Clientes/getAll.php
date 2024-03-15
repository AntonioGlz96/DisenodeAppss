<?php
require_once('../../includes/Clientes.php');

if($_SERVER["REQUEST_METHOD"] == "GET"){
    Clientes::get_all();
}