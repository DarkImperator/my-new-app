import './App.css';
import PokemonCard from "./Components/PokemonCard";
import NavBar from './Components/NabBar';
import { useState } from "react";
import PropTypes from "prop-types";

function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const [pokemonName, setPokemonName] = useState(pokemonList[0].name);
  const pokemonAAfficher = pokemonList.find(pokemon => pokemon.name === pokemonName);
  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonAAfficher}/>
        <NavBar pokemonName={pokemonName} setPokemonName={setPokemonName} pokemonList={pokemonList} />
      </div>
    </>
  )
}
export default App
