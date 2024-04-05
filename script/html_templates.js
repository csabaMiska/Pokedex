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
