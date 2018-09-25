// basic react component starting template
import React, { Component } from 'react';
import * as classes from './dashboard.scss';
import Carousel from '../../shared-components/carousel/carousel';
import Card from '../../shared-components/card/card';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { getAllProducts } from '../../actions/getAllProducts';

class DashBoard extends Component {

    renderRecommendedProducts() {
        return this.props.allProducts.splice(0,4).map(card => {
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
        
        return this.props.allProducts.splice(0,4).map(card => {
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

    componentWillMount() {
        this.props.getAllProducts();
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



const mapStateToProps = (state) => ({
    allProducts: state.allProductsReducer
})

export default connect(mapStateToProps, {getAllProducts})(DashBoard);