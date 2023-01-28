import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import{BrowserRouter as Router ,Route ,Switch} from "react-router-dom"
import Home from './Component/pages/Home';
import Footer from "./Component/Footer"
import Services from './Component/pages/Services';
import Products from './Component/pages/Products';
import SignUp from './Component/pages/Signup';

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/services'  component={Services} />
      <Route path='/Products'  component={Products} />
      <Route path='/sign-up'  component={SignUp} />
     
    </Switch>
    <Footer/>
  </Router>

  );
}

export default App;
