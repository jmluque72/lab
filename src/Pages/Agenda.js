import React from "react";
import PropTypes from "prop-types";

import Header from './Header.js';
import { Grid, Button } from '@material-ui/core';
import Background from '../assets/background_fiesta.jpg'
import BackgroundR from '../assets/backgroun_responsive_all.jpg'

import imgComoserParte from '../assets/imgComoserParte-01.png'
import saber_mas from '../assets/vermas.svg'
import Footer from './Footer.js'
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

        if (!min) {
            back = BackgroundR;
            justify = "start";

        }
const h = window.innerHeight
            return (
                <div style={{ width: window.innerWidth, flexDirection: 'row' }}>

            <Grid item sm={12} xs={12} md={12} lg={12}  style={{ width: window.innerWidth,height: h , backgroundImage:`url(${back})`,backgroundSize:'cover', marginRight: 0}}>
                        <Grid container direction='row' style={{height:'100%', width: '100%'}}>
                        <Grid item sm={12} xs={12} md={6} style={{ }}>
                              <Grid container direction='column' justifyContent='space-around' alignItems={ min ? 'flex-end' : 'center' } style={{ width:'100%', height:'100%'}}>
                                  <img style={{ marginLeft: min? '-20%' : '',marginTop: min? '' : '-20%', width: min? 800 :300, height: min? 300: 130,justifyContent: min? 'center' : 'center' }} src={imgComoserParte} ></img>
                                </Grid>
                            </Grid>
                               <Grid item sm={12} xs={12} md={6} style={{}}>
                                <Grid container direction='column' justifyContent={'center'}  alignItems={min ? 'flex-start' : 'center'} style={{ height: '100%'}}>
                                    <div style={{ marginTop: min? 0 : -300,width:'80%',display:'flex',alignItems:'center',flexDirection:'column',marginLeft:'2%'}}>

                                            <div style={{alignItems: min ?'start' : 'center', width: '100%', height: '40%', display: 'flex', flexDirection: 'column' }}>



                                                <p className="titleForm" style={{padding: 10,color: 'white', fontSize:25, textAlign: 'center' }}>¡Un año más que nos juntamos a celebrar tu día!
                                                Juegos, música, magia, premios y muchas sorpresas más. Te lo vas a perder?</p>

                                                    <Button onClick={() => this.pdf()} style={{padding: min? 0: 0, alignItems: min? 'center' : 'center',justifyContent: min? 'center' : 'center'}}>
                                                        <img style={{ textAlign: min? 'left' : 'center', width: 180, height: 150 * 0.40 }} src={saber_mas} alt="Ver Mas" />
                                                    </Button>
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