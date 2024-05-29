import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './scrollbar.css'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './components/context/contextProvider.jsx';
window.addEventListener('load', () => {
  document.querySelector('.alert').style.zIndex = '10'
  setTimeout(() => {
    document.querySelector('.alert').style.zIndex = '-5'
  }, 3000);
})
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
  // {/* </React.StrictMode> */}
)
