import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/user.scss'
import './index.scss'
import Register from './components/users/UserRegister';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route index path="/register" element={<Register />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
