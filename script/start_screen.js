// Globale Variabels
let currentPokemon;
let backgroundColors;
let loadedPokemon = 18;
let loadedPokemons = [];

// Globale Variabels for Render Places
let startContent = document.getElementById('startContent');

// Loading API und JSON
async function loadPokemons(i) { // Loading Current Pokemon
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    // console.log('Response is', currentPokemon); // Console.log
}

// Loading Start Screen
async function init() {
    await loadBackgroundColors();
    loadStartScreen()
}

function loadStartScreen() { // Limits the loaded Pokemos of 18 and pushed on Array loadedPokemons
    for (let i = 0; i < loadedPokemon; i++) {
        if (!loadedPokemons.includes(i)) {
            loadedPokemons.push(i);
        }
    }
    renderStartScreen();
}

async function renderStartScreen() { // Render the Start Screen Pokemon Cards
    startContent.innerHTML = '';
    for (let i = 0; i < loadedPokemons.length; i++) {
        let pokemonId = loadedPokemons[i] + 1; // n - number of pokemon
        await loadPokemons(pokemonId);
              showPokemonInfo(pokemonId);
              showPokemonTypes(pokemonId);
              renderBackgroundColor(pokemonId);
    }
}

function showPokemonInfo(pokemonId) {
    let startPokemonId = showPokemonId();
    let startPokemonName = showPokemonName();
    let startPokemonImage = showPokemonImage();
    startContent.innerHTML += generateStartCardsHTML(startPokemonId, startPokemonName, startPokemonImage, pokemonId);
}

// Load More Pokemon
function loadMorePokemons() {
    loadedPokemon += 18;
    loadStartScreen();
}