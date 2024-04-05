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

// Load Pokemon Base Stats
function loadPokemonBaseStats() {
    pokemonCardInfoContainer.innerHTML = '';
    renderPokemonBaseStats();
}

function renderPokemonBaseStats() {
    showPokemonBaseStats();
    showFlavorText()
}

function showPokemonBaseStats() {
    let pokemonBaseStats = currentPokemon['stats'];
    let sum = 0;
    for (let i = 0; i < pokemonBaseStats.length; i++) {
        const pokemonBaseStat = pokemonBaseStats[i];
        const baseStatsName = pokemonBaseStat['stat']['name'];
        const baseStatsValue = pokemonBaseStat['base_stat'];
        sum += pokemonBaseStat['base_stat'];
        pokemonCardInfoContainer.innerHTML += generatePokemonBaseStats(baseStatsName, baseStatsValue, i);
        renderProgressBar(baseStatsValue, i);
    }
    pokemonCardInfoContainer.innerHTML += generateTotalProgressBar(sum);
    renderTotalProgressBar(sum);
}

function renderProgressBar(baseStatsValue, i) {
    let value = baseStatsValue;
    let minValue = 0;
    let maxValue = 200;
    let redColor = '#ff0000';
    let yellowColor = '#ffff00';
    let greenColor = '#00ff00';
    let progressBar = document.getElementById(`progressBar${i}`);

    if (value < 80) {
        progressBar.style.backgroundColor = redColor;
    } else if (value >= 80 && value < 140) {
        progressBar.style.backgroundColor = yellowColor;
    } else {
        progressBar.style.backgroundColor = greenColor;
    }

    let width = (value - minValue) / (maxValue - minValue) * 100;
    progressBar.style.width = width + '%';
    progressBar.innerHTML = value + '%';
}

function renderTotalProgressBar(sum) {
    let value = sum;
    let minValue = 0;
    let maxValue = 1200;
    let redColor = '#ff0000';
    let yellowColor = '#ffff00';
    let greenColor = '#00ff00';
    let progressBar = document.getElementById(`TotalProgressBar`);

    if (value < 400) {
        progressBar.style.backgroundColor = redColor;
    } else if (value >= 400 && value < 600) {
        progressBar.style.backgroundColor = yellowColor;
    } else {
        progressBar.style.backgroundColor = greenColor;
    }

    let width = (value - minValue) / (maxValue - minValue) * 100;
    progressBar.style.width = width + '%';
    progressBar.innerHTML = value + '%';
}

function showFlavorText() {
    let flavorText = showPokemonFlavorText();
    pokemonCardInfoContainer.innerHTML += generateFlavorText(flavorText);
}
