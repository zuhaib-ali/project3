import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Error from './components/Error';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products"  component={Products}></Route>
        <Route path="/products/:name" component={Products}></Route>
        <Route component={Error}><Error></Error></Route>
      </Switch>
    </>
  );
}

export default App;
