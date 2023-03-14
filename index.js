fetchPokemon()

function fetchPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
     .then(response => response.json())
     .then(function(allpokemon){
     allpokemon.results.forEach(function(pokemon){
       fetchPokemonData(pokemon)
     })
    })
   }


function fetchPokemonData(pokemon){
    let url = pokemon.url
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
      renderPokemon(pokeData)
      })
    }


function renderPokemon(pokeData){
        let allPokemonContainer = document.getElementById('pokedex')
        let pokeContainer = document.createElement("div") 
        pokeContainer.setAttribute("class","pokeCont")  
        let pokeInfo = document.createElement("div")            
        let pokeName = document.createElement('h4')                     
        pokeName.textContent = pokeData.name
        let pokeImage = document.createElement('img')
        pokeImage.srcset =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`
        pokeImage.setAttribute("class","pokeIm")
        console.log(pokeContainer)
        let pokeNumber = document.createElement('p')                                      
        pokeNumber.textContent = `#${pokeData.id}`    
        pokeInfo.append(pokeName, pokeNumber)    
        pokeContainer.append(pokeImage, pokeInfo)                 
        allPokemonContainer.appendChild(pokeContainer)                 
        }

 function renderInformation(){
  
 }       