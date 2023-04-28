import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/global.css'
import App from './Templates/Home/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
