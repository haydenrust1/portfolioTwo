import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
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
        </Switch>
        </Background>
        <Footer />
    </Router>
  );
}

export default App;
