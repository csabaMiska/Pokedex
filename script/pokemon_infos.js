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

function showPokemonBaseExp() {
    return currentPokemon['base_experience'];
}

function showPokemonHeightInMeter() {
    return currentPokemon['height'] / 10;
}

function showPokemonHeightInInches(pokemonHeightInMeter) {
    return (pokemonHeightInMeter * 10) * 0.39;
}

function showPokemonWeightInKg() {
    return currentPokemon['weight'] / 10;
}

function showPokemonWeightInLbs(pokemonWeightInKg) {
    return pokemonWeightInKg * 2.2;
}

function showPokemonAbilities() {
    let pokemonAbilitiesContainer = document.getElementById('pokemonAbilities');
    pokemonAbilitiesContainer.innerHTML = '';
    let pokemonAbilities = currentPokemon['abilities'];
    for (let i = 0; i < pokemonAbilities.length; i++) {
        const currentpokemonAbility = pokemonAbilities[i];
        const pokemonAbility = capitalizeFirstLetter(currentpokemonAbility['ability']['name']);
        pokemonAbilitiesContainer.innerHTML += `${pokemonAbility}, `;
    }
}

function showPokemonBaseHappiness() {
    return currentPokemonEgg['base_happiness'];
}

function showPokemonCaptureRate() {
    return currentPokemonEgg['capture_rate'];
}

function showPokemonGrowthRate() {
    return capitalizeFirstLetter(currentPokemonEgg['growth_rate']['name']);
}

function showPokemonFlavorText() {
    return currentPokemonEgg['flavor_text_entries']['0']['flavor_text'];
}

function showPokemonEvolution() {
    let firstEvolution = currentPokemonEvolution['chain']['species']['name'];
    evolutionPokemons.push(firstEvolution);
    let evolutions2 = currentPokemonEvolution['chain']['evolves_to'];
    for (let i = 0; i < evolutions2.length; i++) {
        const evolution2 = evolutions2[i];
        const secondEvolution = evolution2['species']['name'];
        evolutionPokemons.push(secondEvolution);
        let evolutions3 = evolution2['evolves_to'];
        for (let e = 0; e < evolutions3.length; e++) {
            const evolution3 = evolutions3[e];
            const thirdEvolution = evolution3['species']['name'];
            evolutionPokemons.push(thirdEvolution);
        }
    }
}