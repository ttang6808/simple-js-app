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

  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let pokemonListItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    pokemonListItem.appendChild(button);
    pokemonList.appendChild(pokemonListItem);
    // Showing details of selected pokemon button
    pokemonSelectedEvent(button,pokemon);
  }

  function pokemonSelectedEvent(button,pokemon){
    button.addEventListener('click',function(event){
      event.preventDefault();
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon){
    console.log(pokemon.name);
  }

  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();


// Iterating to write Pokemon's name on DOM
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
