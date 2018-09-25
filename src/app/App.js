import React, { Component } from 'react';
import classes from './App.css';

import { connect } from 'react-redux';
import { defaultFunction } from './actions';
import {Switch, Route, Redirect} from 'react-router-dom';

import Header from './shared-components/header/header';
import Footer from './shared-components/footer/footer';
import DashBoard from './components/dashboard/dashboard';
import Categories from './components/categories/categories';
import Payment from './components/payment/payment';

class App extends Component {

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  render() {
    return (
      <div className={classes.App}>

            <Switch>
              <Route exact path='/' render={(props) => <DashBoard {...props}/>} />
              <Route path='/categories' render={(props)=> <Categories {...props}/>}/>
              <Route path='/payment' render={(props)=> <Payment {...props}/>}/>
            </Switch>

      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(mapStateToProps, { defaultFunction })(App);
