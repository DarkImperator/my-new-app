import PropTypes from "prop-types";

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
  
  PokemonCard.propTypes = {
    pokemonList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    }).isRequired,
  }

  export default PokemonCard;
