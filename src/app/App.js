import React, { Component } from 'react';
import * as classes from './App.css';

import {Switch, Route, Redirect} from 'react-router-dom';

import Header from './shared-components/header/header';
import Footer from './shared-components/footer/footer';
import DashBoard from './components/dashboard/dashboard';
import Categories from './components/categories/categories';
import ProductItem from './components/product-item/product-item';
import Payment from './components/payment/payment';
import Products from './components/products/products';
import Userprofile from './components/userprofile/userprofile';
import Account from './components/account/account';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
      <Header />
            <Switch>
              <Route exact path='/' render={(props) => <DashBoard {...props}/>} />
              <Route path='/categories' render={(props)=> <Categories {...props}/>}/>
              <Route path='/product' render={(props) => <ProductItem {...props}/>}/>
              <Route path='/payment' render={(props)=> <Payment {...props}/>}/>
              <Route path='/productslist' render={(props)=> <Products {...props}/>}/>
              <Route path='/userprofile' render={(props)=> <Userprofile {...props}/>}/>
              <Route path='/accountDetails' render={(props)=> <Account {...props}/>}/>
              <Redirect from='/**' to ='/'/>
            </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;
