import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RoomState from './context/RoomState';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RoomState>
    <App />
    </RoomState>
  </React.StrictMode>,
)
