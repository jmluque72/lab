import React from "react";
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import './Main.css'
import Carousel from 'react-bootstrap/Carousel'
import image_1 from '../assets/CarouselHome/image_1.png'
import logoHeader from '../assets/logo_ozempic_header.png'
import Footer from './Footer.js'

class SliderHome extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }

    render() {
        return (
            <div style={{ width:'100%',height:window.innerHeight,marginTop:80}}>
                <Grid item xs={12} sm={12} style={{ height: window.innerHeight}}>
                    <Carousel style={{ zIndex:10}}>
                        <Carousel.Item>
                                <div style={{display:'flex',flexDirection:'row'}}>
                                    <Grid item xs={1} sm={1} ></Grid>
                                    <Grid item xs={6} sm={6}>
                                        <Grid container justify='center' alignItems='center'>
                                            <div style={{ maxHeight:window.innerHeight}}>
                                                <img src={image_1} style={{ width:'100%',height:'100%'}}></img>
                                            </div>
                                            
                                        </Grid>
                                    </Grid>  
                                    <Grid item xs={4} sm={4} >
                                        <Grid container direction='column' justify='center' alignItems='center'  style={{ height:'100%'}}>
                                            <img src={logoHeader} style={{ width:'100%',height:'auto'}}></img>
                                        </Grid>
                                    </Grid>  
                                    <Grid item xs={1} sm={1} ></Grid>
                                </div>
                        </Carousel.Item>
    
                        <Carousel.Item>
                                <div style={{display:'flex',flexDirection:'row'}}>
                                    <Grid item xs={1} sm={1} ></Grid>
                                    <Grid item xs={6} sm={6}>
                                        <Grid container justify='center' alignItems='center'>
                                            <div style={{ maxHeight:420}}>
                                                <img src={image_1} style={{ width:'100%',height:'100%'}}></img>

                                            </div>
                                            
                                        </Grid>
                                    </Grid>  
                                    <Grid item xs={4} sm={4} >
                                        <Grid container direction='column' justify='center' alignItems='center'  style={{ height:'100%'}}>
                                            <img src={logoHeader} style={{ width:'100%',height:'auto'}}></img>
                                        </Grid>
                                    </Grid>  
                                    <Grid item xs={1} sm={1} ></Grid>
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
