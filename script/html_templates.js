// Strat Screen Templates
function generateStartCardsHTML(startPokemonId, startPokemonName, startPokemonImage, pokemonId) {
    return `<div id="startCard${pokemonId}" onclick="loadPokemonCard(${pokemonId})" class="startCard" style="background-color: rgb(70, 209, 177);">
                <div class="startCardIdContainer">
                    <div class="startCardId">#${startPokemonId}</div>
                </div>
                <div class="startCardHeadlineContainer">    
                    <div class="startCardHeadline">${startPokemonName}</div>
                </div>
                <div class="startCardTypesAndImage">
                    <div class="startCardTypesContainer" id="startCardTypesContainer${pokemonId}">
                    </div>
                    <div class="startCardImageContainer">
                        <img class="startCardImage" src=${startPokemonImage}>
                    </div>
                </div>
            </div>`
} 

// Pokemon Card Templates
function generatePokemonCardNav(favoritId) {
    return `<img src="img/icons/back.png" onclick="hidePokemonCard()" class="pokemonCardIcon" alt="backbutton">
            <img src="img/icons/heart_white.png" onclick="addToFavorit(${favoritId})" id="favoritIcon${favoritId}"class="pokemonCardIcon" alt="favoritbutton">`;
}