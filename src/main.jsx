import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './scrollbar.css'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './components/context/contextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
   </StrictMode>
)
