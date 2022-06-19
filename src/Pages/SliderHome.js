import React from "react";
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import './Main.css'
import Carousel from 'react-bootstrap/Carousel'
import image_1 from '../assets/CarouselHome/image_1.jpg'
import image_2 from '../assets/CarouselHome/image_1.jpg'
import image_3 from '../assets/CarouselHome/image_1.jpg'
import image_4 from '../assets/CarouselHome/image_1.jpg'

import image_1_responsive from '../assets/CarouselHome/image_1_responsive.jpg'
import image_2_responsive from '../assets/CarouselHome/image_1_responsive.jpg'
import image_3_responsive from '../assets/CarouselHome/image_1_responsive.jpg'
import image_4_responsive from '../assets/CarouselHome/image_1_responsive.jpg'
import logoHeader from '../assets/logoHeader.png'

import Footer from './Footer.js'
import next from '../assets/next.png'
import prev from '../assets/prev.svg'

class SliderHome extends React.Component {

    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }

    next = () => {

    }

    prev = () => {

    }

    render() {
        return (
            <div style={{ width:'100%', height: window.innerHeight, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <Grid item xs={12} sm={12}>
                    <Carousel style={{ zIndex:10}}>
                        <Carousel.Item>
                                <div style={{display:'flex',flexDirection:'row'}}>
                                    <Grid item xs={12} sm={12}>
                                        <Grid container justifyContent='center' alignItems='center'>
                                            <div style={{  maxHeight:window.innerHeight}}>
                                                <img src={image_1} style={{ width:'100%',height:'100%'}}></img>
                                            </div>

                                        </Grid>
                                    </Grid>

                                </div>
                        </Carousel.Item>
                        <Carousel.Item>
                                <div style={{display:'flex',flexDirection:'row'}}>
                                    <Grid item xs={12} sm={12}>
                                        <Grid container justifyContent='center' alignItems='center'>
                                            <div style={{  maxHeight:window.innerHeight}}>
                                                <img src={image_2} style={{ width:'100%',height:'100%'}}></img>
                                            </div>

                                        </Grid>
                                    </Grid>

                                </div>
                        </Carousel.Item>
                        <Carousel.Item>
                                <div style={{display:'flex',flexDirection:'row'}}>
                                    <Grid item xs={12} sm={12}>
                                        <Grid container justifyContent='center' alignItems='center'>
                                            <div style={{  maxHeight:window.innerHeight}}>
                                                <img src={image_3} style={{ width:'100%',height:'100%'}}></img>
                                            </div>

                                        </Grid>
                                    </Grid>

                                </div>
                        </Carousel.Item>
                    </Carousel>
                </Grid>
                <Footer />
            </div>
        );
    }
}

SliderHome.propTypes = {
    classes: PropTypes.object.isRequired
};

export default SliderHome;
