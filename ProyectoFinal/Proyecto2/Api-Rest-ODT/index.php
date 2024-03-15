<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PRUEBA API</title>
</head>
<body>
    <h1>POST TO CLIENTES</h1>
    <form action="api-rest/Clientes/create.php" method="POST">
        <div class="input-box">
            <input class="box" type="text" name="nombre" placeholder="Nombre" required pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+" title="Solo se permiten letras y espacios">
        </div>
        <div class="input-box">
            <input class="box" type="text" name="apePaterno" placeholder="Apellido Paterno" required pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+" title="Solo se permiten letras y espacios">
        </div>

        <div class="input-box">
            <input class="box" type="text" name="apeMaterno" placeholder="Apellido Materno" required pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+"title="Solo se permiten letras y espacios">
        </div>

        <div class="input-box">
            <input class="box" type="email" name="correo" placeholder="Correo" required>
        </div>

        <div class="input-box">
            <!--<input class="box" type="password" name="txtContra" placeholder="Contraseña" required minlength="8" title="La contraseña debe tener al menos 8 caracteres">-->
            <input class="box" type="password" name="contrasena" placeholder="Contraseña" required>
        </div>

        <div class="input-box">
            <input class="box" type="text" name="dirCalle" placeholder="Calle" required>
        </div>

        <div class="input-box">
            <input class="box" type="text" name="dirCP" placeholder="Codigo Postal" required>
        </div>

        <div class="input-box">
            <input class="box" type="text" name="dirColonia" placeholder="Colonia" required>
        </div>

        <div class="input-box">
            <input class="box" type="text" name="dirNumero" placeholder="Numero exterior">
        </div>

        <div class="input-box">
            <input class="box" type="text" name="nombreFiscal" placeholder="Nombre Fiscal" required>
        </div>
        <div class="input-box">
            <input class="box" type="tel" name="numTel" placeholder="Numero de Telefono" required>
        </div>
        <button type="submit" class="button">PROBAR</button>
    </form>
    <h1>DELETE FROM CLIENTES</h1>
    <form action="api-rest/Clientes/delete.php" method="DELETE">
        <label for="numero">Numero: </label>
        <input type="text" name="numero">
        <button type="submit" class="button">PROBAR</button>
    </form>
    <h1>GET ALL FROM CLIENTES</h1>
    <form action="api-rest/Clientes/getAll.php" method="GET">
        <button type="submit" class="button">PROBAR</button>
    </form>
    <h1>UPDATE TO CLIENTES</h1>
    <form action="api-rest/Clientes/update.php" method="PUT">
        <div class="input-box">
            <input class="box" type="text" name="numero" placeholder="Numero" required>
        </div>
        <div class="input-box">
            <input class="box" type="text" name="nombre" placeholder="Nombre" required pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+" title="Solo se permiten letras y espacios">
        </div>
        <div class="input-box">
            <input class="box" type="text" name="apePaterno" placeholder="Apellido Paterno" required pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+" title="Solo se permiten letras y espacios">
        </div>

        <div class="input-box">
            <input class="box" type="text" name="apeMaterno" placeholder="Apellido Materno" required pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+"title="Solo se permiten letras y espacios">
        </div>

        <div class="input-box">
            <input class="box" type="email" name="correo" placeholder="Correo" required>
        </div>

        <div class="input-box">
            <!--<input class="box" type="password" name="txtContra" placeholder="Contraseña" required minlength="8" title="La contraseña debe tener al menos 8 caracteres">-->
            <input class="box" type="password" name="contrasena" placeholder="Contraseña" required>
        </div>

        <div class="input-box">
            <input class="box" type="text" name="dirCalle" placeholder="Calle" required>
        </div>

        <div class="input-box">
            <input class="box" type="text" name="dirCP" placeholder="Codigo Postal" required>
        </div>

        <div class="input-box">
            <input class="box" type="text" name="dirColonia" placeholder="Colonia" required>
        </div>

        <div class="input-box">
            <input class="box" type="text" name="dirNumero" placeholder="Numero exterior">
        </div>

        <div class="input-box">
            <input class="box" type="text" name="nombreFiscal" placeholder="Nombre Fiscal" required>
        </div>

        <div class="input-box">
            <input class="box" type="tel" name="numTel" placeholder="Numero de Telefono" required>
        </div>
        <button type="submit" class="button">PROBAR</button>
    </form>
</body>
</html>