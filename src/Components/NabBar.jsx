import { object } from 'prop-types';
import './NavBar.css';
import PokemonCard from './PokemonCard';

function NavBar ({setPokemonName, pokemonName, pokemonList}) {
  // const handleClickS = () => (pokemonIndex < pokemonList.length - 1) ? setPokemonIndex(pokemonIndex + 1) : null
  // const handleClickP = () => (pokemonIndex > 0) ? setPokemonIndex(pokemonIndex - 1) : null

  const handleClick = (e) => {
    setPokemonName(e.target.innerHTML)
  }
    
  
return (
    <>
      <div>
      
      {pokemonList.map(pokemon => (
        <button onClick={handleClick}>{pokemon.name}</button>
      ))  }
      </div>
    </>
  )
}
export default NavBar;