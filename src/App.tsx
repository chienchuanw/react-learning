import { useState } from 'react'
import './App.css'

function App() {
  const [bugs, setBugs] = useState([ 
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
  ])

  // Update "fixed" status in Bug 1
  const handleClick = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: !bug.fixed } : bug))
  }

  return (
    <div>
      <ul>
        {bugs.map(bug => (
          <li key={bug.id}>
            ID: {bug.id}, Title: {bug.title}, Fixed: {bug.fixed ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Update</button>
    </div>
  )


}

export default App
