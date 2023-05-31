function PokemonCard (props) {
  console.log(props);
    const pokemon = {
      name: props.name,
      img: props.imgSrc,
    }

    return (
      <figure>
        {pokemonList[0].imgSrc != null ? (
          <img src={pokemonList[0].imgSrc} alt={pokemonList[0].name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemonList[0].name}</figcaption>
      </figure>
    );
}  

  /* // return (
  //  <figure>
  //    <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur"></img>
  //    <figcaption>bulbasaur</figcaption>
  //  </figure>
  //   ); */

export default PokemonCard;
