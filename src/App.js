import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/index";
import { Home, Cart, All } from "./pages/index";

function App() {
  // В App асинхронный запрос при старте странице - перекинул в HOME ************************************
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
      <Routes>
        <Route path = '/pizza_redux' element = {<Home/>}/>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '*' element = {<All/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;

// const url = 'https://github.com/Makidonskiu/pizza_redux.git'