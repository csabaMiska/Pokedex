// Load Pokemon Card
async function loadPokemonCard(pokemonId) {
    await loadPokemons(pokemonId);
    await loadPokemonSpecies();
    showPokemonCard();
    renderPokemonsCard(pokemonId);
    loadPokemonInfos();
}

function renderPokemonsCard(pokemonId) {
    generateFavoritPokemonId();
    showPokemonCardInfos();
    showPokemonTypes(pokemonId);
    renderBackgroundColor(pokemonId);
}

function generateFavoritPokemonId() {
    let favoritId = currentPokemon['id'];
    pokemonCardNav.innerHTML = generatePokemonCardNav(favoritId);
}

function showPokemonCardInfos() {
    let pokemonCardId = showPokemonId();
    let pokemonCardName = showPokemonName();
    let pokemonCardImage = showPokemonImage();
    document.getElementById('pokemonCardName').innerHTML = pokemonCardName;
    document.getElementById('pokemonCardId').innerHTML = pokemonCardId;
    document.getElementById('pokemonCardImage').src = pokemonCardImage;
}

function showPokemonCard() {
    pokemonCardContainer.classList.remove('d-none');
    pokemonCardContainer.classList.add('d-flex');
    pokemonCard.classList.add('a-scale-up');
}

function hidePokemonCard() {
    pokemonCard.classList.remove('a-scale-up');
    pokemonCardContainer.classList.remove('d-flex');
    pokemonCardContainer.classList.add('d-none');
}

//Load Pokemon Card Infos
function loadPokemonInfos() {
    pokemonCardInfoContainer.innerHTML = '';
    pokemonCardInfoContainer.innerHTML += generatePokemonCardInfoTable();
    renderPokemonCardInfos();
}

function renderPokemonCardInfos() {
    let pokemonBaseExp = showPokemonBaseExp();
    let pokemonHeightInMeter = showPokemonHeightInMeter();
    let pokemonHeightInInches = showPokemonHeightInInches(pokemonHeightInMeter);
    let pokemonWeightInKg = showPokemonWeightInKg();
    let pokemonWeightInLbs = showPokemonWeightInLbs(pokemonWeightInKg);
    let pokemonBaseHappiness = showPokemonBaseHappiness();
    let pokemonCaptureRate = showPokemonCaptureRate();
    let pokemonGrowthRate = showPokemonGrowthRate();
    document.getElementById('pokemonBaseExp').innerHTML = pokemonBaseExp;
    document.getElementById('pokemonHeight').innerHTML = `${pokemonHeightInInches.toFixed(2)}" (${pokemonHeightInMeter.toFixed(2)} m)`;
    document.getElementById('pokemonWeight').innerHTML = `${pokemonWeightInLbs.toFixed(2)} lbs (${pokemonWeightInKg} kg)`;
    document.getElementById('pokemonBaseHappiness').innerHTML = pokemonBaseHappiness;
    document.getElementById('pokemonCaptureRate').innerHTML = pokemonCaptureRate;
    document.getElementById('pokemonGrowthRate').innerHTML = pokemonGrowthRate;
    showPokemonAbilities();
}