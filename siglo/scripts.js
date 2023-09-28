function cargarOpciones(valores, campo) {
    const select = document.getElementById(campo);
    select.innerHTML = '<option value="">Seleccionar</option>';
    valores[campo].forEach(function (valor) {
        const option = document.createElement('option');
        option.value = valor;
        option.text = valor;
        select.appendChild(option);
    });
}

// Esta función carga las opciones en los select al cargar la página
function cargarOpcionesSelect() {
    $.ajax({
        type: 'GET',
        url: 'get_unique_values.php',
        success: function (data) {
            console.log(data);
            const valores = JSON.parse(data);
            cargarOpciones(valores, 'artista');
            /*  cargarOpciones(valores, 'cancion');
             cargarOpciones(valores, 'genero'); */
        }
    });
}

// Llama a la función para cargar las opciones cuando se carga la página
$(document).ready(function () {
    cargarOpcionesSelect();
});

// Función para filtrar los resultados
function filterKaraoke() {
    const filtro = {
        artista: document.getElementById('artista').value,
        cancion: document.getElementById('cancion').value,
        genero: document.getElementById('genero').value,
    };

    $.ajax({
        type: 'POST',
        url: 'filter.php',
        data: filtro,
        success: function (response) {
            document.getElementById('resultados').innerHTML = response;
        }
    });
}
