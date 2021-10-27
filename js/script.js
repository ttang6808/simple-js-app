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
    if (typeof(item) === 'object'){
      return pokemonList.push(item);
    }
    else{
      alert('An object parameter is required.');
    }
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
let arbHeight = pokemonRepository.getAll()[0].height;

pokemonRepository.getAll().forEach(function(pokemon){
  if (pokemon.height > arbHeight){
    arbHeight = pokemon.height;
  }
  return maxHeight = arbHeight;
});

// Iterating to write Pokemon's name and height on DOM
pokemonRepository.getAll().forEach(function(pokemon){

  if (pokemon.height == maxHeight && pokemon.height > 1){
    document.write(pokemon.name + ' (height: ' + pokemon.height + " meters) - Wow, that's big!<br>")
  }
  else{
    document.write(pokemon.name + ' (height: ' + pokemon.height + ' meters)<br>')
  }
});
