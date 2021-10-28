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

  // isObject function to check if parameter is an object
  function isObject(item){
    if (typeof(item) === 'object'){
      return true;
    }
    else{
      alert('Add function parameter is not an object.')
    }
  }

  // isObject function to check if parameter is an object
  function isObject(item){
    if (typeof(item) === 'object'){
      return true;
    }
    else{
      alert('Add function parameter is not an object.');
    }
  }

  // compareKeys function to check if the keys between objects are equal
  function compareKeys(object1, object2){
    let key1 = Object.keys(object1);
    let key2 = Object.keys(object2);
    let key1String = key1.join();
    let key2String = key2.join();
    if (key1String === key2String){
      return true;
    }
    else{
      alert('Parameter keys are not the same.');
    }
  }

  // add function to append new items/objects onto pokemonList
  function add(item){
    if (
      isObject(item) && !compareKeys(pokemonList[0], item) ||
      !isObject(item) && compareKeys(pokemonList[0], item)){
      alert('Could not add item to the list.')
    }
    else{
      return pokemonList.push(item);
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
