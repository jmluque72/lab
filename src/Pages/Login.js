import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button} from '@material-ui/core';
import Background from '../assets/background_event_program.png'
import logoEvent from '../assets/logo_ozempic_circle.png'
import logoHeader from '../assets/logo_ozempic_header.png'
import logoNovo from '../assets/logo_novo.png'
import { colors } from '../utils'
import LogoOzempicHeader from '../assets/logo_ozempic_header.png'
import { Cookies } from 'react-cookie';

class Login extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }
    typeClick(){
        const email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(email.test(this.state.email)){
            const body = {
                email: this.state.email,
                password : this.state.pass
            }
        }else{
            const cookies = new Cookies();
            cookies.set("username", this.state.email);
            document.location.href='/Home'
        }
       
    }
    render() {
        
        const height = window.innerHeight
        return (    
            <div>
                <div style={{display:'flex',height:window.innerHeight}}>
                    <img style={{width: '100%',height:height,position:'fixed',top:0,left:0}} src={Background} />
                    <div style={{display:'flex',justifyContent:'center',width:'100%',height:'100%'}}>
                        <Grid item xs={11} sm={11} style={{ width:'90%',height:'90%',backgroundColor:'white',boxShadow:' 0 3px 6px 0 #000000',padding:'2%',marginTop:'2%',marginBottom:'2%',position:'relative'}}>
                            <img style={{width:118*0.7,height:84*0.7, position:'absolute',bottom:10,right:10}} src={logoNovo}></img>
                            <Grid container alignItems='space-around' direction='row' justify='center'  style={{ width:'100%'}}>
                              <Grid item  xs={12} style={{ height:120,marginTop:30}}> 
                                  <div style={{ width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                      <div style={{ width:350}}>
                                        <img style={{width:'100%'}} src={LogoOzempicHeader}></img>
                                      </div>
                                  </div>
                              </Grid>
                              <Grid item  xs={12} sm={6} style={{ marginTop:50  ,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:colors.degrade_orange,borderRadius:20,paddingTop:20,paddingBottom:20}}>
                                  <div style={{ width:'80%', height:30, display:'flex',flexDirection:'row'}}>
                                        <Grid item sm={4} xs={4} style={{ width:'30%',height:'100%',display:'flex',alignItems:'center'}}>
                                            <p style={{ fontFamily:'FrutigerBold',fontSize:18,color:'white',margin:0,lineHeight:1.2}}>Usuario (e-mail): </p>
                                        </Grid>
                                        <Grid item sm={8} xs={8} style={{ width:'65%',marginLeft:'5%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <input
                                            className='no-outline'
                                            type='email'
                                            placeholder={'ej.: ejemplo@gmail.com'}
                                            style={{width:'100%',height:'100%',borderStyle:'none',borderRadius:5}}
                                            onChange={(event)=> this.setState({ email : event.target.value})}>
                                            </input>
                                        </Grid>
                                  </div>
                                  <div style={{ width:'80%', height:30, display:'flex',flexDirection:'row',marginTop:30}}>
                                        <Grid item sm={3} xs={4} style={{ width:'20%',height:'100%',display:'flex',alignItems:'center'}}>
                                            <p style={{ fontFamily:'FrutigerBold',fontSize:18,color:'white',margin:0}}>Contraseña:</p>
                                        </Grid>
                                        <Grid item sm={9} xs={8}  style={{ width:'75%',marginLeft:'5%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <input
                                             className='no-outline'
                                            type='password'
                                            style={{width:'100%',height:'100%',borderStyle:'none',borderRadius:5}}
                                            onChange={(event)=> this.setState({ pass : event.target.value})}>
                                            </input>
                                        </Grid>
                                  </div>
                                  <Button onClick={() => this.typeClick() } style={{ paddingLeft:20,paddingRight:20,paddingTop:5,paddingBottom:5, display:'flex',flexDirection:'row',marginTop:30,backgroundColor:colors.gray,borderRadius:20}}>
                                        <p style={{ fontFamily:'FrutigerBlack',fontSize:16,color:'white',margin:0}}>INGRESAR</p>
                                  </Button>
                              </Grid>
                              <Grid item  xs={12} style={{ marginTop:10}}>
                                <div style={{ width:'85%',display:'flex',justifyContent:'center'}}>
                                    <p style={{ fontFamily:'FrutigerBlack',fontSize:18,color:colors.gray,margin:0}}>*Si aun no está registrado <a href={'/Register'} style={{textDecoration:'underline #4B5E5E',color:'#4B5E5E'}}>HAZ CLICK AQUI</a></p>
                                </div>
                              </Grid>
                            </Grid>
                           
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Login;