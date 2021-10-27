let pokemonRepository = (function(){
  let pokemonList = [
    {
      name: 'Bulbasaur',
      height: 0.7,
      types: ['grass', 'poison']
    },
    {
      name: 'Ninetales',
      height: 1.1,
      types: ['fire']
    },
    {
      name: 'Lickitung',
      height: 1.2,
      types: ['normal']
    },
    {
      name: 'Espeon',
      height: 0.9,
      types: ['psychic']
    }
  ];

  function add(item){
    pokemonList.push(item);
  }

  function getAll(){
    return pokemonList;
  }

  return{
    add: add,
    getAll: getAll
  };
})();


// Iterating to find the maximum height value
let arbHeight = pokemonList[0].height;

pokemonList.forEach(function(pokemon){

  if (pokemon.height > arbHeight){
    arbHeight = pokemon.height;
  }
  return maxHeight = arbHeight;
});

// Iterating to write Pokemon's name and height on DOM
pokemonList.forEach(function(pokemon){

  if (pokemon.height == maxHeight && pokemon.height > 1){
    document.write(pokemon.name + ' (height: ' + pokemon.height + " meters) - Wow, that's big!<br>")
  }
  else{
    document.write(pokemon.name + ' (height: ' + pokemon.height + ' meters)<br>')
  }
});
