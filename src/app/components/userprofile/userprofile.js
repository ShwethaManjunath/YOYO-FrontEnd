import React, { Component } from 'react';
import * as classes from './userprofile.scss';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TransactionHistory from '../transaction-history/transaction-history';

class UserProfile extends Component {

  userInfo() {
    let user = {
      'name': 'testUser',
      'email': 'test123@gmail.com',
      'phone': '123456789',
      'address': 'Mindtree Ltd Global Village Mysore Road - 123456',
      'points':'300'
    }

    return (
      <div >
        <h1 style={{ textAlign: 'center', color: '#9de0ad' }}>User Profile</h1>
        <Grid container spacing={24} style={{ marginLeft: '25%', marginTop: '2%', marginBottom: '3%' }}>
          <Grid item sm={2}>
            <Avatar
              alt="Adelle Charles"
              src="/images/avatar.png"
              className={classes.image}
              style={{ height: "200px", width: "200px" }}
            />
          </Grid>
          <Grid item sm={10} >
            <div style={{ textAlign: 'left', marginLeft: '5%' }}>
              <p><b>Name</b>    : {user.name} </p>
              <p><b>Email</b>   : {user.email} </p>
              <p><b>Phone</b>   : {user.phone}</p>
              <p><b>Address</b> : {user.address}</p>
              <p><b>Points</b> : {user.points}</p>
            </div>
       
          </Grid>
          <Button variant="contained" style={{backgroundColor:'#E5FCC2',marginLeft:'20%'}}>
        Add Points
      </Button>
        </Grid>
        <TransactionHistory/>
      </div>
    )
  }

  render() {
    return (
      <div>{this.userInfo()}</div>
    )
  }
}



export default UserProfile;