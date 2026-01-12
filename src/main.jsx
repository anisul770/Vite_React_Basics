import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  // StrictMode render every component 2
  // times one for checking early stage 
  // error and then other for showing 
  // the result in frontend
)
