// get ref to the body
let $tbody = document.querySelector("tbody");
let $dateInput = document.querySelector("#date");
let $cityInput = document.querySelector("#city");
let $stateInput = document.querySelector("#state");
let $countryInput = document.querySelector("#country");
let $shapeInput = document.querySelector("#shape");
let $searchButton = document.querySelector("#search");


// clicky clicky
$searchButton.addEventListener("click", handleSearchClick);

// ufo to dataset
let ufoData = dataSet;

// renderr the table
function renderTable() {
    $tbody.innerHTML = "";
    for (let i = 0; i < ufoData.length; i++) {
        let info = ufoData[i];
        let fields = Object.keys(info);
        let $row = $tbody.insertRow(i);
        for (let j = 0; j < fields.length; j++) {
            let field = fields[j];
            let $cell = $row.insertCell(j);
            $cell.innerText = info[field];
        }
    }
}

function handleSearchClick() {
    // format user search function
    let filterDate = $dateInput.value.trim();
    let filterCity = $cityInput.value.trim().toLowerCase();
    let filterState = $stateInput.value.trim().toLowerCase();
    let filterCountry = $countryInput.value.trim().toLowerCase();
    let filterShape = $shapeInput.value.trim().toLowerCase();
    // set to filter
    ufoData = dataSet.filter(function(ufoSighting) {
        let searchDate = ufoSighting.datetime;
        let searchCity = ufoSighting.city.toLowerCase();
        let searchState = ufoSighting.state.toLowerCase();
        let searchCountry = ufoSighting.country.toLowerCase();
        let searchShape = ufoSighting.shape.toLowerCase();
        // if statements to match
        if (
            (searchDate === filterDate || filterDate === "") &&
            (searchCity === filterCity || filterCity === "") &&
            (searchState === filterState || filterState === "") &&
            (searchCountry === filterCountry || filterCountry === "") &&
            (searchShape === filterShape || filterShape === "")
        ) {
            return true;
        }
        return false;
    });
    renderTable();

    // clear some input fields
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";
}



// render final project
renderTable();