import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TextToggle from './components/TextToggle.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TextToggle />
  </StrictMode>,
)
