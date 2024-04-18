// Globale Variabels
let currentPokemon;
let backgroundColors;
let loadedPokemon = 1025;
let loadedPokemons = [];
let currentPokemonEgg;
let currentPokemonEvolution;
let evolutionPokemons = [];
let favoritPokemons = [];
let loadedFavoritPokemon = 18;
let loadedPokemonNames = [];

// Load Favorit Pokemons
loadfavoritPokemonsAsText();

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
    //console.log('Response is', currentPokemon); // Console.log
}

async function loadPokemonSpecies() { // Load Pokemon Species
    let url = currentPokemon['species']['url'];
    let response = await fetch(url);
    currentPokemonEgg = await response.json();
    //console.log('This is Species', currentPokemonEgg); // Console Log
}

async function loadPokemonEvolution() { // Load Pokemon Evolutions
    let url = currentPokemonEgg['evolution_chain']['url'];
    let response = await fetch(url);
    currentPokemonEvolution = await response.json();
    //console.log('This is Evolution', currentPokemonEvolution); // Console Log
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
        showStartPokemonTypes(pokemonId);
        renderStartCardBackgroundColor(pokemonId);
        loadPokemonNames();
    }
    loadStartPokemonScreen();
    loadPokemonPrevAndNext();
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

//Load Start Pokemon Screen
function loadStartPokemonScreen() {
    document.getElementById('morePokemon').classList.remove('d-none');
    document.getElementById('moreFavoritPokemon').classList.add('d-none');
}

//Load Pokemon Prev & Next Button
function loadPokemonPrevAndNext() {
    document.getElementById('prevPokemon').classList.remove('d-none');
    document.getElementById('prevFavoritPokemon').classList.add('d-none');
    document.getElementById('nextPokemon').classList.remove('d-none');
    document.getElementById('nextFavoritPokemon').classList.add('d-none');
}

//Save & Load Favorit Pokemons
function savefavoritPokemonsAsText() {
    let favoritPokemonsAsText = JSON.stringify(favoritPokemons);
    localStorage.setItem('favoritPokemons', favoritPokemonsAsText);
}

function loadfavoritPokemonsAsText() {
    let favoritPokemonsAsText = localStorage.getItem('favoritPokemons');
    if (favoritPokemonsAsText) {
        favoritPokemons = JSON.parse(favoritPokemonsAsText);
    }
}

//Search Pokemon 
function loadPokemonNames() {
    let pokemonName = currentPokemon['name'];
    let pokemonId = currentPokemon['id'];
    let newObiject = {"name": pokemonName, "id": pokemonId}
    loadedPokemonNames.push(newObiject);
}

function filterPokemons() {
    let startSearch = document.getElementById('startSearch').value;
    startSearch = startSearch.toLowerCase();
    for (let i = 0; i < loadedPokemonNames.length; i++) {
        let pokemonName = loadedPokemonNames[i]['name'];
        let pokemonId = loadedPokemonNames[i]['id'];
        pokemonName = pokemonName.toLowerCase();
        if (startSearch.length > 2 && pokemonName.includes(startSearch)) {
            startContent.innerHTML = '';
            renderSearchPokemons(pokemonId);
        } if (startSearch.length < 3) {
            startContent.innerHTML = `<div class="nofoundScreen">No Pokémon Found...</div>`;
            hideNavButtons();
        }
    }
}

async function renderSearchPokemons(pokemonId) {
    await loadPokemons(pokemonId);
    showPokemonInfo(pokemonId);
    showStartPokemonTypes(pokemonId);
    renderStartCardBackgroundColor(pokemonId);
    hideNavButtons();
}

function clearSearchPokemon() {
    loadedPokemonNames = [];
    loadStartScreen();
}

function hideNavButtons() {
    document.getElementById('morePokemon').classList.add('d-none');
    document.getElementById('moreFavoritPokemon').classList.add('d-none');

    document.getElementById('prevPokemon').classList.add('d-none');
    document.getElementById('prevFavoritPokemon').classList.add('d-none');
    document.getElementById('nextPokemon').classList.add('d-none');
    document.getElementById('nextFavoritPokemon').classList.add('d-none');
}