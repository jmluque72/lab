import React from "react";
import PropTypes from "prop-types";

import Header from './Header.js';
import { Grid, Button } from '@material-ui/core';
import Background from '../assets/background_fiesta.jpg'
import BackgroundR from '../assets/backgroun_responsive_all.jpg'

import imgComoserParte from '../assets/imgComoserParte-01.png'
import saber_mas from '../assets/vermas.svg'

import './Main.css'

class Agenda extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
        };
    }
    pdf() {
        window.open('https://publiceventsenjoy.s3.amazonaws.com/saber+mas-pdf.pdf', '_blank');
    }

    render() {

        const min = window.innerWidth >= 1000

        var back = Background;
        var justify = "center";
        var top = -70;
        if (!min) {
            back = BackgroundR;
            justify = "start";
            top = -90
        }
            return (
                 <div style={{width: window.innerWidth, flexDirection: 'row',marginTop: -140}}>
                <Grid item sm={12} xs={12} md={12} lg={12}  style={{ width: window.innerWidth, height:window.innerHeight , backgroundImage:`url(${back})`,backgroundSize:'cover'}}>
                        <Grid container direction='row' style={{height:'100%'}}>
                        <Grid item sm={12} xs={12} md={6} style={{ }}>
                              <Grid container direction='column' justifyContent='space-around' alignItems={ min ? 'flex-end' : 'center' } style={{ width:'100%', height:'100%'}}>
                                  <img style={{ marginLeft: min? '-20%' : '6%',marginTop: min? '' : '5%', width: min? 650 :380, height: min? 300: 190,justifyContent: min? 'center' : 'center' }} src={imgComoserParte} ></img>
                                </Grid>
                            </Grid>
                               <Grid item sm={12} xs={12} md={6} style={{}}>
                                <Grid container direction='column' justifyContent={justify}  alignItems={min ? 'flex-start' : 'center'} style={{ height: '100%'}}>
                                    <div style={{ marginTop: min? 0 : -100,width:'80%',display:'flex',alignItems:'center',flexDirection:'column',marginLeft:'2%'}}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'space-around', width: '100%' }}>
                                            <div style={{alignItems: 'start', width: '100%', height: '40%', display: 'flex', flexDirection: 'column' }}>
                                                <p style={{ fontFamily: 'Montserrat-Regular', fontSize:  20   , color: 'white' }}>Diversión asegurada con la conducción de José María Listorti, Denise Dumas y Cristian Bazán; La frescura de Coki Ramirez, el humor de Cacho Buenaventura y la música de Ulises Bueno.</p>
                                                <div style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                                    <Button onClick={() => this.pdf()} style={{alignItems: min? 'start' : 'center', marginLeft: min? 0 : '30%'}}>
                                                        <img style={{ textAlign: min? 'left' : 'center', width: 180, height: 150 * 0.40 }} src={saber_mas} alt="Ver Mas" />
                                                    </Button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Header state='agenda'></Header>
                </div>
            );

    }
}

Agenda.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Agenda;