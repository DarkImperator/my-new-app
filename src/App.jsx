import './App.css';
import PokemonCard from "./Components/PokemonCard";
import { useState } from "react";

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
  const handleClickS = () => (pokemonIndex < pokemonList.length - 1) ? setPokemonIndex(pokemonIndex + 1) : null
  const handleClickP = () => (pokemonIndex > 0) ? setPokemonIndex(pokemonIndex - 1) : null

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        <button onClick={handleClickP}>Précedent</button>
        <button onClick={handleClickS}>Suivant</button>
      </div>
    </>
  )
}
export default App
