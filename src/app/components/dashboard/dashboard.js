// basic react component starting template
import React, { Component } from 'react';
import * as classes from './dashboard.scss';
import Carousel from '../../shared-components/carousel/carousel';
import { Card } from '../../shared-components/card/card';
import {Grid , Col , Row} from 'react-flexbox-grid';

class DashBoard extends Component {
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
                            <h5>Recommended Products</h5>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div>
                            {this.renderRecommendedProducts}
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
                        <div>
                            {this.renderPopularProducts}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

    renderPopularProducts() {
        return <div>Popular Products will come here!</div>
    }

    renderRecommmendedProducts() {
        return <div>Recommended Products will come here!</div>
    }

}

export default DashBoard;