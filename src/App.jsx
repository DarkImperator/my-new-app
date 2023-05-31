import PokemonCard from "./Components/PokemonCard";

function App() {
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

  return (
    <>
      <div>
        { <PokemonCard /*name={pokemonList.name [0]} imgSrc={pokemonList.imgSrc[0]}*//> }
      </div>
    </>
  )
}

export default App
