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
import BackgroundF from '../assets/backgroundZoonvetAll.jpg'

import gracias from '../assets/Gracias.png'
import esperamos from '../assets/Esperamos volver a verte.png'
import Footer from './Footer.js'
import next from '../assets/next.png'
import prev from '../assets/prev.svg'
import { colors } from '../utils'



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

          const countDown = this.state;
        const min = window.innerWidth >= 1000

        const eventDate = new Date('08/07/22 06:00 PM');
        const finevento = new Date('08/08/22 02:00 AM');
        const todayDate = new Date()


            var display = "block"
            var margin = 0
            var vtimeTitle = 'timeTitle'
            var vtimeValue = 'timeValue'
            var vtimeValueB = 'timeValueB'
            var vtimeValueLabel = 'timeValueLabel'


        if (!min) {
            var vtimeTitle = 'timeTitleR'
            var vtimeValue = 'timeValueR'
            var vtimeValueB = 'timeValueRB'
            var vtimeValueLabel = 'timeValueLabelR'
        }

        if (window.scrollY > 0) {
           // display = "none";
        }

        var back = Background;
        var img_1 = image_1;
        var img_2 = image_2;


        if (!min) {
            img_1 = image_1_responsive;
            img_2 = image_2_responsive;

            back = BackgroundR;

        }
const mid = (window.innerWidth > 1000 & window.innerWidth<1400)
          if (todayDate > eventDate & todayDate > finevento )  {

                return (
                        <div style={{ width: '100%',  flexDirection: 'row',marginTop: min? 0 : 100, height:window.innerHeight,backgroundImage:`url(${BackgroundF})`,backgroundSize:'cover'}}>

                    <Grid item xs={12} sm={12} >
                                        <Grid container justify='center' alignItems='center'>
                                            <div style={{ marginTop: min?140: 70 }}>
                                                <img src={logoHeader} style={{width: min?'20%': '50%'}}></img>
                                            </div>

                                        </Grid>

                    </Grid>
                     <Grid item xs={12} sm={12} >
                                        <Grid container justify='center' alignItems='center'>
                                            <div style={{ marginTop: min?-18 : 30 }}>
                                            <img src={gracias} style={{width: min?'50%': '90%'}}></img>
                                            </div>

                                        </Grid>

                    </Grid>
                     <Grid item xs={12} sm={12} >
                                        <Grid container justify='center' alignItems='center'>
                                            <div style={{ marginTop: min? -25 :10 }}>
                                                  <img src={esperamos} style={{width: min?'60%': '80%'}}></img>
                                            </div>

                                        </Grid>
                    </Grid>
                    <Footer />
                </div>
                )


        } else {

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
}

SliderHome.propTypes = {
    classes: PropTypes.object.isRequired
};

export default SliderHome;