import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/users/UserRegister';
import Home from './components/Home/home';
import UserLogin from './components/users/UserLogin';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/register" element={<Register />} />
          <Route index path="/login" element={<UserLogin />} />
        </Routes>
      </Router>
    </React.StrictMode>
    
  )
}

export default App