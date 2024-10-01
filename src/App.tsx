import { useState } from 'react'
import './App.css'

function App() {
  const [customer, setCustomer] = useState({
    name: 'John',
    address: {
      city: 'San Francisco',
      zipCode: 94111
    }
  });

  // Update zipCode
  const handleClick = () => {
    setCustomer({ 
      ...customer, // Notice that spread operator in JS can only perform a shallow copy. In other words, it will not copy the nested properties of an object but reference the same object in memory. That is not what we want because every time we modify the address, it will affect the others.
      address: { ...customer.address, zipCode: 94112 } // That's why we need to use spread operator again to copy and thus update the zipCode.
    })  
  }

  return (
    <div>
      {customer.name}
      {customer.address.city}
      {customer.address.zipCode}
      <button onClick={handleClick}>Change Zip Code</button>
    </div>
  )


}

export default App
