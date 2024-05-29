<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscar Terremotos</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/estilos.css">
</head>

<body>
    <div class="container mt-5">
        <h1 class="text-center">Buscar Terremotos</h1>
        <form id="formBuscar" class="form-inline justify-content-center">
            <div class="form-group mb-2">
                <label for="startDate" class="sr-only">Fecha de inicio:</label>
                <input type="date" id="startDate" class="form-control" required>
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <label for="endDate" class="sr-only">Fecha de fin:</label>
                <input type="date" id="endDate" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Buscar terremotos</button>
        </form>
       
        <div class="row">
            <div class="col-md-6">
                <ul id="resultados" class="list-group mt-4"></ul>
            </div>
            <div class="col-md-6">
                <div id="mapa" class="mt-4" style="width: 100%; height: 500px;"></div>
            </div>
        </div>
    </div>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
    <script src="js/terremotos.js"></script>
</body>

</html>