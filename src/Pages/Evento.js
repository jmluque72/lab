import React from "react";
import PropTypes from "prop-types";

import Header from './Header.js'
import Footer from './Footer.js'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button, Dialog} from '@material-ui/core';
import Background from '../assets/backgroundZoonvetAll.jpg'
import BackgroundR from '../assets/backgroun_responsive_all.jpg'
import imgComoserParte from '../assets/imgSerParte-01.png'
import {colors} from '../utils'
import verTutorial from '../assets/comoingresar.svg'
import './Main.css'



class Evento extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }
    pdf(){
        window.open('https://resourceslanzamiento.s3-sa-east-1.amazonaws.com/OZEMPIC_+LA+GRAN+OPORTUNIDAD+EN+DIABETES+TIPO+2.pdf', '_blank');

    }
    render() {
        const min = window.innerWidth >= 1000
        var back = Background;
        var margin = 0
        var font1 = 18
        var font2 = 16
        if (!min) {
            margin = 10
            font1 = 16;
            font2 = 14;
            back = BackgroundR;
        }

        return (
             <div style={{width: window.innerWidth, flexDirection: 'row',marginTop: -140}}>
                <Grid item sm={12} xs={12} md={12} lg={12}  style={{ width: window.innerWidth, height:window.innerHeight , backgroundImage:`url(${back})`,backgroundSize:'cover'}}>
                        <Grid container direction='row' style={{height:'100%'}}>
                        <Grid item sm={12} xs={12} md={6} style={{ }}>
                              <Grid container direction='column' justifyContent='space-around' alignItems={ min ? 'flex-end' : 'center' } style={{ width:'100%', height:'100%'}}>
                                  <img style={{ marginLeft: min? '-2%' : '6%',marginTop: min? '' : '5%', width: min? 650 :380, height: min? 300: 190,justifyContent: min? 'center' : 'center' }} src={imgComoserParte} ></img>
                                </Grid>
                            </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={6} style={{ padding:-20, width: window.innerWidth, marginLeft: min? '-10%' : '3%', marginRight: margin,  marginTop: min ? 30 : 0, height:'100%'}}>
                                <Grid container direction='column' justifyContent={ min ? 'center' :'' } alignItems={ min ? 'flex-start' : 'left' }style={{height:'100%', marginRight: min? 30 : 0, marginTop: min? 0 : 0}}>
                                    <p style={{ fontFamily:'Montserrat-Regular',fontSize:font1,color:'white',textAlign:min ? 'left' : 'left',lineHeight:1,marginLeft: min ? '20%' : '2%', }}>El día del evento deberás seguir los siguientes pasos </p>
                                    <ol style={{ fontFamily:'Montserrat-Regular',fontSize:font2,color:'white',marginLeft: min ? '10%' : '',lineHeight:1.4, paddingRight: '5%' }}>
                                        <li style={{textAlign: 'left'}}>Ingresá a nuestro sitio web www.diadelveterinariozoovet.com.ar  </li>
                                        <li style={{textAlign: 'left'}}>Deberás iniciar sesión con tu usuario ( email ) y contraseña que fue enviada cuando realizaste la inscripción</li>
                                        <li style={{textAlign: 'left'}}>Una vez iniciada la sesión, deberás hacer click en el botón que dice "Ingresar al evento"  que aparecerá cuando finalice la cuenta regresiva.</li>
                                    </ol>

                                    <p style={{ fontFamily:'Montserrat-Regular',fontSize:font1,color:'white',textAlign:min ? 'left' : 'left',lineHeight:1,marginLeft: min ? '10%' : '2%', }}> Algunos consejos</p>
                                    <ol style={{ fontFamily:'Montserrat-Regular',fontSize:font2,color:'white',marginLeft: min ? '10%' : '',lineHeight:1.4, paddingRight: '5%' }}>
                                        <li style={{fontFamily:'Montserrat-Regular', textAlign: 'left', marginRight: 0}}>  Asegúrate de tener una conexión estable a internet.</li>
                                        <li style={{fontFamily:'Montserrat-Regular' ,textAlign: 'left', marginRight: 0}}>  Recomendamos ver el evento en un dispositivo como una PC , notebook o tablet para una mejor visualización y en posición horizontal. </li>
                                    </ol>

                                <Button onClick={() => this.setState({ video: true })} style={{ marginLeft: min? 100 : 100}}>
                                      <img style={{width: 200, height: 200*0.28 ,justifyContent: min? 'center' : 'flex-start' }} src={verTutorial} alt="Ver Mas" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Dialog
                        open={this.state.video}
                        fullWidth
                        maxWidth="md"
                        aria-labelledby="max-width-dialog-title"
                        onBackdropClick={() => this.setState({ video: false})}
                        PaperProps={{style: {backgroundColor:'transparent'}}}
                    >
                        <div style={{ height:500, width:'50%'}}>

                        <iframe width="200%" height="500" src="https://youtu.be/9c0MDJhapHE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        </div>
                </Dialog>
                      <Header state='evento'></Header>
            </div>
        );
    }
}

Evento.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Evento;
