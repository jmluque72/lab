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
            error: null
        };
    }

    componentDidMount(){
        this.setState({ height: window.innerHeight})
    }

    login() {
        this.setState({error: null});
        const body = {
            email: this.state.email,
            password: this.state.pass
        }
        var response = fetch("https://4swa57ilx6.execute-api.sa-east-1.amazonaws.com/prod/login", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then((response) => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    this.setState({ error: response })
                }
            })
            .then((response) => {
                if (!response.error) {
                    const cookies = new Cookies();
                    cookies.set("username", this.state.email);
                    document.location.href='/Home'
                } else {
                    this.setState({error: response.error})
                }
            })
            .catch(error => {
                this.setState({ error: error })
            });
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
        const min = window.innerWidth >= 1000
    
        const height = window.innerHeight
        const email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        var disabledbutton = false;
        if (
            this.state.email === "" ||
            this.state.password === "" ||
            email.test(this.state.email) === false
        ) {
            disabledbutton = true
        }
        return (    
            <div>
                <div style={{display:'flex',height:this.state.height}}>
                    <div style={{display:'flex',justifyContent:'center',width:'100%',backgroundImage:`url(${Background})`,backgroundSize:'cover'}}>
                        <Grid item xs={11} sm={11} style={{ width:'90%',height:'90%',backgroundColor:'white',boxShadow:' 0 3px 6px 0 #000000',padding:'2%',marginTop:'2%',marginBottom:'2%',position:'relative'}}>
                            <img style={{width:118*0.7,height:84*0.7, position:'absolute',bottom:10,right:10}} src={logoNovo}></img>
                            <Grid container alignItems='space-around' direction='row' justify='center'  style={{ width:'100%'}}>
                              <Grid item  xs={12} sm={6} style={{ marginTop:50  ,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:colors.degrade_orange,borderRadius:20,paddingTop:40,paddingBottom:40}}>
                                  <div style={{ width:'90%',  display:'flex',flexDirection:'row'}}>
                                        <Grid item sm={4} xs={4} style={{ width:'35%',height:'100%',display:'flex',alignItems:'center'}}>
                                            <p style={{ fontFamily:'FrutigerBold',fontSize:18,color:'white',margin:0,lineHeight:1.2}}>Usuario (e-mail): </p>
                                        </Grid>
                                        <Grid item sm={10} xs={10} style={{ width:'65%',marginLeft:'5%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <input
                                            className='no-outline'
                                            type='email'
                                            placeholder={'ej.: ejemplo@gmail.com'}
                                            style={{marginLeft: 5, paddingTop: 5, paddingBottom: 5, width:'100%',height:'100%',borderStyle:'none',borderRadius:5}}
                                            onChange={(event)=> this.setState({ email : event.target.value})}>
                                            </input>
                                        </Grid>
                                  </div>
                                  <div style={{ width:'80%',  display:'flex',flexDirection:'row',marginTop:30}}>
                                        <Grid item sm={3} xs={4} style={{ width:'30%',height:'100%',display:'flex',alignItems:'center'}}>
                                            <p style={{ fontFamily:'FrutigerBold',fontSize:18,color:'white',margin:0}}>Contraseña:</p>
                                        </Grid>
                                        <Grid item sm={9} xs={8}  style={{ width:'75%',marginLeft:'5%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <input
                                             className='no-outline'
                                            type='password'
                                            style={{marginLeft: 5, paddingTop: 5, paddingBottom: 5, width:'100%',height:'100%',borderStyle:'none',borderRadius:5}}
                                            onChange={(event)=> this.setState({ pass : event.target.value})}>
                                            </input>
                                        </Grid>
                                        
                                  </div>
                                  <Grid item  xs={12} sm ={9}style={{ marginTop:10}}>
                                <Button disabled={disabledbutton} onClick={() => this.login() } style={{ paddingLeft:30,paddingRight:30,paddingTop:10,paddingBottom:10, display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:30,background:colors.gray,borderRadius:20,marginLeft:'auto'}}>
                                    <p style={{ fontFamily:'FrutigerBlack',fontSize:16,color:'white',margin:0}}>INGRESAR</p>
                                </Button>
                            </Grid>


                              </Grid>
                            
                              
                            </Grid>
                             <Grid item  xs={12} style={{ marginTop:10}}>
                                <div style={{ width:'85%',display:'flex',justifyContent:'center'}}>
                                    <p style={{ fontFamily:'FrutigerBlack',fontSize:18,color:colors.gray,margin:0}}>*Si aun no está registrado <a href={'/Register'} style={{textDecoration:'underline #4B5E5E',color:'#4B5E5E'}}>HAZ CLICK AQUI</a></p>
                                </div>
                                {this.state.error &&
                                    <div style={{ width:'85%',display:'flex',justifyContent:'center'}}>
                                        <p style={{marginTop: 20, color: 'red', fontFamily:'FrutigerBlack',fontSize:14}}>{this.state.error}</p>
                                    </div>
                                }
                            
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