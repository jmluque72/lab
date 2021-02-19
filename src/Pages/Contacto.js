import React from "react";
import PropTypes from "prop-types";

import Header from './Header.js'
import Footer from './Footer.js'
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Button} from '@material-ui/core';
import './Main.css'
import Background from '../assets/background_contact.png'


class Contacto extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
        };
    }

    render() {
        const min = window.innerWidth >= 1000
        return (
            <div style={{ width: '100%', flexDirection: 'row'}}>
                    <img style={{width: '100%',height:'100%'}} src={Background} />
                    <Grid item xs={12} style={{ height:window.innerHeight-150,position:'absolute',top:0,left:0,width:'100%',marginTop:100}}>
                        <Grid container direction='row' style={{ width:'100%',height:'100%'}}>
                            <Grid item sm={5} style={{ }}>

                            </Grid>
                            <Grid item sm={7} xs={12} style={{ }}>
                                <Grid container direction='column' justify='center' alignItems= 'flex-start' style={{ height:'100%'}}>
                                    <div style={{ height:'70%',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                                        <div style={{ display:'flex',flexDirection:'column'}}>
                                            <p style={{ fontFamily:'FrutigerBlack',fontSize:min ? 72 : 52,color:'white',margin:0}}>CONTACTANOS</p>
                                            <div style={{width:150,height:20,backgroundColor:'white'}}></div>
                                        </div>
                                        <div style={{ display:'flex',flexDirection:'column',marginLeft:'25%',marginTop:30}}>
                                            <p style={{ fontFamily:'FrutigerLight',fontSize:14,color:'white'}}>xxxxxxxxxx@xxxx.com</p>
                                            <p style={{ fontFamily:'FrutigerLight',fontSize:14,color:'white'}}>xxxxxxxxxx@xxxx.com</p>
                                            <p style={{ fontFamily:'FrutigerLight',fontSize:14,color:'white',marginTop:30}}>T: +54 (0351) xxx xxxx</p>
                                            <p style={{ fontFamily:'FrutigerLight',fontSize:14,color:'white'}}>T: +54 (0351) xxx xxxx</p>
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
