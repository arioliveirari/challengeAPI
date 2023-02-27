

function fetchPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon')
     .then(response => response.json())
     .then(function(allpokemon){
     allpokemon.results.forEach(function(pokemon){
       fetchPokemonData(pokemon); 
     })
    })
   }


function fetchPokemonData(pokemon){
    let url = pokemon.url
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
      console.log(pokeData.id)
      })
    }

fetchPokemon()
//console.log(test)

function renderPokemon(pokeData){
        let allPokemonContainer = document.getElementById('pokedex');
        let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
        let pokeName = document.createElement('h4')       // pokemon name
        pokeName.innerText = pokeData.name
        let pokeNumber = document.createElement('p')      //pokemon id                      
        pokeNumber.innerText = `#${pokeData.id}`
        pokeContainer.append(pokeName, pokeNumber);       //appending all details to the pokeContainer div
        allPokemonContainer.appendChild(pokeContainer);   //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
        }

renderPokemon()

function createTypes(types, ul){
            types.forEach(function(type){
            let typeLi = document.createElement('li');
            typeLi.innerText = type['type']['name'];
            ul.append(typeLi)
            })
          }

function createPokeImage(pokeID, containerDiv){
            let pokeImage = document.createElement('img')
            pokeImage.srcset =    `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`
            containerDiv.append(pokeImage);
          }

