import React from "react";
import PropTypes from "prop-types";

import Header from './Header.js'
import Footer from './Footer.js'
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Button,Dialog} from '@material-ui/core';
import './Main.css'
import logoEvent from '../assets/logo_ozempic_circle.png'
import {colors} from '../utils'

class Evento extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            
        };
    }
    video(){
        alert('video')
    }
    render() {
        const min = window.innerWidth >= 1000
        return (
            <div style={{}}>
                    <Grid item xs={12} style={{marginLeft: 20, marginRight: 20}}>
                        <Grid container direction='row' style={{ width:'100%',height:'100%'}}>
                            <Grid item sm={6} xs={12} style={{marginTop: 50, display:'flex',justifyContent:min ? 'flex-end' : 'center',alignItems:'center'}}>
                                <div style={{width:'70%'}}>
                                    <img src={logoEvent} style={{ width:'100%',height:'auto'}}></img>
                                </div>
                            </Grid>
                            <Grid item sm={6} xs={12} style={{ marginTop: min ? '' : 20}}>
                                <Grid container direction='column' justify={ min ? 'center' :'' }alignItems={ min ? 'flex-start' : 'left' }style={{ height:'100%', marginRight: 30}}>
                                    <p style={{ fontFamily:'FrutigerBlack',fontSize:18,color:'black',textAlign:min ? 'left' : 'left',lineHeight:1,width:'60%',marginLeft: min ? '10%' : '', }}>¿Cómo ingresar a ver el evento? </p>
                                    <ol style={{ fontFamily:'FrutigerBlack',fontSize:14,color:colors.gray,marginLeft: min ? '10%' : '',lineHeight:1.4, paddingRight: 30 }}>
                                        <li style={{textAlign: 'left'}}>Ingresá a nuestro sitio web www.eventolanzamientonovo.com.ar  </li>
                                        <li style={{textAlign: 'left'}}>Deberás iniciar sesión con tu usuario ( email ) y contraseña que fue enviada cuando realizaste la inscripción</li>
                                        <li style={{textAlign: 'left'}}>Una vez iniciada la sesión, deberás hacer click en el botón que dice "Ingresar al evento"  que aparecerá cuando finalice la cuenta regresiva.</li>
                                    </ol>
                                    <div style={{ fontFamily:'FrutigerBlack',fontSize:14,color:colors.gray,marginLeft: min ? '10%' : '',lineHeight:1.4 }}>
                                        <p style={{textAlign: 'left', fontSize: 18, marginTop: 10, marginBottom: 10, color: 'black'}}> Algunos consejos</p>
                                        <p style={{textAlign: 'left'}}> Asegúrate de tener una conexión estable a internet.</p>
                                        <p style={{textAlign: 'left'}}> Recomendamos ver el evento en un dispositivo como una PC , notebook o tablet para una mejor visualización y en posición horizontal. </p>
                                    </div>
                                    <Button onClick={() => this.setState({ video : true})} style={{paddingLeft:20,paddingRight:20,paddingTop:8,paddingBottom:8,background:colors.degrade_orange,borderRadius:20,marginLeft: min ? '10%' : '' }}>
                                        <p style={{ fontFamily:'FrutigerBold',color:'white',fontSize:14,margin:0}}>VER TUTORIAL</p>
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
                            <iframe width='200%'  height="500" src="https://www.youtube.com/embed/cvV51XDPwp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture no-list" allowfullscreen></iframe>
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
