function PokemonCard () {
    const pokemon = pokemonList[0];
    return (
      <figure>
        {pokemon.imgSrc != null ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
}  
  
  {/* // return (
  //   // <div>
  //     <figure>
  //       <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur"></img>
  //       <figcaption>bulbasaur</figcaption>
  //     </figure>
  //   // </div>
  //   ); */}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default PokemonCard;
