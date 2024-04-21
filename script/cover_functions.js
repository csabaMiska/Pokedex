// Cover Functions
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatId(number) {
    return (number < 10 ? '00' : number < 100 ? '0' : '') + number;
}

function stopPropagation(event) {
    event.stopPropagation();
}

function renderStartCardBackgroundColor(pokemonId) {
    let pokemonTypes = currentPokemon['types'];
    let firstPokemonType = pokemonTypes[0]['type']['name'];
    let startCard = document.getElementById(`startCard${pokemonId}`);
    for (let i = 0; i < backgroundColors.length; i++) {
        const backgroundColor = backgroundColors[i];
        const colorName = backgroundColor['name'];
        const color = backgroundColor['color'];
        if (firstPokemonType == colorName) {
            startCard.style.backgroundColor = color;
            break
        }
    }
}

function renderPokemonCardBackgroundColor(pokemonId) {
    let pokemonTypes = currentPokemon['types'];
    let firstPokemonType = pokemonTypes[0]['type']['name'];
    for (let i = 0; i < backgroundColors.length; i++) {
        const backgroundColor = backgroundColors[i];
        const colorName = backgroundColor['name'];
        const color = backgroundColor['color'];
        if (firstPokemonType == colorName) {
            pokemonCard.style.backgroundColor = color;
            break
        }
    }
}
