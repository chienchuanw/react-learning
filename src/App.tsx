import { useState } from 'react'
import './App.css'

function App() {
  const [tags, setTags] = useState(['happy', 'cheerful']);

  // Add item to tags array
  const handleClickAdd = () => {
    setTags([ ...tags, 'exciting']) // This copies the original array and adds new item.
  };

  // Remove item from tags array
  const handleClickRemove = () => {
    setTags(tags.filter(tag => tag !== 'happy'));
  };
  
  // Update an existing item in tags array
  const handleClickUpdate = () => {
    setTags(tags.map(tag => tag === 'cheerful' ? 'depressed' : tag))
  };


  return (
    <div>
      <span>{tags}</span>
      <button onClick={handleClickAdd}>Add</button>
      <button onClick={handleClickRemove}>Remove</button>
      <button onClick={handleClickUpdate}>Update</button>
    </div>
  )


}

export default App
