// Pokemon Add/Remove to Favorit
function addToFavorit(favoritId) {
    let isPokemonInFavorites = false;
    for (let i = 0; i < favoritPokemons.length; i++) {
        if (favoritPokemons[i] === favoritId) {
            favoritPokemons.splice(i, 1);
            isPokemonInFavorites = true;
            savefavoritPokemonsAsText();
            renderFavoritPokemons();
            hidePokemonCard();
            break;
        }
    }

    if (!isPokemonInFavorites) {
        favoritPokemons.push(favoritId);
    }

    renderFavoritIcon(favoritId);
    savefavoritPokemonsAsText();
}

// Render Favorit Icon
function renderFavoritIcon(favoritId) {
    let favoritIcon = document.getElementById(`favoritIcon${favoritId}`);
    let favoritWhiteIcon = 'http://127.0.0.1:5500/img/icons/heart_white.png';
    let favoritRedIcon = 'http://127.0.0.1:5500/img/icons/heart_red.png';
    for (let i = 0; i < favoritPokemons.length; i++) {
        const favoritPokemon = favoritPokemons[i];
        if (favoritPokemon === favoritId) {
            favoritIcon.src = favoritRedIcon;
        } else {
            favoritIcon.src = favoritWhiteIcon;
        }
    }
}

//Render Start Card Favorit Icon
function renderStartCardFavoritIcon(pokemonId) {
    let favoritIcon = document.getElementById(`favoritIcon${pokemonId}`);
    let favoritWhiteIcon = 'http://127.0.0.1:5500/img/icons/heart_white.png';
    let favoritRedIcon = 'http://127.0.0.1:5500/img/icons/heart_red.png';
    for (let i = 0; i < favoritPokemons.length; i++) {
        const favoritPokemonId = favoritPokemons[i];
        if (pokemonId == favoritPokemonId) {
            favoritIcon.src = favoritRedIcon;
            break;
        } else {
            favoritIcon.src = favoritWhiteIcon;
        }
    }
}

// Render Favorit Pokemons

async function renderFavoritPokemons() {
    startContent.innerHTML = '';
    favoritPokemons.sort(function (a, b) { return a - b });
    for (let i = 0; i < loadedFavoritPokemon; i++) {
        const favoritPokemon = favoritPokemons[i];
        if (favoritPokemons.length < 1) {
            alert('Du hast kein Favorit Pokemon');
            break
        } if (i === favoritPokemons.length) {
            break
        } else {
            await loadPokemons(favoritPokemon);
            showPokemonInfo(favoritPokemon);
            showStartPokemonTypes(favoritPokemon);
            renderBackgroundColor(favoritPokemon);
        }
    }
    loadFavoritPokemonScreen();
    loadFavoritPokemonPrevAndNext();
}

//Load More Favorit Pokemon
function loadMoreFavoritPokemons() {
    loadedFavoritPokemon += 18;
    renderFavoritPokemons();
}

//Prev & Next Favorit Pokemon
function searchFavoritPokemonId() {
    let currentPokemonId = currentPokemon['id'];
    for (let i = 0; i < favoritPokemons.length; i++) {
        const favoritPokemon = favoritPokemons[i];
        if (currentPokemonId === favoritPokemon) {
            return i;
        }
    }
}

function prevFavoritPokemon() {
    let currentFavoritPokemon = searchFavoritPokemonId();
    currentFavoritPokemon--;
    if (currentFavoritPokemon >= 0) {
        for (let i = currentFavoritPokemon; i < favoritPokemons.length; i++) {
            const favoritPokemon = favoritPokemons[i];
            loadPokemonCard(favoritPokemon);
            break
        }
    }
}

function nextFavoritPokemon() {
    let currentFavoritPokemon = searchFavoritPokemonId();
    currentFavoritPokemon++;
    if (currentFavoritPokemon <= favoritPokemons.length) {
        for (let i = currentFavoritPokemon; i < favoritPokemons.length; i++) {
            const favoritPokemon = favoritPokemons[i];
            loadPokemonCard(favoritPokemon);
            break
        }
    }
}

//Load Favorit Pokemon Screen
function loadFavoritPokemonScreen() {
    document.getElementById('morePokemon').classList.add('d-none');
    document.getElementById('moreFavoritPokemon').classList.remove('d-none');
}


//Load Favorit Pokemon Prev & Next Button
function loadFavoritPokemonPrevAndNext() {
    document.getElementById('prevPokemon').classList.add('d-none');
    document.getElementById('prevFavoritPokemon').classList.remove('d-none');
    document.getElementById('nextPokemon').classList.add('d-none');
    document.getElementById('nextFavoritPokemon').classList.remove('d-none');
}