<?php
require_once('../../includes/Act_Prod.php');

if($_SERVER["REQUEST_METHOD"] == "POST"
&& isset($_POST['actividad']) && isset($_POST['producto'])
){
    Act_Prod::create($_POST['actividad'], $_POST['producto']);
}
