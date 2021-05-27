import React from "react";
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import './Main.css'
import Carousel from 'react-bootstrap/Carousel'
import image_1 from '../assets/CarouselHome/image_1.jpg'
import image_2 from '../assets/CarouselHome/image_2.jpg'
import image_3 from '../assets/CarouselHome/image_3.jpg'

import image_1_responsive from '../assets/CarouselHome/image_1_responsive.jpg'
import image_2_responsive from '../assets/CarouselHome/image_2_responsive.jpg'
import image_3_responsive from '../assets/CarouselHome/image_3_responsive.jpg'



import logoHeader from '../assets/logo_ozempic_header.png'
import Footer from './Footer.js'
import next from '../assets/next.png'
import prev from '../assets/prev.png'

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
        const min = window.innerWidth >= 1000
        var img_1 = image_1;
        var img_2 = image_2;
        var img_3 = image_3;
        if (!min) {
            img_1 = image_1_responsive;
            img_2 = image_2_responsive;
            img_3 = image_3_responsive;

        }
        if (!min) {
            return (
                <div style={{ width: '100%', height: window.innerHeight, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <Grid item xs={12} sm={12}>
                        <Carousel style={{ zIndex: 10 }}>
                            <Carousel.Item>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid item xs={12} sm={12}>
                                        <Grid container justify='center' alignItems='center'>
                                            <div style={{ maxHeight: window.innerHeight }}>
                                                <img src={img_3} style={{ width: '100%', height: '100%' }}></img>
                                            </div>

                                        </Grid>
                                    </Grid>

                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid item xs={12} sm={12}>
                                        <Grid container justify='center' alignItems='center'>
                                            <div style={{ maxHeight: window.innerHeight }}>
                                                <img src={img_2} style={{marginTop: 50, width: '100%', height: '100%' }}></img>
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
        } else {
            return (
                <div style={{ width: '100%', height: window.innerHeight, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <Grid item xs={12} sm={12}>
                        <Carousel style={{ zIndex: 10 }}>
                            <Carousel.Item>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid item xs={12} sm={12}>
                                        <Grid container justify='center' alignItems='center'>
                                            <div style={{ maxHeight: window.innerHeight }}>
                                                <img src={img_1} style={{ width: '100%', height: '100%' }}></img>
                                            </div>

                                        </Grid>
                                    </Grid>

                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid item xs={12} sm={12}>
                                        <Grid container justify='center' alignItems='center'>
                                            <div style={{ maxHeight: window.innerHeight }}>
                                                <img src={img_2} style={{ width: '100%', height: '100%' }}></img>
                                            </div>

                                        </Grid>
                                    </Grid>

                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid item xs={12} sm={12}>
                                        <Grid container justify='center' alignItems='center'>
                                            <div style={{ maxHeight: window.innerHeight }}>
                                                <img src={img_3} style={{ width: '100%', height: '100%' }}></img>
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
}

SliderHome.propTypes = {
    classes: PropTypes.object.isRequired
};

export default SliderHome;
