let pokemonRepository = (function(){
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
    loadDetails(pokemon).then(function (){
      console.log(pokemon);
    });
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
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();


// Iterating to write Pokemon's name on DOM
pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
