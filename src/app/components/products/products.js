// basic react component starting template
import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-flexbox-grid';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import * as classes from './products.scss';
import Card from '../../shared-components/card/card';
import { connect } from 'react-redux';
import { getAllProducts } from '../../actions/getAllProducts';




class Products extends Component {

  renderMockProducts() {
    return this.props.allProducts.map(prod => {
      return <Card  key={prod.id}
        productName={prod.title}
        price={prod.points}
        description={prod.description}
        rating={prod.avgRating}
        photos={prod.image}  />
    })
  }
  componentWillMount() {
    this.props.getAllProducts();
  }
  render() {
    return (
      <Grid container style={{margin:'0'}}>
        <Row>
        <Col xs={9} sm={9} md={3} lg={3}>
          <List>
            <Typography >
              Sort by Category
            </Typography>
            <ListItem dense button className={classes.listItem}>
              <ListItemText>
                Category 1
              </ListItemText>
              <ListItemSecondaryAction>
                <Checkbox />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem dense button className={classes.listItem}>
              <ListItemText>
                Category 1
              </ListItemText>
              <ListItemSecondaryAction>
                <Checkbox />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem dense button className={classes.listItem}>
              <ListItemText>
                Category 1
              </ListItemText>
              <ListItemSecondaryAction>
                <Checkbox />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <List>
            <Typography >
              Price
            </Typography>
            <ListItem dense button className={classes.listItem}>
              <ListItemText>
                Category 1
              </ListItemText>
              <ListItemSecondaryAction>
                <Checkbox />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem dense button className={classes.listItem}>
              <ListItemText>
                Category 1
              </ListItemText>
              <ListItemSecondaryAction>
                <Checkbox />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem dense button className={classes.listItem}>
              <ListItemText>
                Category 1
              </ListItemText>
              <ListItemSecondaryAction>
                <Checkbox />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <List>
            <Typography >
              Sort By Popularity
            </Typography>
            <ListItem dense button className={classes.listItem}>
              <ListItemText>
                Popularity
              </ListItemText>
              <ListItemSecondaryAction>
                <Checkbox />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Col>
        <Col xs={9} sm={9} md={9} lg={9}>
          <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',marginLeft:'1em'}}>
            {this.renderMockProducts()}
          </div>
            
        </Col>
      </Row>
      </Grid>
      
    );
  }
}
const mapStateToProps = (state) => ({
  allProducts: state.allProductsReducer
})

export default connect(mapStateToProps, {getAllProducts})(Products);