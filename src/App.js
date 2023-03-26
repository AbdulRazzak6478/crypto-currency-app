import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Exchanges from './components/Exchanges';
import Coins from './components/Coins.jsx';
import CoinDetails from './components/CoinDetails.jsx';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/exchanges" element={<Exchanges />}/>
            <Route path="/coins" element={<Coins />}/>
            <Route path="/coins/:id" element={<CoinDetails />}/>
        </Routes>
        <Footer />
    </Router>
  )
}

export default App