


   async function getPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/'+Attr[0]+'/';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


let test = getPokemon(1)
console.log(test.id)