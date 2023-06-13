import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart, AboutUs, Order, Good } from './pages'

function App() {

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/AboutUs' element={<AboutUs />} />
                    <Route path='/Order' element={<Order />} />
                    <Route path='/Good' element={<Good />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
