<?php
require_once('../../includes/Almacenamiento.php');

if($_SERVER["REQUEST_METHOD"] == "GET"){
    Almacenamiento::get_all();
}