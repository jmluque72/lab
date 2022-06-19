import React from "react";
import PropTypes from "prop-types";

import Header from './Header.js';
import { Grid, Button } from '@material-ui/core';
import Background from '../assets/background_fiesta.jpg'
import BackgroundR from '../assets/backgroun_responsive_all.jpg'


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

        //var paddingRight = 50;
        //var marginTop = -200;
        //var widthB = 250;
        //if (!min) {

        //    paddingRight = 0;
        //    marginTop = -50;
        //    widthB = 170;
        //}
        if (min) {

            return (
                <div style={{ width: '100%', flexDirection: 'row' }}>
                    <Grid item xs={12} style={{ marginTop: -70, height: window.innerHeight, backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                        <Grid container direction='row' style={{ width: '100%', height: '100%' }}>
                            <Grid item sm={6} xs={12} style={{}}>
                                <Grid container direction='column' justifyContent='center' alignItems={min ? 'flex-end' : 'center'} style={{ height: '100%' }}>
                                    <p style={{ fontFamily: 'Montserrat-Black', fontSize: min ? 70 : 45, color: 'white', textAlign: min ? 'right' : 'center', lineHeight: 1, marginLeft: min ? 'auto' : 'none', width: '80%' }}>NUESTRA<br /> FIESTA</p>
                                    <div style={{ width: 150, height: 20, backgroundColor: 'white' }}></div>
                                </Grid>
                            </Grid>
                            <Grid item sm={6} xs={12} style={{}}>
                                <Grid container direction='column' justifyContent='center' alignItems={min ? 'flex-start' : 'center'} style={{ height: '100%' }}>
                                    <div style={{ width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: '5%' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'space-around', width: '100%' }}>
                                            <div style={{alignItems: 'start', width: '100%', height: '40%', display: 'flex', flexDirection: 'column' }}>
                                                <p style={{ fontFamily: 'Montserrat-Regular', fontSize: 20, color: 'white' }}>Diversión asegurada con la conducción de José María Listorti, Denise Dumas y Cristian Bazán; La frescura de Coki Ramirez, el humor de Cacho Buenaventura y la música de Ulises Bueno.</p>
                                                <div style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                                    <Button onClick={() => this.pdf()} style={{alignItems: 'start'}}>
                                                        <img style={{ textAlign: 'left', width: 180, height: 150 * 0.40 }} src={saber_mas} alt="Ver Mas" />
                                                    </Button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Header state='consultas'></Header>
                </div>
            );
        } else {
            return (
                <div style={{ width: '100%', flexDirection: 'row' }}>
                    <Grid item xs={12} style={{ marginTop: -70, height: window.innerHeight, backgroundImage: `url(${BackgroundR})`, backgroundSize: 'cover' }}>
                        <Grid container direction='row' style={{ width: '100%', height: '80%' }}>
                            <Grid item sm={6} xs={12} style={{}}>
                                <Grid container direction='column' justifyContent='center' alignItems={min ? 'flex-end' : 'center'} style={{ height: '100%' }}>
                                    <p style={{ marginTop:30, fontFamily: 'Montserrat-Black', fontSize: min ? 70 : 45, color: 'white', textAlign: min ? 'right' : 'center', lineHeight: 1, marginLeft: min ? 'auto' : 'none', width: '80%' }}>NUESTRA<br /> FIESTA</p>
                                    <div style={{ width: 150, height: 20, backgroundColor: 'white' }}></div>
                                </Grid>
                            </Grid>
                            <Grid item sm={6} xs={12} style={{}}>
                                <Grid container direction='column' justifyContent='center' alignItems={min ? 'flex-start' : 'center'} style={{ height: '100%' }}>
                                    <div style={{ width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'space-around', width: '100%' }}>
                                            <div style={{alignItems: 'start', width: '100%', height: '50%', display: 'flex', flexDirection: 'column' }}>
                                                <p style={{ marginTop: -20, fontFamily: 'Montserrat-Regular', fontSize: 20, color: 'white' }}>Diversión asegurada con la conducción de José María Listorti, Denise Dumas y Cristian Bazán; La frescura de Coki Ramirez, el humor de Cacho Buenaventura y la música de Ulises Bueno.</p>
                                                <div style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                                    <Button onClick={() => this.pdf()} style={{alignItems: 'flex-start'}}>
                                                          <img style={{marginLeft:70,width: 180, height: 150*0.28 }} src={saber_mas} alt="Ver Mas" />
                                                    </Button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Header state='consultas'></Header>
                </div>
            );        }
    }
}

Agenda.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Agenda;
