import './NavBar.css';
import { useState } from "react";
import PropTypes from "prop-types";

function NavBar ({setPokemonIndex, pokemonIndex, pokemonList}) {
  const handleClickS = () => (pokemonIndex < pokemonList.length - 1) ? setPokemonIndex(pokemonIndex + 1) : null
  const handleClickP = () => (pokemonIndex > 0) ? setPokemonIndex(pokemonIndex - 1) : null

  // function NavBar (props) {            ==> methode structurée avec props.
  // const {pokemonIndex, pokemonList, setPokemonIndex} = props;
  // const handleClickS = () => (pokemonIndex < pokemonList.length - 1) ? setPokemonIndex(pokemonIndex + 1) : null
  // const handleClickP = () => (pokemonIndex > 0) ? setPokemonIndex(pokemonIndex - 1) : null

return (
    <>
      <div>
        <button onClick={handleClickP}>Précedent</button>
        <button onClick={handleClickS}>Suivant</button>
      </div>
    </>
  )
}
export default NavBar;