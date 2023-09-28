<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filtrar Karaoke</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filtrar Karaoke</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Agrega aquí tu archivo de estilos personalizados si es necesario -->
</head>

<body>
    <div class="container mt-5">
        <h1>Filtrar Karaoke</h1>
        <form id="filterForm">
            <div class="form-group">
                <label for="artista">Artista:</label>
                <select class="form-control" id="artista" name="artista">
                    <option value="">Seleccionar</option>
                    
                </select>
            </div>
            <div class="form-group">
                <label for="cancion">Canción:</label>
                <select class="form-control" id="cancion" name="cancion">
                    <option value="">Seleccionar</option>
                   
                </select>
            </div>
            <div class="form-group">
                <label for="genero">Género:</label>
                <select class="form-control" id="genero" name="genero">
                    <option value="">Seleccionar</option>
                  
                </select>
            </div> 
            <!-- Agrega aquí los otros campos de filtro si los tienes -->
            <button type="button" class="btn btn-primary" onclick="filterKaraoke()">Filtrar</button>
        </form>
        <div id="resultados" class="mt-3"></div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="scripts.js"></script>
    <script>

    </script>
</body>

</html>