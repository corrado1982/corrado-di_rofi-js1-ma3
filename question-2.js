
//Question 2

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
    const result = data.results;
    
gamesList.innerHTML = "";

    for (let i = 0; i < result.length; i++) {

        // console.log(result[i]);

        if (i === 8) {
            break;
        }
        const name = result[i].name;
        const rating = result[i].rating;
        const tagsLenght = result[i].tags.length;

gamesList.innerHTML += `<div class="div-containers">
                            <h2>${name}</h2> 
                            <p>rate: ${rating}</p>
                            <p>tags: ${tagsLenght}</p>
                        </div>`;
    }
} catch(error){
    console.log(error);
    gamesList.innerHTML = displayError("Error calling API");
}
}
    
getData();
