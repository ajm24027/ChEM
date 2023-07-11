import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
