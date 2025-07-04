import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@richaadgigi/stylexui/css/xui.min.css"; // Core CSS
import { apply } from "@richaadgigi/stylexui"; // Dark mode helper

// Apply dark mode automatically (optional)
apply();
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
