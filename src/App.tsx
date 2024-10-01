import { useState } from 'react'
import './App.css'

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  // When click the button, it will update the price of the drink.
  const handleClick = () => {
    // Since we cannot directly update the state by assigning new value, we have to declare a new variable and pass it into setDrink.
    const newDrink = {
      title: drink.title,  // This will copy the old value as the value of title.

      // Update the target property
      price: 6,
    }
    setDrink(newDrink); // Update the state.
  }

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  )


}

export default App
