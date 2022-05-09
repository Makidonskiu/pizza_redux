import React, { useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { Header } from "./components/index";
import { Home, Cart } from "./pages/index";
import { setPizzas } from './redux/actions/pizzas'

function App() {
 const dispatch = useDispatch();

  // В App асинхронный запрос при старте странице ************************************

  useEffect( () => {
      axios.get('http://myjson.dit.upm.es/api/bins/8vhz')
        .then( ({data}) => {
          dispatch(setPizzas(data.pizzas))
        });
  }, [])
  
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
      <Routes>
        <Route path = '/pizza_react/' element = {<Home/>}/>
        <Route path = '/cart' element = {<Cart/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
