import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './Context/AddContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import {ClerkProvider} from "@clerk/clerk-react"
const PUBLISHABLEKEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if(!PUBLISHABLEKEY){
  throw new Error("missing key")
}
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ClerkProvider publishableKey={PUBLISHABLEKEY} afterSignOutUrl='/'>
  <AppContextProvider>
    <App />
  </AppContextProvider>
  </ClerkProvider>
  </BrowserRouter>,
)
