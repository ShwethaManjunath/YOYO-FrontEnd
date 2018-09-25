import React, { Component } from 'react';
import * as classes from './App.css';

import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './shared-components/header/header';
import Footer from './shared-components/footer/footer';
import DashBoard from './components/dashboard/dashboard';
import Categories from './components/categories/categories';
import ProductItem from './components/product-item/product-item';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <Header/>
            <Switch>
              <Route exact path='/' render={(props) => <DashBoard {...props}/>} />
              <Route path='/categories' render={(props)=> <Categories {...props}/>}/>
              <Route path='/product' render={(props) => <ProductItem {...props}/>}/>
              <Redirect from='/**' to ='/'/>
            </Switch>
          <Footer/>
      </div>
    );
  }
}

export default App;
