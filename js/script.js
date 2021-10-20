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
  if (pokemonList[i].height > largest){
    maxHeight = pokemonList[i].height;
  }
}
