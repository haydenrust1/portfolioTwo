import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from "./pages/Contact";
import Navbar from './components/Navbar/';
import Footer from './components/Footer/';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/home" >
          <Home />
        </Route>
        <Route exact path="/portfolio" >
          <Portfolio />
        </Route>
        <Route exact path="/contact" >
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
