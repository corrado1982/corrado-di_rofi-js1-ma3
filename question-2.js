
function displayError(message = "Some error") {
    return `<div class="error">${message}</div>`;
}

const key = "286603fa13fb4ae792cea26cec788773";

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;

const gamesList = document.querySelector(".games-list");

async function getData() {
    try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const item = data.all;
    
    console.log(item);
    gamesList.innerHTML = "we";
    for (let i = 0; i < data.length; i++) {
        if (i === 8) {
            break;
        }
    gamesList.innerHTML += `<div class="div-containers">"ciao"</div>`;
    }
    
    }
    catch(error) {
        console.log(error);
        gamesList.innerHTML = displayError("There is problems calling API");
    }
}
getData();