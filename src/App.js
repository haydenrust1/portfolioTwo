import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from "./pages/Contact";
import Navbar from './components/Navbar/';
import Footer from './components/Footer/';

function App() {
  return (
    <Router>
        <Navbar />
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} /> */}
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
        <Footer />
    </Router>
  );
}

export default App;
