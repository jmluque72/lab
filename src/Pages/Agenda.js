import React from "react";
import PropTypes from "prop-types";

import Header from './Header.js'
import Footer from './Footer.js'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button} from '@material-ui/core';
import Background from '../assets/background_event_program.png'

import './Main.css'


class Agenda extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }
    pdf(){
        alert('PDF AGENDA')
    }

    render() {
        const min = window.innerWidth >= 1000
        return (
            <div style={{flexDirection: 'row',height:window.innerHeight}}>
                    <img style={{width: '100%',height:'100%'}} src={Background} />
                    <Grid item xs={12} style={{ height:window.innerHeight-100,position:'absolute',top:0,left:0,width:'100%',marginTop:100}}>
                        <Grid container direction='row' style={{ width:'100%',height:'100%'}}>
                            <Grid item sm={6} xs={12} style={{ }}>
                                <Grid container direction='column' justify='center' alignItems={ min ? 'flex-end' : 'center' }style={{ height:'100%'}}>
                                    <p style={{ fontFamily:'FrutigerBlack',fontSize:70,color:'white',textAlign: min ? 'right' : 'center',lineHeight:1,marginLeft: min ? 'auto' : 'none',width:'80%'}}>TITULO DE AGENDA</p>
                                    <div style={{width:150,height:20,backgroundColor:'white'}}></div>
                                </Grid>
                            </Grid>
                            <Grid item sm={6} xs={12} style={{ }}>
                                <Grid container direction='column' justify='center' alignItems={ min ? 'flex-start' : 'center' }style={{ height:'100%'}}>
                                    <p style={{ fontFamily:'FrutigerBold',fontSize:16,color:'white',textAlign:'left',lineHeight:1,width:'60%',marginLeft: min ? '10%' : '' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate </p>
                                    <Button onClick={() => this.pdf()} style={{paddingLeft:20,paddingRight:20,paddingTop:8,paddingBottom:8,backgroundColor:'white',borderRadius:20,marginLeft: min ? '10%' : '' }}>
                                        <p style={{ fontFamily:'FrutigerBold',fontSize:14,margin:0}}>VER PROGRAMA </p>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
            </div>
        );
    }
}

Agenda.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Agenda;
