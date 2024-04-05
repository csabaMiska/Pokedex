// Globale Variabels
let currentPokemon;
let backgroundColors;
let loadedPokemon = 18;
let loadedPokemons = [];
let currentPokemonEgg;

// Globale Variabels for Render Places
let startContent = document.getElementById('startContent');
let pokemonCardContainer = document.getElementById('pokemonCardContainer');
let pokemonCard = document.getElementById('pokemonCard');
let pokemonCardNav = document.getElementById('pokemonCardNav');
let pokemonCardInfoContainer = document.getElementById('pokemonCardInfoContainer');

// Loading API und JSON
async function loadPokemons(i) { // Loading Current Pokemon
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    // console.log('Response is', currentPokemon); // Console.log
}

async function loadPokemonSpecies() {
    let url = currentPokemon['species']['url'];
    let response = await fetch(url);
    currentPokemonEgg = await response.json();
    //console.log('This is EGG', currentPokemonEgg); // Console Log
}

async function loadBackgroundColors() { // JSON für die variebile Background Colors
    let src = 'json/backgroundColors.json';
    let response = await fetch(src);
    backgroundColors = await response.json();
    // console.log('Pokemon Types', backgroundColors); // Console.log
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

// Prev & Next Pokemon
function prevPokemon() {
    let currentCard = currentPokemon['id'];
    currentCard--;
    loadPokemonCard(currentCard);
}

function nextPokemon() {
    let currentCard = currentPokemon['id'];
    currentCard++;
    loadPokemonCard(currentCard);
}