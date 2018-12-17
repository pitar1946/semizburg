import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import About from './About';
import Story from './Story';
import OurBeers from './OurBeers';
import HowItsMade from './HowItsMade';
import Shop from './Shop';
import Blog from './Blog';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
       <div>
        <Router>
         <div>
         <NavBar/>
          <Switch>
             <Header exact path='/' component={Header}/>
             <Route exact path='/about' component={About}/>
             <Route exact path='/story' component={Story}/>
             <Route exact path='/ourbeers' component={OurBeers}/>
             <Route exact path='/howitsmade' component={HowItsMade}/>
             <Route exact path='/shop' component={Shop}/>
             <Route exact path='/blog' component={Blog}/>
           </Switch>
           <Footer/>
           </div>
          </Router> 
      </div>
    );
  }
}

export default App;
