import React from "react";
import PropTypes from "prop-types";

import Header from './Header.js'
import Footer from './Footer.js'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button, Dialog} from '@material-ui/core';
import Background from '../assets/backgroundZoonvetAll.jpg'
import BackgroundR from '../assets/backgroun_responsive_all.jpg'

import {colors} from '../utils'
import verTutorial from '../assets/comoingresar.svg'
import './Main.css'


class Agenda extends React.Component {
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
            font1 = 14;
            font2 = 12;
            back = BackgroundR;
        }

        return (
            <div style={{marginTop: -120, flexDirection: 'row' ,backgroundImage:`url(${back})`,backgroundSize:'cover',}}>
                    <Grid item  style={{paddingLeft: 20, height:window.innerHeight,width:'100%'}}>
                        <Grid container direction='row' style={{ width:'100%',height:'100%'}}>
                            <Grid item sm={6} xs={12} style={{ }}>
                                <Grid container direction='column' justifyContent='center' alignItems={ min ? 'flex-end' : 'center' } style={{ height:'100%'}}>
                                    <p style={{ fontFamily:'Montserrat-Black',fontSize:min ? 72 : 45,color:'white',textAlign: min ? 'right' : 'center',lineHeight:1,marginLeft: min ? 'auto' : 'none',width:'100%'}}>CÓMO <br/> INGRESAR</p>
                                    <div style={{width:150,height:20,background:'#f0f0f0'}}></div>
                                </Grid>
                            </Grid>
                            <Grid item sm={6} xs={12} style={{marginLeft: margin, marginRight: margin,  marginTop: min ? 0 : -20}}>
                                <Grid container direction='column' justifyContent={ min ? 'center' :'' }alignItems={ min ? 'flex-start' : 'left' }style={{ height:'100%', marginRight: 30}}>
                                    <p style={{ fontFamily:'Montserrat-Regular',fontSize:font1,color:'white',textAlign:min ? 'left' : 'left',lineHeight:1,width:'60%',marginLeft: min ? '10%' : '', }}>El día del evento deberás seguir los siguientes pasos </p>
                                    <ol style={{ fontFamily:'Montserrat-Regular',fontSize:font2,color:'white',marginLeft: min ? '10%' : '',lineHeight:1.4, paddingRight: '10%' }}>
                                        <li style={{textAlign: 'left'}}>Ingresá a nuestro sitio web www.diadelveterinariozoovet.com.ar  </li>
                                        <li style={{textAlign: 'left'}}>Deberás iniciar sesión con tu usuario ( email ) y contraseña que fue enviada cuando realizaste la inscripción</li>
                                        <li style={{textAlign: 'left'}}>Una vez iniciada la sesión, deberás hacer click en el botón que dice "Ingresar al evento"  que aparecerá cuando finalice la cuenta regresiva.</li>
                                    </ol>
                                    <div style={{ fontFamily:'Montserrat-Regular',fontSize:font1,color:'white',marginLeft: min ? '10%' : '',lineHeight:1.4 }}>
                                        <p style={{fontFamily:'Montserrat-Regular', textAlign: 'left', fontSize: 16, marginTop: 10, marginBottom: 10, color: 'white'}}> Algunos consejos</p>
                                        <ul>
                                            <li style={{fontFamily:'Montserrat-Regular', textAlign: 'left', marginRight: 20}}>  Asegúrate de tener una conexión estable a internet.</li>
                                            <li style={{fontFamily:'Montserrat-Regular' ,textAlign: 'left', marginRight: 20}}>  Recomendamos ver el evento en un dispositivo como una PC , notebook o tablet para una mejor visualización y en posición horizontal. </li>
                                    </ul>
                                    </div>
                                <Button onClick={() => this.setState({ video: true })} style={{alignItems: 'flex-start'}}>
                                      <img style={{width: 180, height: 180*0.28 ,justifyContent: 'center'}} src={verTutorial} alt="Ver Mas" />
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


                        <iframe width="200%" height="500" src="https://www.youtube.com/embed/aXYX5vpwm6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                        </div>

                    </Dialog>
            </div>
        );
    }
}

Agenda.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Agenda;
