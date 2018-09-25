// basic react component starting template
import React, { Component } from 'react';
import * as classes from './dashboard.scss';
import Carousel from '../../shared-components/carousel/carousel';
import Card from '../../shared-components/card/card';
import { Grid, Col, Row } from 'react-flexbox-grid';
let mockDataCards = [
    {
        "id": 1,
        "title": "Sony LED Smart TV",
        "retailer_id": 180,
        "points": 11631,
        "description": "expedite virtual ROI",
        "categoryId": 1,
        "avgRating": 0,
        "thumbnail": ["https://dummyimage.com/152x246.png/5fa2dd/ffffff"],
        "image": ["https://dummyimage.com/500x500.png/cc0000/ffffff"],
        "createdAt": "2017-10-28 23:11:00",
        "updatedAt": "2018-09-21 04:39:59"
    },
    {
        "id": 2,
        "title": "Sony LED Smart TV",
        "retailer_id": 830,
        "points": 1396,
        "description": "expedite granular bandwidth",
        "categoryId": 1,
        "avgRating": 0,
        "thumbnail": ["https://dummyimage.com/160x245.png/ff4444/ffffff"],
        "image": ["https://dummyimage.com/500x500.png/dddddd/000000"],
        "createdAt": "2018-05-31 03:56:09",
        "updatedAt": "2018-08-25 02:07:14"
    },
    {
        "id": 3,
        "title": "VU LED Smart TV",
        "retailer_id": 664,
        "points": 5086,
        "description": "repurpose granular methodologies",
        "categoryId": 1,
        "avgRating": 0,
        "thumbnail": ["https://dummyimage.com/207x234.png/5fa2dd/ffffff"],
        "image":[ "https://dummyimage.com/500x500.png/cc0000/ffffff"],
        "createdAt": "2018-04-19 13:54:26",
        "updatedAt": "2018-09-06 18:50:25"
    },
    {
        "id": 4,
        "title": "VU LED Smart TV",
        "retailer_id": 694,
        "points": 6446,
        "description": "morph e-business solutions",
        "categoryId": 1,
        "avgRating": 0,
        "thumbnail": ["https://dummyimage.com/232x199.png/5fa2dd/ffffff"],
        "image": ["https://dummyimage.com/500x500.png/5fa2dd/ffffff"],
        "createdAt": "2017-10-23 04:25:29",
        "updatedAt": "2018-08-26 20:07:02"
    }
]


class DashBoard extends Component {

    renderRecommendedProducts() {
        return mockDataCards.map(card => {
            return <Card
                key={card.id}
                productName={card.title}
                price={card.points}
                description={card.description}
                rating={card.avgRating}
                photos={card.image}
            />
        });
    }

    renderPopularProducts() {
        return mockDataCards.map(card => {
            return <Card
                key={card.id}
                productName={card.title}
                price={card.points}
                description={card.description}
                rating={card.avgRating}
                photos={card.image}
            />
        });
    }

    render() {
        return (
            <div className={classes.Body}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} >
                        <Carousel />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div>
                            <h4>Recommended Products</h4>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className={classes.products}>
                            {this.renderRecommendedProducts()}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div>
                            <h5>Popular Products</h5>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className={classes.products}>
                            {this.renderPopularProducts()}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default DashBoard;