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

function generatePokemonCardInfoTable() {
    return `<div class="tableContainer">
                <table class="customTable">
                     <tr>
                        <td class="wideColumn">Base Exp.</td>
                        <td id="pokemonBaseExp" class="secondColum">Base Exp.</td>
                    </tr>
                    <tr>
                        <td class="wideColumn">Height</td>
                        <td id="pokemonHeight" class="secondColum">Height</td>
                    </tr>
                    <tr>
                        <td class="wideColumn">Weight</td>
                        <td id="pokemonWeight" class="secondColum">Weight</td>
                    </tr>
                    <tr>
                        <td class="wideColumn">Abilities</td>
                        <td id="pokemonAbilities" class="secondColum">Abilities</td>
                    </tr>
                </table>
            </div>
            <div class="tableContainer">
                <h3>Breeding</h3>
                <table class="customTable">
                    <tr>
                        <td class="wideColumn">Growth Rate</td>
                        <td id="pokemonGrowthRate" class="secondColum">Growth Rate</td>
                    </tr>
                    <tr>
                        <td class="wideColumn">Base Happiness</td>
                        <td id="pokemonBaseHappiness" class="secondColum">BaseHappiness</td>
                    </tr>
                    <tr>
                        <td class="wideColumn">Capture Rate</td>
                        <td id="pokemonCaptureRate" class="secondColum">CaptureRate</td>
                    </tr>
                    <tr>
                </table>
            </div>`
}
