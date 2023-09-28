document.addEventListener('DOMContentLoaded', function() {

    getAllTable();

    filterResponsebyTone();

    document.getElementById('filter').addEventListener('click', function() {
        window.location.href = "#popup";
    });

    document.getElementById('all').addEventListener('click', function() {
        getAllTable();
    });
    
});

  
async function getAll() {
    return new Promise((resolve, reject) => {
        fetch('backend/php/index.php?action=getAll')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

async function getAllTable() {

    const jsondata = await getAll();

    createTable(jsondata);
    
}

async function filterResponsebyTone() {

    const data = await getAll();

    const uniqueTones = [...new Set(data.map(item => item.tono))];
    const filteredTones = uniqueTones.filter(tone => !tone.includes(" "));

    const toneSelect = document.getElementById("tone");

    while (toneSelect.firstChild) {
        toneSelect.removeChild(toneSelect.firstChild);
    }
    
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Seleccione una opción";
    toneSelect.appendChild(defaultOption);
    
    filteredTones.forEach(tone => {
        const option = document.createElement("option");
        option.value = tone;
        option.textContent = tone;
        toneSelect.appendChild(option);
    });
    
    toneSelect.addEventListener('change', function() {
        const selectedTone = toneSelect.value;
        const filteredData = data.filter(item => item.tono.includes(selectedTone));
        filterResponsebyLanguage(filteredData);
    });
}

function filterResponsebyLanguage(data) {
    const uniqueLanguages = [...new Set(data.map(item => item.idioma))];

    const languageSelect = document.getElementById("language");

    while (languageSelect.firstChild) {
        languageSelect.removeChild(languageSelect.firstChild);
    }
    
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Seleccione una opción";
    languageSelect.appendChild(defaultOption);
    
    uniqueLanguages.forEach(language => {
        const option = document.createElement("option");
        option.value = language;
        option.textContent = language;
        languageSelect.appendChild(option);
    });    

    languageSelect.addEventListener('change', function() {
        const lagSelected = languageSelect.value;
        const filteredDataByLanguage = data.filter(item => item.idioma.includes(lagSelected));
        filterResponsebyGender(filteredDataByLanguage);
    });
}

function filterResponsebyGender(data) {
    const uniqueGenders = [...new Set(data.map(item => item.genero))];
    const filteredGenders = uniqueGenders.filter(gender => !gender.includes(" "));

    const genderSelect = document.getElementById("gender");

    while (genderSelect.firstChild) {
        genderSelect.removeChild(genderSelect.firstChild);
    }
    
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Seleccione una opción";
    genderSelect.appendChild(defaultOption);
    
    filteredGenders.forEach(gender => {
        const option = document.createElement("option");
        option.value = gender;
        option.textContent = gender;
        genderSelect.appendChild(option);
    });
    

    genderSelect.addEventListener('change', function() {
        const selectedGender = genderSelect.value;
        const filteredDataByGender = data.filter(item => item.genero.includes(selectedGender));
        filterResponsebyArtist(filteredDataByGender);
    });
}

function filterResponsebyArtist(data) {
    const uniqueArtists = [...new Set(data.map(item => item.artista))];

    const artistSelect = document.getElementById("artist");

    while (artistSelect.firstChild) {
        artistSelect.removeChild(artistSelect.firstChild);
    }
    
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Seleccione una opción";
    artistSelect.appendChild(defaultOption);
    
    uniqueArtists.forEach(artist => {
        const option = document.createElement("option");
        option.value = artist;
        option.textContent = artist;
        artistSelect.appendChild(option);
    });
    

    artistSelect.addEventListener('change', function() {
        const selectedArtist = artistSelect.value;
        const filteredDataByArtist = data.filter(item => item.artista.includes(selectedArtist));
        console.log(filteredDataByArtist);
    });
}

document.getElementById('submit').addEventListener('click', function() {
    handleFilter();
});

async function handleFilter() {
    const selectedTone = document.getElementById("tone").value;
    const selectedLanguage = document.getElementById("language").value;
    const selectedGender = document.getElementById("gender").value;
    const selectedArtist = document.getElementById("artist").value;

    await finalFilter(selectedTone, selectedLanguage, selectedGender, selectedArtist);

    // Obtén el elemento con el id "all"
    const allElement = document.getElementById("all");

    // Crea un elemento de botón
    const button = document.createElement("button");
    button.type = "button";
    button.id = "filter";
    button.className = "btn btn-secondary";
    button.textContent = "Mostrar Todo";

    // Agrega el botón al elemento con el id "all"
    allElement.appendChild(button);


    window.location.href = "#";

}

let filterParams = {};

async function finalFilter(tone, language, gender, artist) {
    try {
        if (tone) filterParams.tone = tone;
        if (language) filterParams.language = language;
        if (gender) filterParams.gender = gender;
        if (artist) filterParams.artist = artist;

        if (Object.keys(filterParams).length === 4) {
            const data = await getAll();

            const filteredData = data.filter(item =>
                item.tono === filterParams.tone &&
                item.idioma === filterParams.language &&
                item.genero === filterParams.gender &&
                item.artista === filterParams.artist
            );

            createTable(filteredData);


        }
    } catch (error) {
        console.error(error);
    }
}


function createTable(jsondata) {

    const data = Object.values(jsondata);

    const table = document.createElement("table");
    table.classList.add("table");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headers = ["ID", "ARTISTA", "CANCION", "GENERO", "TONO", "IDIOMA"];

    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    data.forEach(item => {
        const row = document.createElement("tr");

        for (const key in item) {
            const cell = document.createElement("td");
            cell.textContent = item[key];
            row.appendChild(cell);
        }

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    const tableContainer = document.querySelector(".table");

    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }

    tableContainer.appendChild(table);
}








