import React from "react";
import PropTypes from "prop-types";

import Header from './Header.js'
import Footer from './Footer.js'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button} from '@material-ui/core';
import './Main.css'
import Background from '../assets/background_consulta.png'


class Consulta extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }
    typeClick(){
        var body = {
            name : this.state.name,
            email: this.state.email,
            men: this.state.men
         }
    }
    render() {
        const min = window.innerWidth >= 1000
        return (
            <div style={{width: '100%', flexDirection: 'row'}}>
                    <img style={{width: '100%', height:'100%'}} src={Background} />
                    <Grid item xs={12} style={{height:window.innerHeight-100,position:'absolute',top:0,left:0}}>
                        <Grid container direction='row' style={{ width:'100%',height:'100%'}}>
                            <Grid item sm={7} xs={12} style={{ }}>
                                <Grid container direction='column' justify='center' alignItems={ min ? 'flex-end' : 'center' }style={{ height:'100%'}}>
                                    <p style={{ fontFamily:'FrutigerBlack',fontSize:70,color:'white',textAlign: min ? 'right' : 'center',lineHeight:1,marginLeft: min ? 'auto' : 'none',width:'80%'}}>DEJANOS TU CONSULTA</p>
                                    <div style={{width:150,height:20,backgroundColor:'white'}}></div>
                                    <p style={{ fontFamily:'FrutigerLight',fontSize:16,color:'white',textAlign: min ? 'right' : 'center',lineHeight:1,marginLeft: min ? 'auto' : 'none',width:'70%',marginTop:30}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                                </Grid>
                            </Grid>
                            <Grid item sm={5} xs={12} style={{ }}>
                                <Grid container direction='column' justify='center' alignItems={ min ? 'flex-start' : 'center' }style={{ height:'100%'}}>
                                    <div style={{ width:'60%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginLeft:'5%'}}>
                                        <div style={{ display:'flex',flexDirection:'column',alignItems:'space-around',height:60,width:'100%'}}>
                                            <div style={{ width:'100%',height:'40%',display:'flex'}}>
                                                <p style={{ fontFamily:'FrutigerLight',fontSize:14,color:'white'}}>Nombre y Apellido</p>
                                            </div>
                                            <div style={{ width:'100%',height:'50%',display:'flex',backgroundColor:'white'}}>
                                                <input 
                                                    type='text' 
                                                    onChange={(event) => this.setState({ name : event.target.value})}
                                                    style={{ width:'100%',height:'100%',borderStyle:'none'}}
                                                ></input>
                                            </div>
                                        </div>
                                        <div style={{ display:'flex',flexDirection:'column',alignItems:'space-around',height:55,width:'100%',marginTop:5}}>
                                            <div style={{ width:'100%',height:'40%',display:'flex'}}>
                                                <p style={{ fontFamily:'FrutigerLight',fontSize:14,color:'white'}}>E-mail</p>
                                            </div>
                                            <div style={{ width:'100%',height:'50%',display:'flex',backgroundColor:'white'}}>
                                                <input 
                                                    type='email' 
                                                    onChange={(event) => this.setState({ email : event.target.value})}
                                                    style={{ width:'100%',height:'100%',borderStyle:'none'}}
                                                ></input>
                                            </div>
                                        </div>
                                        <div style={{ display:'flex',flexDirection:'column',alignItems:'space-around',height:120,width:'100%',marginTop:5}}>
                                            <div style={{ width:'100%',height:'20%',display:'flex'}}>
                                                <p style={{ fontFamily:'FrutigerLight',fontSize:14,color:'white'}}>Mensaje</p>
                                            </div>
                                            <div style={{ width:'100%',height:'80%',display:'flex',backgroundColor:'white'}}>
                                                <textarea 
                                                    type='email' 
                                                    onChange={(event) => this.setState({ men : event.target.value})}
                                                    style={{ width:'100%',height:'100%',borderStyle:'none'}}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <Button onClick={() => this.typeClick()} style={{paddingLeft:20,paddingRight:20,paddingTop:8,paddingBottom:8,backgroundColor:'white',borderRadius:20,marginLeft: min ? '5%' : '',marginTop:20}}>
                                        <p style={{ fontFamily:'FrutigerBold',fontSize:14,margin:0}}>ENVIAR</p>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                <Header state='consultas'></Header>
            </div>
        );
    }
}

Consulta.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Consulta;
