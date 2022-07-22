import React from "react";
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import './Main.css'
import Carousel from 'react-bootstrap/Carousel'
import image_1 from '../assets/CarouselHome/image_1.jpg'
import image_2 from '../assets/CarouselHome/image_2.jpg'

import Header from './Header.js';
import image_1_responsive from '../assets/CarouselHome/image_1_responsive.jpg'
import image_2_responsive from '../assets/CarouselHome/image_2_responsive.jpg'
import image_1_responsiveM from '../assets/CarouselHome/image_1.png'
import image_2_responsiveM from '../assets/CarouselHome/image_2.jpg'
import logoHeader from '../assets/logoHeader.png'
import Background from '../assets/backgroundZoonvetAllliso-01.jpg'
import BackgroundR from '../assets/backgroundZoonvetAllliso-01.jpg'

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
        const min = window.innerWidth >= 1000
        var back = Background;
        var img_1 = image_1;
        var img_2 = image_2;


        if (!min) {
            img_1 = image_1_responsive;
            img_2 = image_2_responsive;

            back = BackgroundR;

        }
const mid = (window.innerWidth > 1000 & window.innerWidth<1400)
console.log()

            return (
                <div style={{ width: '100%', minHeight: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex', padding: 0, }}>
                    <div style={{height:min?110:0}}>

                    </div>
                    <Grid item xs={12} sm={12} >
                        <Carousel style={{ zIndex: 10 , marginTop: min? 0: -60}}>
                            <Carousel.Item style={{}}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid item xs={12} sm={12}>
                                        <Grid container justify='center' alignItems='center'>
                                            <div style={{  }}>
                                                <img src={img_1} style={{width: min?'80%': '90%'}}></img>
                                            </div>

                                        </Grid>
                                    </Grid>

                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid item xs={12} sm={12}>
                                        <Grid container justify='center' alignItems='center'>
                                            <div style={{  }}>
                                                <img src={img_2} style={{width: min?'80%': '90%' }}></img>
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