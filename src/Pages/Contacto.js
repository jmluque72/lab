import React from "react";
import PropTypes from "prop-types";

import Header from './Header.js'
import Footer from './Footer.js'
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Button} from '@material-ui/core';
import './Main.css'
import Background from '../assets/background_contact.png'
import BackgroundMin from '../assets/background_consulta.png'


import { colors } from "../utils/index.js";


class Contacto extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
        };
    }

    render() {
        const min = window.innerWidth >= 1000
        var background = Background;
        if (!min) {
            background = BackgroundMin;
        }

        return (
            <div style={{ width: '100%',  flexDirection: 'row', height:window.innerHeight-100,backgroundImage:`url(${background})`,backgroundSize:'cover'}}>
                    <Grid item xs={12} style={{ height:'100%',width:'100%'}}>
                        <Grid container direction='row' style={{ width:'100%',height:'100%'}}>
                            <Grid item sm={5} style={{ }}>

                            </Grid>
                            <Grid item sm={7} xs={12} style={{ }}>
                                <Grid container direction='column' justify='center' alignItems= 'flex-start' style={{ height:'100%'}}>
                                    <div style={{ height:'70%',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                                        <div style={{ display:'flex',flexDirection:'column'}}>
                                            <p style={{ fontFamily:'FrutigerBlack',fontSize:min ? 72 : 48,color:'white',margin:0}}>CONTACTANOS</p>
                                            <div style={{width:150,height:20,backgroundColor:'white'}}></div>
                                        </div>
                                        <div style={{ display:'flex',flexDirection:'column',marginTop:30}}>
                                            <p style={{ fontFamily:'FrutigerBold',fontSize:16,color:'white', textAlign: 'left'}}>www.novonordisk.com.ar</p>
                                            <p style={{ fontFamily:'FrutigerBold',fontSize:16,color:'white', textAlign: 'left', marginTop:30}}>Servicio de Atención al Cliente 0-800-345-NOVO (6686)</p>
                                            <p style={{ fontFamily:'FrutigerBold',fontSize:16,color:'white', textAlign: 'left'}}>Mail: atencioncli@novonordisk.com</p>
                                        </div>
                                        <div style={{ display:'flex',flexDirection:'column',marginLeft:'25%'}}>

                                        </div>
                                    </div>


                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                <Header state='contactos'></Header>
            </div>
        );
    }
}

Contacto.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Contacto;
