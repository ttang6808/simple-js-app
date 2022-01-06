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
      showModal(pokemon.name,  'Height: ' + pokemon.height, pokemon.imageUrl);
    });
  }

  function loadList(){
    return fetch(apiUrl).then(function (response){
      return response.json();
    }).then(function (json){
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

  // Functions for modal
  let modalContainer = document.querySelector('#modal-container');

  function showModal(title, text, image) {
    // Clear all existing modal content
    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

  // Closing with close button
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'X';

    closeButtonElement.addEventListener('click', hideModal);

  // Add the new modal content
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    // Create an <img> element
    let imageContainer = document.createElement('div');
    let imageElement = document.createElement('img');

    imageElement.src = image;
    imageContainer.appendChild(imageElement);
    // End of modal image


    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageContainer);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  document.querySelector('#show-modal').addEventListener('click',() => {
    showModal('Modal title', 'This is the modal content!', 'image');
  });

  // Hide modal function when closed
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  // Closing with Esc key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains ('is-visible')) {
      hideModal();
    }
  });

  // Closing by clicking out
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

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
