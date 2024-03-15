<!-- http://localhost/API-REST-ODT/api-rest/getAll.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Iteracion</h1>
    <?php
    $json = file_get_contents('http://localhost/API-REST-ODT/api-rest/Clientes/getAll.php');
    $element = json_decode($json, true);
    foreach ($element as $key => $value) {
        if(is_array($value)){
            foreach($value as $key2 => $value2){
                if(is_array($value2)){
                    foreach($value2 as $key3 => $value3){
                        echo " - - - - $key3 = $value3 <br>";
                    }
                }else{
                    echo " - - $key2 = $value2 <br>";
                }
            }
        }else{
            echo "$key = $value <br>";
        }   
        echo "<hr>";  
    }
    ?>
</body>
</html>