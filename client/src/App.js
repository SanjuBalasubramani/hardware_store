import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import Ser from './components/ser';
// import Login from './components/Login';
// import { Register } from './components/Register';
import About from './components/About';
import Account from './components/pages/Account';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={Account} />
          <Route path='/contact' component={Contact} />
          <Route path='/si' component={Ser} />
          <Route path='/about' component={About}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
