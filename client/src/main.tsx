import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import {HeaderProvider} from "./context/TitleContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <HeaderProvider>
            <App />
        </HeaderProvider>
    </BrowserRouter>
  </StrictMode>,
)
