function PokemonCard (props) {
  console.log(props);
    
    return (
      <figure>
        {props.pokemonList.imgSrc != null ? (
          <img src={props.pokemonList.imgSrc} alt={props.pokemonList.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{props.pokemonList.name}</figcaption>
      </figure>
    );
}  

export default PokemonCard;