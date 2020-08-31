import React from 'react';
import './Video.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import image1 from './img/1.jpg';
import image2 from './img/2.jpg';
import image4 from './img/4.jpg';
import image5 from './img/5.jpg';
import image6 from './img/6.jpg';
import image7 from './img/7.jpg';
import image8 from './img/8.jpg';
import image9 from './img/9.jpg';
import image10 from './img/10.jpg';


export default function Video() {

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return (
            <div className="Pics">
                <div className="slides">
                    <AliceCarousel style={slides} autoPlayInterval={3000} autoPlay={true} buttonsDisabled={true} dotsDisabled={true}>
                        <img src={image1} className="sliderimg" alt=""/>
                        <img src={image2} className="sliderimg" alt=""/>
                        <img src={image4} className="sliderimg" alt=""/>
                        <img src={image5} className="sliderimg" alt=""/>
                        <img src={image6} className="sliderimg" alt=""/>
                        <img src={image7} className="sliderimg" alt=""/>
                        <img src={image8} className="sliderimg" alt=""/>
                        <img src={image9} className="sliderimg" alt=""/>
                        <img src={image10} className="sliderimg" alt=""/>
                    </AliceCarousel>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className="Video">
                <div className="video-background">
                <div className="video-foreground">
                    <iframe title="ACE PRODCUCTIONS" src="https://www.youtube.com/embed/videoseries?listType=playlist&list=PLWrn5jlz67mR_llJQoDoTen8rfaKFa6BV&vq=hd1080&controls=0&showinfo=0&rel=0&loop=1&autoplay=1&mute=1" frameBorder="0" allowFullScreen></iframe>
                </div>
                </div>
            </div>
            );
        }
    }





const slides = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    height: 'auto',
}



