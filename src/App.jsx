import './App.css';
import PokemonCard from "./Components/PokemonCard";

function App() {
  const pokemonList = [
    {
      name:  "bulbasaur", // "bulbasaur"
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <>
      <div>
        { <PokemonCard pokemon={pokemonList[0]}/> }
      </div>
    </>
  )
}

export default App
