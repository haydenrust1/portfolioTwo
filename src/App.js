import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from "./pages/Contact";
import Navbar from './components/Navbar/';
import Footer from './components/Footer/';
import Background from './components/Background';

function App() {
  return (
    <Router>
        <Background>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/home"]} >
            <Home />
          </Route>
          <Route exact path="/portfolio" >
            <Portfolio />
          </Route>
          <Route exact path="/contact" >
            <Contact />
          </Route>
        </Switch>
        </Background>
        <Footer />
    </Router>
  );
}

export default App;
