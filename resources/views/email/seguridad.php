<?php 
use App\Models\usuario;

$user = usuario::latest('updated_at')->first();
$correo=$user["correo"];
$url = url("https://redes/api/Validar/$correo");
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEguridad</title>
</head>
<body>
    <h1>Enlacce de verificacion</h1>
   
    <a href=<?php echo $url?>>Validar</a>


</body>
</html>