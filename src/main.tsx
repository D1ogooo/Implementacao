import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './style/index.css'
import { SignUp } from './pages/Auth/Signup/index.tsx'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SignUp />
  </StrictMode>,
)
