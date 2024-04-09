// Pokemon Add to Favorit
function addToFavorit(favoritId) {
    let isPokemonInFavorites = false;
    for (let i = 0; i < favoritPokemons.length; i++) {
        if (favoritPokemons[i] === favoritId) {
            favoritPokemons.splice(i, 1);
            isPokemonInFavorites = true;
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

function renderStartCardFavoritIcon(pokemonId) {
    let favoritIcon = document.getElementById(`favoritIcon${pokemonId}`);
    let favoritWhiteIcon = 'http://127.0.0.1:5500/img/icons/heart_white.png';
    let favoritRedIcon = 'http://127.0.0.1:5500/img/icons/heart_red.png';
    for (let i = 0; i < favoritPokemons.length; i++) {
        const favoritPokemonId = favoritPokemons[i];
        if (currentPokemon.id == favoritPokemonId) {
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
    favoritPokemons.sort(function(a, b){return a-b});
    for (let i = 0; i < favoritPokemons.length; i++) {
        const favoritPokemon = favoritPokemons[i];
        await loadPokemons(favoritPokemon);
        showPokemonInfo(favoritPokemon);
        showPokemonTypes(favoritPokemon);
        renderBackgroundColor(favoritPokemon);
    }
}
