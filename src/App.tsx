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
      // Since there might be a lot of properties in an object, it will be more efficient to use spread operator (...) to copy all the property at once and then update the target property.
      ...drink,

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
