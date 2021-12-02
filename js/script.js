let pokemonRepository = (function(){
  // let pokemonList = [
  //   {
  //     name: 'Bulbasaur',
  //     height: 0.7,
  //     types: ['grass', 'poison']
  //   },
  //   {
  //     name: 'Ninetales',
  //     height: 1.1,
  //     types: ['fire']
  //   },
  //   {
  //     name: 'Lickitung',
  //     height: 1.2,
  //     types: ['normal']
  //   },
  //   {
  //     name: 'Espeon',
  //     height: 0.9,
  //     types: ['psychic']
  //   }
  // ];
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

  // add function to input pokemon into empty pokemon array
  function add(pokemon){
    if (
      typeof pokemon === 'object' &&
      'name'in pokemon &&
      'detailsUrl' in pokemon
    ){
      pokemonList.push(pokemon);
    } else{
      console.log('pokemon is not correct');
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

  function loadList(){
    return fetch(apiUrl).then(function (response){
      return response.json();
    }).return(function (json){
      json.results.forEach(function (item){
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e){
      console.error(e);
    })
  }

  function loadDetails(pokemon){
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response){
      return response.json();
    }).then(function (details){
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;
    }).catch(function (e){
      console.error(e);
    });
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
