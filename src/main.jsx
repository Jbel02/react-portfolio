import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap's stylesheet is imported once, here, so every component can rely
// on its classes. Only the CSS is needed — all interactive behaviour in this
// app (modals, nav collapse) is driven by React state instead of Bootstrap's
// JS bundle, which would otherwise fight React for control of the DOM.
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
