
function createPokemon(data) {
    let imagen = document.createElement('img')
    imagen.src = data.img

    return imagen
}

function tourPokemons(listPokemon) { //RECORRER API
    for(let i = 0; i < listPokemon.length; i++){
        let pokemonItem = fetch(listPokemon.length[i])
        document.getElementById('container-pokemon').appendChild(pokemonItem)
    }
}

function fetchPokemon(id) {
    
}

document.addEventListener("DOMContentLoaded", function () {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(function (response) {
        return response.json()
    })
    .then(function (listPokemon) {
        console.log(listPokemon)
        tourPokemons(listPokemon)
    })
    .catch(function (response) {
        
    })
})