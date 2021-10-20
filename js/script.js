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

// Iterating to find the maximum height value
let maxHeight = pokemonList[0].height;
for (let i = 0; i < pokemonList.length; i++){
  if (pokemonList[i].height > maxHeight){
    maxHeight = pokemonList[i].height;
  }
}

// Iterating to write Pokemon's name and height on DOM
for (let j = 0; j < pokemonList.length; j++){

  if (pokemonList[j] .height == maxHeight && pokemonList[j].height > 1){
    document.write(pokemonList[j].name + ' (height: ' + pokemonList[j].height + " meters) - Wow, that's big!<br>")
  }
  else{
    document.write(pokemonList[j].name + ' (height: ' + pokemonList[j].height + ' meters)<br>')
  }
}
