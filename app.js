const display = document.querySelector(".display");

const getPokemon = async () => {
    const pokemonFetch = []
    for (let i = 1; i <= 151; i++) {
        let apiPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let myPokemons = await apiPokemon.json(); 
        
        pokemonFetch.push(myPokemons)
    }
    

    const mappedPokemon = pokemonFetch.map((element) => ({
        id: element.id,
        name: element.name,
        image: element.sprites.other["official-artwork"]["front_default"],
       /* image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${i}.gif" */

    }));

    pokemonInsert(mappedPokemon)

}

const pokemonInsert = (pokemonData) => {
    const pokemonHTML = pokemonData
      .map(
        (pokemon) =>
          `<li class="display__element">
          <h2>${pokemon.name}</h2>
          <img class="pokemonimage" src="${pokemon.image}" alt="${pokemon.name}"/>
          <p>#${pokemon.id}</p>
          </li>`
      ).join("");
    display.innerHTML = pokemonHTML; 
  };




getPokemon()

