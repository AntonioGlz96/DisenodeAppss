<?php
require_once('../../includes/Actividades.php');

if($_SERVER["REQUEST_METHOD"] == "GET"){
    Actividades::get_all();
}