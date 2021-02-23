import React from "react";
import PropTypes from "prop-types";
import Header from './Header.js'
import {Grid, Button} from '@material-ui/core';
import Background from '../assets/background_event_program.png'
import LogoOzempicHeader from '../assets/logo_white.png'
import up_white from '../assets/up_white.png'
import {colors} from '../utils' 
import './Main.css'

import { w3cwebsocket as W3CWebSocket } from "websocket";

var client = new W3CWebSocket('wss://n7bj7eh9le.execute-api.sa-east-1.amazonaws.com/production');

class Vivo extends React.Component {
    
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }
    componentDidMount() {

        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {
            console.log(message);
        };   
        client.onclose = () => {
            console.log('WebSocket Client CLOSE');
            client = new W3CWebSocket('wss://n7bj7eh9le.execute-api.sa-east-1.amazonaws.com/production');
        } 

    }


    upRotate(){
        if(!this.state.idiomaButton){
            return `rotate(180deg)`
        }else{
            return `rotate(0deg)`
        }
    }
    pdf(){
        alert('PDF AGENDA')
    }

    render() {
        const min = window.innerWidth >= 1000
        return (
            <div style={{width: '100%', flexDirection: 'row'}}>
                    <img style={{width: '100%',height:'100%',position:'fixed',top:0,left:0}} src={Background} />
                    <Grid item xs={12} style={{ height:window.innerHeight-100,position:'absolute',top:0,left:0,width:'100%',paddingBottom:50}}>
                        <Grid container direction='column'>
                            <Grid xs={12} style={{ padding:10}}></Grid>
                                <Grid container direction='row' justify='space-between' style={{ height:70,paddingRight:15,paddingLeft:15}}>
                                    <div style={{ height:'100%',width:200}}>
                                        <img src={LogoOzempicHeader} style={{ width:'100%',height:'auto'}}></img>
                                    </div>
                                    <div  style={{position:'relative', height:'100%',flexDirection:'column',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <div onClick={() => this.setState({ idiomaButton : !this.state.idiomaButton})} style={{ cursor:'pointer',width:100,height:25,borderRadius:5,backgroundColor:colors.gray,borderStyle:'solid',borderWidth:1,borderColor:'white',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{ color:'white',fontSize:14,margin:0,fontFamily:'FrutigerLight',letterSpacing:1}}>IDIOMA</p>
                                            <img src={up_white} style={{ height:'40%',marginLeft:5,transform:this.upRotate()}}></img>
                                        </div>
                                        {this.state.idiomaButton && (
                                        <div style={{ position:'absolute',top:50,width:120,marginRight:20,height:50,marginTop:5,backgroundColor:colors.gray,borderStyle:'solid',borderWidth:1,borderColor:'white',display:'flex',flexDirection:'column',boxShadow:' 0 3px 6px 0 #000000'}}>
                                            <div onClick={() => this.setState({ idiomaSelect : true})} style={{cursor:'pointer',backgroundColor:this.state.idiomaSelect ? colors.gray : '#a1a1a1' , width:'100%',height:'50%',display:'flex',justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:1,borderColor:'white'}}>
                                                <p style={{ color:'white',fontSize:14,margin:0,fontFamily:'FrutigerLight',fontWeight:!this.state.idiomaSelect ? '' : 'bold',letterSpacing:1}}>ESPAÑOL</p>
                                            </div>
                                            <div onClick={() => this.setState({ idiomaSelect : false})} style={{cursor:'pointer', backgroundColor:!this.state.idiomaSelect ? colors.gray : '#a1a1a1' ,width:'100%',height:'50%',display:'flex',justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:1,borderColor:'white'}}>
                                                <p style={{ color:'white',fontSize:14,margin:0,fontFamily:'FrutigerLight',fontWeight:this.state.idiomaSelect ? '' : 'bold',letterSpacing:1}}>INGLES</p>
                                            </div>
                                        </div>
                                        )}
                                        
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid xs={12} style={{ width:'100%',padding:10}}>
                                <Grid container justify='center' alignItems='center'>
                                    <div style={{ width:'90%',height:400,padding:2,backgroundColor:'white'}}>
                                        {/* <iframe  src="https://www.youtube.com/embed/wrAoswsvHwg" style={{ width:'100%',height:'100%'}} ></iframe> */}
                                    </div>

                                </Grid>
                            </Grid>
                            <Grid xs={12} style={{ width:'100%',marginTop:10,marginBottom:100}}>
                                <Grid container justify='center' alignItems='center'>
                                    <Grid xs={10} style={{ width:'80%',backgroundColor:colors.gray,borderRadius:10,borderWidth:2,borderStyle:'solid',borderColor:'white'}}>
                                        <Grid container style={{ display:'flex ',flexDirection:'row'}}>
                                            <Grid sm={6} xs={12} style={{ height:80}}>
                                                <div style={{ width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                    <p style={{ fontFamily:'FrutigerBold',color:"white",margin:0,fontSize:30,lineHeight:1}}>¿La pregunta?</p>
                                                </div>
                                            </Grid>
                                            <Grid sm={3} xs={12} style={{ height:80}}>
                                                <div style={{ width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                    {/* NORMAL */}
                                                    <Button style={{ height:'50%',width:'70%',background:colors.degrade_orange,borderWidth:1,borderStyle:'solid',borderColor:'white',display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
                                                        <p style={{ fontFamily:'FrutigerBold',color:"white",margin:0,fontSize:20}}>VERDADERO</p>
                                                    </Button>    
                                                    {/* <Button style={{ height:'50%',width:'70%',background:colors.degrade_orange,borderWidth:1,borderStyle:'solid',borderColor:'white',display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
                                                        <p style={{ fontFamily:'FrutigerBold',color:"white",margin:0,fontSize:20}}>VERDADERO</p>
                                                        <div style={{ height:24,width:24,position:'absolute',top:8,right:-10,backgroundColor:'red',display:'flex',justifyContent:'center',alignItems:'center'}}></div>
                                                    </Button>    */}
                                                </div>
                                            </Grid>
                                            <Grid sm={3} xs={12} style={{ height:80}}>
                                                <div style={{ width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                    <Button style={{ height:'50%',width:'70%',background:colors.degrade_orange,borderWidth:1,borderStyle:'solid',borderColor:'white',display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
                                                        <p style={{ fontFamily:'FrutigerBold',color:"white",margin:0,fontSize:20}}>FALSO</p>
                                                    </Button>   
                                                    {/* METERLE COLOR Y LOGO */}
                                                    {/* <Button style={{ height:'50%',width:'70%',background:colors.degrade_orange,borderWidth:1,borderStyle:'solid',borderColor:'white',display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
                                                        <p style={{ fontFamily:'FrutigerBold',color:"white",margin:0,fontSize:20}}>FALSO</p>
                                                        <div style={{ height:24,width:24,position:'absolute',top:8,right:-10,backgroundColor:'red',display:'flex',justifyContent:'center',alignItems:'center'}}></div>
                                                    </Button>    */}
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        
                    </Grid>
            </div>
        );
    }
}

Vivo.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Vivo;
