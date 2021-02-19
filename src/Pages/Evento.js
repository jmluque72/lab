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
            <div>
                    <Grid item xs={12} style={{ position:'absolute',top:0,left:0,width:'100%',marginTop:100}}>
                        <Grid container direction='row' style={{ width:'100%',height:'100%'}}>
                            <Grid item sm={6} xs={12} style={{ display:'flex',justifyContent:min ? 'flex-end' : 'center',alignItems:'center'}}>
                                <div style={{width:'70%'}}>
                                    <img src={logoEvent} style={{ width:'100%',height:'auto'}}></img>
                                </div>
                            </Grid>
                            <Grid item sm={6} xs={12} style={{ }}>
                                <Grid container direction='column' justify={ min ? 'center' :'' }alignItems={ min ? 'flex-start' : 'center' }style={{ height:'100%'}}>
                                    <p style={{ fontFamily:'FrutigerBlack',fontSize:18,color:'black',textAlign:min ? 'left' : 'center',lineHeight:1,width:'60%',marginLeft: min ? '10%' : '', }}>¿Cómo ingresar a ver el evento? </p>
                                    <ol style={{ fontFamily:'FrutigerBlack',fontSize:14,color:colors.gray,marginLeft: min ? '10%' : '',lineHeight:1.4 }}>
                                        <li> Lorem ipsum dolor sit amet, consectetuer </li>
                                        <li> Lorem ipsum dolor sit amet, consectetuer </li>
                                        <li> Lorem ipsum dolor sit amet, consectetuer </li>
                                        <li> Lorem ipsum dolor sit amet, consectetuer </li>
                                    </ol>  
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
                        <div style={{ height:500}}>
                            <iframe  src="https://www.youtube.com/embed/wrAoswsvHwg" style={{ width:'100%',height:'100%'}} ></iframe>

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
