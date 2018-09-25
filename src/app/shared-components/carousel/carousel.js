// basic react component starting template
import React, { Component } from 'react';
import Slider from "react-slick";

class Carousel extends Component {
    render() {
        var settings = {
            dots: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true
        };
        return (
            <Slider {...settings} >
                {this.renderImages()}
            </Slider>
        );
    }

    renderImages() {
        let images = [
            {
                'src': 'images/Book-My-Show-Banner.png',
                'alt': 'book my show'
            },
            {
                'src': 'images/Lakme.png',
                'alt': 'Lakme'
            },
            {
                'src': 'images/Myntra-2.png',
                'alt': 'myntra'
            },
            {
                'src': 'images/netflix-tools.jpg',
                'alt': 'Netflix'
            }
        ]
        return images.map(image => {
            return <div><img style={{width:'100%',height: '350px'}} src={image.src} alt={image.alt} /></div>
        });
    }
}

export default Carousel;