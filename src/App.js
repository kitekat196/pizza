import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Header} from './components';
import {Home, Cart} from './pages'
import {useDispatch} from 'react-redux'

function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home/>} exact />
                    <Route path='/Cart' element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
