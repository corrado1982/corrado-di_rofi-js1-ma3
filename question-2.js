
function displayError(message = "Some error") {
    return `<div class="error">${message}</div>`;
}

const key = "286603fa13fb4ae792cea26cec788773";

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;

const gamesList = document.querySelector(".games-list");

async function getData() {
    
    const response = await fetch(url);
    const data = await response.json();
    const result = data.results;
    

    
    gamesList.innerHTML = "";
    for (let i = 0; i < result.length; i++) {

        console.log(result[i]);

        if (i === 8) {
            break;
        }
    gamesList.innerHTML += `<div class="div-containers">${result[i].name}</div>`;
    }
    
    }
    // catch(error) {
    //     console.log(error);
    //     gamesList.innerHTML = displayError("There is problems calling API");
    

getData();