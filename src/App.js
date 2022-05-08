import React, { useEffect, useState } from "react";

// import axios from "axios";

import { Routes, Route } from "react-router-dom";
import { Header } from "./components/index";
import { Home, Cart } from "./pages/index";

function App() {
  const [pizzas, setPizzas] = useState([])

  // В App асинхронный запрос ************************************

  useEffect( () => {
    fetch('http://localhost:3000/pizza_react/db.json')
      .then( res => res.json())
      .then( json => setPizzas(json.pizzas) )
  }, [])
  
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
      <Routes>
        <Route path = '/pizza_react/' element = {<Home pizzas = {pizzas}/>}/>
        <Route path = '/cart' element = {<Cart/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
