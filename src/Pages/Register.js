import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button} from '@material-ui/core';
import Background from '../assets/background_event_program.png'
import logoEvent from '../assets/logo_ozempic_circle.png'
import logoHeader from '../assets/logo_ozempic_header.png'
import logoNovo from '../assets/logo_novo.png'
import { colors } from '../utils'

class Register extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }
    register(){
        const body = {
            name: this.state.name,
            mail: this.state.mail,
            city: this.state.city,
            esp : this.state.esp,
            pal : this.state.pal
        }
        document.location.href='/Home'
    }
    render() {
        const height = window.innerHeight
        return (    
            <div>
                <div style={{display:'flex'}}>
                    <img style={{width: '100%',height:height,position:'fixed',top:0,left:0}} src={Background} />
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <Grid item xs={11} sm={11} style={{ backgroundColor:'white',boxShadow:' 0 3px 6px 0 #000000',padding:'5%',marginTop:'2%',marginBottom:'2%',position:'relative'}}>
                            <img style={{width:118*0.7,height:84*0.7, position:'absolute',bottom:10,right:10}} src={logoNovo}></img>
                            <Grid container direction='row'>
                                <Grid item xs={12} sm={6} style={{ height:'100%',paddingRight:'5%',paddingLeft:'5%'}} >
                                    <Grid container justify='center' alignItems='center' style={{width:'100%',height:'100%'}}>
                                        <div style={{ display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
                                            <img style={{width:'100%'}} src={logoEvent} />
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} sm={6} xs={12} style={{ height:'100%'}} >
                                    <Grid container direction='row' justify='center' style={{ marginTop:20}}>
                                        <img style={{width: '70%',height:'auto'}} src={logoHeader} /> 
                                        <Grid item xs={11} sm={11} xs={11}>
                                            <Grid container direction='column'>
                                                <div style={{ marginTop:10}}>
                                                    <p style={{ fontFamily:'FrutigerBlack',fontSize:26,color:colors.gray,margin:0}}>REGISTRATE</p>
                                                </div>
                                                <div style={{backgroundColor:colors.gray, height:10,width:50}} ></div>
                                                <div style={{width:'100%',height:40,display:'flex',flexDirection:'row',marginTop:10,alignItems:'center'}}>
                                                    <Grid item xs={5} sm={3}>
                                                        <p style={{ fontFamily:'FrutigerBold',fontSize:12,color:'#465658',margin:0}}>Nombre y Apellido</p>
                                                    </Grid>
                                                    <Grid item xs={7} sm={9} style={{height:30,borderRadius:8 ,borderColor:colors.gray,borderWidth:1,borderStyle:'solid',}}>
                                                        <input 
                                                            style={{ backgroundColor:'transparent',
                                                            width:'100%',
                                                            height:'100%',
                                                            border:'none',}}
                                                            type='text'
                                                            className='no-outline'
                                                            onChange={(event) => this.setState({ name : event.target.value})}
                                                            >
                                                        </input>
                                                    </Grid>
                                                </div>
                                                <div style={{width:'100%',height:40,display:'flex',flexDirection:'row',marginTop:0,alignItems:'center'}}>
                                                    <Grid  item xs={2} sm={1}>
                                                        <p style={{ fontFamily:'FrutigerBold',fontSize:12,color:'#465658',margin:0}}>Mail</p>
                                                    </Grid>
                                                    <Grid item xs={10} sm={11}  style={{ height:30,borderRadius:8,borderColor:colors.gray,borderWidth:1,borderStyle:'solid',}}>
                                                        <input 
                                                            style={{ backgroundColor:'transparent',
                                                            width:'100%',
                                                            height:'100%',
                                                            border:'none',}}
                                                            className='no-outline'
                                                            type='email'
                                                            onChange={(event) => this.setState({ mail : event.target.value})}
                                                            >
                                                        </input>
                                                    </Grid>
                                                </div>
                                                <div style={{width:'100%',height:40,display:'flex',flexDirection:'row',marginTop:0,alignItems:'center'}}>
                                                    <Grid item xs={2} sm={'auto'}>
                                                        <p style={{ fontFamily:'FrutigerBold',fontSize:12,color:'#465658',margin:0,marginRight:20}}>Ciudad</p>
                                                    </Grid>
                                                    <Grid item xs={10} sm={12} style={{ height:30,borderRadius:8,borderColor:colors.gray,borderWidth:1,borderStyle:'solid',}}>
                                                        <input 
                                                            style={{ backgroundColor:'transparent',
                                                            width:'100%',
                                                            height:'100%',
                                                            border:'none',}}
                                                            className='no-outline'
                                                            type='text'
                                                            onChange={(event) => this.setState({ city : event.target.value})}
                                                            >
                                                        </input>
                                                    </Grid>
                                                </div>
                                                <div style={{width:'100%',height:40,display:'flex',flexDirection:'row',marginTop:0,alignItems:'center'}}>
                                                    <Grid item xs={3} sm={2}>
                                                        <p style={{ fontFamily:'FrutigerBold',fontSize:12,color:'#465658',margin:0}}>Especialidad</p>
                                                    </Grid>
                                                    <Grid item xs={9} sm={10} style={{ height:30,borderRadius:8,borderColor:colors.gray,borderWidth:1,borderStyle:'solid',}}>
                                                        <input 
                                                            style={{ backgroundColor:'transparent',
                                                            width:'100%',
                                                            height:'100%',
                                                            border:'none',}}
                                                            className='no-outline'
                                                            type='text'
                                                            onChange={(event) => this.setState({ esp : event.target.value})}
                                                            >
                                                        </input>
                                                    </Grid>
                                                </div>
                                                <div style={{width:'100%',display:'flex',flexDirection:'column',marginTop:5,alignItems:'center'}}>
                                                    <Grid style={{ width:'100%'}}>
                                                        <p style={{ fontFamily:'FrutigerBold',fontSize:12,color:'#465658',margin:0}}>En una palabra, te invitamos a dejarnos tu expectava por el lanzamiento de Ozempic® en Argentina</p>
                                                    </Grid>
                                                    <Grid style={{ width:'100%',height:30,marginTop:5,borderRadius:8,borderColor:colors.gray,borderWidth:1,borderStyle:'solid',}}>
                                                        <input 
                                                            style={{ backgroundColor:'transparent',
                                                            width:'100%',
                                                            height:'100%',
                                                            border:'none',
                                                            }}
                                                            type='mail'
                                                            className='no-outline'
                                                            onChange={(event) => this.setState({ pal : event.target.value})}
                                                            >
                                                        </input>
                                                    </Grid>
                                                </div>
                                                <Button onClick={() => this.register()} style={{ marginLeft:'auto',padding:5,paddingLeft:20,paddingRight:20,display:'flex',justifyContent:'center',alignItems:'center',background:colors.degrade_orange,borderRadius:20,marginTop:20,marginBottom:50}}>
                                                    <p style={{ fontFamily:'FrutigerBold',fontSize:16,color:'white',margin:0}}>REGISTRARSE</p>
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Register;