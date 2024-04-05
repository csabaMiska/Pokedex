// Show Pokemon Infos
function showPokemonId() {
    return formatId(currentPokemon['id']);
}

function showPokemonName() {
    return capitalizeFirstLetter(currentPokemon['name']);
}

function showPokemonImage() {
    return currentPokemon['sprites']['other']['dream_world']['front_default'];
}

function showPokemonTypes(pokemonId) {
    let startCardTypesContainer = document.getElementById(`startCardTypesContainer${pokemonId}`);
    let pokemonCardTypesContainer = document.getElementById(`pokemonCardTypesContainer`);
    startCardTypesContainer.innerHTML = '';
    pokemonCardTypesContainer.innerHTML = '';
    let pokemonTypes = currentPokemon['types'];
    for (let i = 0; i < pokemonTypes.length; i++) {
        const currentpokemonType = pokemonTypes[i];
        const pokemonType = capitalizeFirstLetter(currentpokemonType['type']['name']);
        startCardTypesContainer.innerHTML += `<div class="pokemonType">${pokemonType}</div>`;
        pokemonCardTypesContainer.innerHTML += `<div class="pokemonType">${pokemonType}</div>`;
    }
}