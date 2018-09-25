// basic react component starting template
import React, { Component } from 'react';
import Slider from "react-slick";

class Carousel extends Component {
    render() {
        var settings = {
            dots: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true
        };
        return (
            <div style={{overflow: 'hidden'}}>
            <Slider {...settings} >
                {this.renderImages()}
            </Slider>
            </div>
        );
    }

    renderImages() {
        let images = [
            {
                id: 1,
                'src': 'images/Book-My-Show-Banner.png',
                'alt': 'book my show'
            },
            {
                id: 12,
                'src': 'images/Lakme.png',
                'alt': 'Lakme'
            },
            {
                id: 3,
                'src': 'images/Myntra-2.png',
                'alt': 'myntra'
            },
            {
                id: 4,
                'src': 'images/netflix-tools.jpg',
                'alt': 'Netflix'
            }
        ]
        return images.map(image => {
            return <div><img key={image.id} style={{width:'100%',height: '350px'}} src={image.src} alt={image.alt} /></div>
        });
    }
}

export default Carousel;