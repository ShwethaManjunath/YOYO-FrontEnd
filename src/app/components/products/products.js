// basic react component starting template
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import * as classes from './products.scss';
import Card from '../../shared-components/card/card';

let mockproducts = [{ "id": 8001, "title": "JBL Speakers 2.1", "retailer_id": 380, "points": 4957, "description": "evolve next-generation paradigms", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/126x224.png/ff4444/ffffff", "image": ["http://dummyimage.com/500x500.png/dddddd/000000"], "createdAt": "2018-04-29 15:06:51", "updatedAt": "2018-09-14 17:13:09" },
{ "id": 8002, "title": "Sony Speaker 5.1", "retailer_id": 866, "points": 5532, "description": "harness strategic action-items", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/114x190.png/cc0000/ffffff", "image": ["http://dummyimage.com/500x500.png/ff4444/ffffff"], "createdAt": "2018-02-28 19:34:09", "updatedAt": "2018-09-17 23:34:12" },
{ "id": 8003, "title": "Samsung Speaker 2.1", "retailer_id": 221, "points": 4477, "description": "innovate rich e-services", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/169x210.png/dddddd/000000", "image": ["http://dummyimage.com/500x500.png/ff4444/ffffff"], "createdAt": "2017-10-07 16:40:16", "updatedAt": "2018-09-02 23:16:29" },
{ "id": 8004, "title": "Samsung Speaker 2.1", "retailer_id": 706, "points": 6530, "description": "transition rich vortals", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/136x200.png/ff4444/ffffff", "image": ["http://dummyimage.com/500x500.png/ff4444/ffffff"], "createdAt": "2018-05-17 04:38:04", "updatedAt": "2018-09-04 13:05:05" },
{ "id": 8005, "title": "Samsung Speaker 2.1", "retailer_id": 336, "points": 14315, "description": "transition one-to-one infrastructures", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/156x108.png/5fa2dd/ffffff", "image": ["http://dummyimage.com/500x500.png/cc0000/ffffff"], "createdAt": "2018-02-24 04:57:27", "updatedAt": "2018-09-10 03:40:09" },
{ "id": 8006, "title": "Sony Speaker 5.1", "retailer_id": 67, "points": 231, "description": "envisioneer back-end communities", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/186x137.png/cc0000/ffffff", "image": ["http://dummyimage.com/500x500.png/ff4444/ffffff"], "createdAt": "2017-11-14 06:53:15", "updatedAt": "2018-09-17 03:46:44" },
{ "id": 8007, "title": "JBL Speakers 2.1", "retailer_id": 970, "points": 10503, "description": "drive interactive architectures", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/212x108.png/dddddd/000000", "image": ["http://dummyimage.com/500x500.png/cc0000/ffffff"], "createdAt": "2018-01-26 08:53:30", "updatedAt": "2018-09-12 10:11:39" },
{ "id": 8008, "title": "Samsung Speaker 2.1", "retailer_id": 667, "points": 10603, "description": "architect frictionless relationships", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/134x250.png/dddddd/000000", "image": ["http://dummyimage.com/500x500.png/dddddd/000000"], "createdAt": "2018-07-21 20:38:38", "updatedAt": "2018-08-31 22:53:06" },
{ "id": 8009, "title": "JBL Speakers 2.1", "retailer_id": 704, "points": 990, "description": "facilitate strategic web services", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/133x118.png/ff4444/ffffff", "image": ["http://dummyimage.com/500x500.png/dddddd/000000"], "createdAt": "2018-04-02 16:13:32", "updatedAt": "2018-09-19 20:24:01" },
{ "id": 8010, "title": "JBL Speakers 2.1", "retailer_id": 335, "points": 3393, "description": "transition virtual technologies", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/220x201.png/ff4444/ffffff", "image": ["http://dummyimage.com/500x500.png/ff4444/ffffff"], "createdAt": "2018-06-10 01:52:22", "updatedAt": "2018-09-05 05:56:42" },
{ "id": 8011, "title": "JBL Speakers 2.1", "retailer_id": 843, "points": 11615, "description": "reintermediate mission-critical infrastructures", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/216x183.png/dddddd/000000", "image": ["http://dummyimage.com/500x500.png/5fa2dd/ffffff"], "createdAt": "2017-10-08 21:16:21", "updatedAt": "2018-09-17 06:39:46" },
{ "id": 8012, "title": "JBL Speakers 2.1", "retailer_id": 228, "points": 2243, "description": "architect virtual solutions", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/201x186.png/ff4444/ffffff", "image": ["http://dummyimage.com/500x500.png/ff4444/ffffff"], "createdAt": "2018-06-06 20:10:18", "updatedAt": "2018-08-26 15:39:11" },
{ "id": 8013, "title": "Samsung Speaker 2.1", "retailer_id": 142, "points": 8140, "description": "productize sexy infrastructures", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/192x139.png/dddddd/000000", "image": ["http://dummyimage.com/500x500.png/dddddd/000000"], "createdAt": "2018-06-29 01:30:46", "updatedAt": "2018-09-04 12:48:41" },
{ "id": 8014, "title": "Samsung Speaker 2.1", "retailer_id": 692, "points": 1263, "description": "utilize integrated functionalities", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/122x172.png/dddddd/000000", "image": ["http://dummyimage.com/500x500.png/5fa2dd/ffffff"], "createdAt": "2018-04-13 22:35:00", "updatedAt": "2018-09-16 23:43:34" },
{ "id": 8015, "title": "Samsung Speaker 2.1", "retailer_id": 232, "points": 296, "description": "synergize 24/7 architectures", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/181x141.png/dddddd/000000", "image": ["http://dummyimage.com/500x500.png/cc0000/ffffff"], "createdAt": "2018-04-01 17:30:00", "updatedAt": "2018-08-25 21:11:06" },
{ "id": 8016, "title": "Samsung Speaker 2.1", "retailer_id": 466, "points": 9137, "description": "reinvent proactive schemas", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/160x125.png/dddddd/000000", "image": ["http://dummyimage.com/500x500.png/ff4444/ffffff"], "createdAt": "2018-02-20 10:16:13", "updatedAt": "2018-09-07 11:21:09" },
{ "id": 8017, "title": "Samsung Speaker 2.1", "retailer_id": 3, "points": 2641, "description": "recontextualize front-end markets", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/232x182.png/ff4444/ffffff", "image": ["http://dummyimage.com/500x500.png/ff4444/ffffff"], "createdAt": "2018-05-13 07:58:29", "updatedAt": "2018-09-04 16:45:43" },
{ "id": 8018, "title": "Sony Speaker 5.1", "retailer_id": 701, "points": 4020, "description": "mesh distributed functionalities", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/206x148.png/dddddd/000000", "image": ["http://dummyimage.com/500x500.png/5fa2dd/ffffff"], "createdAt": "2018-05-06 19:16:11", "updatedAt": "2018-08-30 05:28:30" },
{ "id": 8019, "title": "Samsung Speaker 2.1", "retailer_id": 610, "points": 701, "description": "target mission-critical bandwidth", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/225x214.png/dddddd/000000", "image": ["http://dummyimage.com/500x500.png/cc0000/ffffff"], "createdAt": "2018-04-28 15:59:23", "updatedAt": "2018-09-07 17:21:21" },
{ "id": 8020, "title": "Sony Speaker 5.1", "retailer_id": 387, "points": 2569, "description": "orchestrate compelling applications", "categoryId": 3, "avgRating": 0, "thumbnail": "http://dummyimage.com/229x143.png/5fa2dd/ffffff", "image": ["http://dummyimage.com/500x500.png/ff4444/ffffff"], "createdAt": "2018-05-28 15:15:50", "updatedAt": "2018-08-29 10:40:12" }];


class Products extends Component {

  renderMockProducts() {
    return mockproducts.map(prod => {
      return <Card key={prod.id}
        productName={prod.title}
        price={prod.points}
        description={prod.description}
        rating={prod.avgRating}
        photos={prod.image} />
    })
  }

  render() {
    return (
      <Row style={{ marginTop: '2%' }}>
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

          <Grid container spacing={40}>
            {this.renderMockProducts()}
          </Grid>
        </Col>
      </Row>
    );
  }
}

export default Products;