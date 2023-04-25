
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
// import Layout from './components/layout';

function App() {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />;
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={Account} />
          <Route path='/contact' component={Contact} />
          <Route path='/si' component={Ser} />
          
          {/* <Route path='/Layout' component={Layout}/> */}
          <Route path='/about' component={About}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
