import { useState } from 'react';
import './App.css'
import Button from './components/button'

function App() {
  const [count, setCount] = useState<number>(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  const [age, setAge] = useState<number>(0);

  const getNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.currentTarget.value); // Convertit la chaîne en nombre
    
    if (!isNaN(inputValue)) {
      setAge(inputValue);
    }
  }

  function checkMajority() {
    if (age < 18) console.log("Vous êtes mineur");
    else console.log("Vous êtes majeur");
  }
  
  return (
    <>
      <div>
        <p> Compteur : {count} </p>
        <Button label = "+" onClick={increaseCount}></Button>
        <Button label = "-" onClick={decreaseCount}></Button>
        <Button label = "Reset" onClick={resetCount}></Button><br/>
        <input type="number" placeholder="Age..." onChange={ getNumber}></input>
        <Button label="Valider" onClick={checkMajority}></Button>
      </div>
    </>
  )
}

export default App