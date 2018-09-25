// basic react component starting template
import React, { Component } from 'react';
import { ProductCard } from 'react-ui-cards';
import './card.css';

class Card extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <ProductCard
                    photos={this.props.photos}
                    price={this.props.price}
                    productName={this.props.productName}
                    description={this.props.description}
                    rating={this.props.rating}
                />
            </div>
        );
    }
}

export default Card;