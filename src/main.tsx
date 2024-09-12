import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'

// We use Bootstrap for CSS styling instead of index.css
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
