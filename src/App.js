import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/Products/About";
 
import Product from "./components/Product";

import Estadisticas from "./components/Estadisticas";

import UsersBack from "./components/UsersBack";


import Update from "./Update";
import Destacados from "./Destacados";


 
function App() {
  return (
 
  <Router>


 
      <Route exact path="/">
          <Home />
       </Route>


       <Route exact path="/products">
           <Product />
      </Route>

 
      <Route path="/estadisticas">
         <Estadisticas />
      </Route>

  
     <Route path="/destacados" component={Destacados}  />


      <Route path="/update" component={Update}  />


      <Route path="/about" component={About} />
          
 
    
 
</Router>

 
  );
}

export default App;

