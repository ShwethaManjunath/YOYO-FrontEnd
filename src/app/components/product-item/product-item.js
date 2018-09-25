import React, { Component } from 'react';
import * as classes from './product-item.scss';
import { Grid, Col, Row } from 'react-flexbox-grid';
import mockProduct from '../../../assets/mock-product.jpg';
import { connect } from 'react-redux';
import { fetchProduct, addNewComment } from '../../actions';

class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ''
        };
    }

    componentDidMount() {
        this.props.fetchProduct();
    }

    purchaseItem(item) {
        // locally storing 
        localStorage.setItem('type', item.itemType);
        localStorage.setItem('product-id', item.itemId);

        // replace categories with payments route
        // once added
        this.props.history.push({
            pathname: '/categories',
            item: item
        });
    }

    handleComment(e) {
        this.setState({
            comment: e.target.value
        });
    }

    submitComment = () => {
        let comment = {
            id: Math.round(Math.random() * 1000),
            userName: 'Tarique',
            userComment: this.state.comment
        };

        this.setState({
            comment: ''
        });

        this.props.addNewComment(comment);
    }

    renderComments(item) {
        return (
            <div key={item.id}>
                <p className={classes.userName}>{item.userName}</p>
                <p className={classes.userComment}>{item.userComment}</p>
                <hr />
            </div>
        );
    }

    render() {
        if (!this.props.product) {
            return (
                <div>Fetching Product Details...</div>
            );
        }

        let { product } = this.props,
            discountRate = 0,
            discountPrice = 0;

        if (product.points > 1000) {
            discountRate = 10;
            discountPrice = Math.round(product.points - (product.points * (discountRate / 100)));
        }

        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} lg={12} md={12}>
                        <p className={classes.productTitle}>{product.title}</p>
                        <p style={{ marginBottom: '10px' }} className={classes.productSubtitle}>Category: Electronics</p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={12} lg={6} md={6}>
                        <img src={mockProduct} alt='productImage' className={classes.productImage} />
                    </Col>
                    <Col xs={12} lg={6} md={6}>
                        <div className={classes.productDetails}>
                            <p className={classes.priceTag}>Current Price: <span className={classes.primaryvalue}>{product.points} PTS</span></p>
                            <p className={classes.priceTag}>Original Price: <span className={classes.secondaryValue}>{discountPrice} PTS</span></p>
                            <p className={classes.priceSubTag}>Discount: {discountRate}%</p>
                            <p className={classes.ratings}>Ratings: {product.ratings}</p>
                            <button onClick={() => this.purchaseItem({
                                itemId: 3,
                                itemType: 'product'
                            })}>Buy Now</button>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={12} lg={12} md={12}>
                        <p style={{ marginTop: '10px' }} className={classes.productTitle}>DESCRIPTION</p>
                        <p style={{ marginBottom: '10px' }} className={classes.priceTag}>
                            {product.description}
                        </p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={12} lg={12} md={12} style={{ textAlign: 'left' }}>
                        <textarea className={classes.commentInput} placeholder={'Enter your comments here'}
                            onChange={(e) => this.handleComment(e)} value={this.state.comment}></textarea>
                        <br />
                        <button onClick={this.submitComment}>Add Comment</button>
                        {/* comments being rendered below */}
                        {product.comments.map((item) => this.renderComments(item))}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        product: state.product.item
    };
}

export default connect(mapStateToProps, { fetchProduct, addNewComment })(ProductItem);