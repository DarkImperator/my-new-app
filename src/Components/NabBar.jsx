import './NavBar.css';
import { useState } from "react";

function NavBar ({pokemon}) {

// function InputMessage({ setMessage }) {
//   function handleChange(e) {
//     setMessage(e.target.value);
//   }

//   return <input name="message" onChange={handleChange} />;
// }

// function DisplayMessage({ message }) {
//   return <p>{message}</p>
// }

// function App() {
//   const [message, setMessage] = useState("");

//   return (<>
//     <InputMessage setMessage={setMessage} />
//     <DisplayMessage message={message} />
//   </>);

return (
    <>
      <div>
        <button onClick={handleClickP}>Précedent</button>
        <button onClick={handleClickS}>Suivant</button>
        <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
      </div>
    </>
  )
}
export default NavBar;