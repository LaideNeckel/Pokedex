const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 1000
const limit = 15;
let offset = 0;




function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
                <li class="pokemon ${pokemon.type}">
                    <span Class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
            
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
                </div>

                <hr size="30" width="100%" color="white">

                <div class="moreDetails">
                        <ol class="ability">Ability: ${pokemon.ability}</ol>
                        <ol class="hp">HP: ${pokemon.hp}</ol>
                        <ol class="attack">Attack: ${pokemon.attack}</ol>
                        <ol class="defense">Defense: ${pokemon.defense}</ol>
                        <ol class="specialAttack">Special Attack: ${pokemon.specialAttack}</ol>
                        <ol class="specialDefense">Special Defense: ${pokemon.specialDefense}</ol>
                        <ol class="speed">Speed: ${pokemon.speed}</ol>
                        <ol class="height">Height: ${pokemon.height}</ol>
                        <ol class="weight">Weight: ${pokemon.weight}</ol>
                    </div>
                
            </li>
        `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecord = offset + limit

    if (qtdRecord >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})


    


        
   

