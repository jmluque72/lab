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
            name: "",
            email: "",
            men: "",
            message: ""
        };
    }

    send() {
        this.setState({error: null, message: ""});
        var body = {
            name : this.state.name,
            email: this.state.email,
            comment: this.state.men
         }
        var response = fetch("https://4swa57ilx6.execute-api.sa-east-1.amazonaws.com/prod/comments", {
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
                    this.setState({
                        name: "",
                        email: "",
                        men: "",
                        message: "Su consulta se envio correctamente"
                    })
                } else {
                    this.setState({error: response.error})
                }
            })
            .catch(error => {
                this.setState({ error: error })
            });
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
        var buttondisabled = false;
        const email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (this.state.name === '' ||
            this.state.email === '' || 
            this.state.men === '' ||
            email.test(this.state.email) === false
            ) {
                buttondisabled = true;
            }
        return (
            <div style={{width: '100%', flexDirection: 'row'}}>
                    <Grid item xs={12} style={{height:window.innerHeight,backgroundImage:`url(${Background})`,backgroundSize:'cover'}}>
                        <Grid container direction='row' style={{ width:'100%',height:'100%'}}>
                            <Grid item sm={6} xs={12} style={{ }}>
                                <Grid container direction='column' justify='center' alignItems={ min ? 'flex-end' : 'center' }style={{ height:'100%'}}>
                                    <p style={{ fontFamily:'FrutigerBlack',fontSize:min ? 70 : 45,color:'white',textAlign: min ? 'right' : 'center',lineHeight:1,marginLeft: min ? 'auto' : 'none',width:'80%'}}>DEJANOS TU CONSULTA</p>
                                    <div style={{width:150,height:20,backgroundColor:'white'}}></div>
                                    <p style={{ fontFamily:'FrutigerLight',fontSize:16,color:'white',textAlign: min ? 'right' : 'center',lineHeight:1,marginLeft: min ? 'auto' : 'none',width:'70%',marginTop:30}}>Si tenes alguna pregunta o te gustaría recibir información sobre Ozempic <span style={{fontSize: 14,   verticalAlign: 'top'}}>®️</span>, dejanos tu consulta.</p>
                                </Grid>
                            </Grid>
                            <Grid item sm={6} xs={12} style={{ }}>
                                <Grid container direction='column' justify='center' alignItems={ min ? 'flex-start' : 'center' }style={{ height:'100%'}}>
                                    <div style={{ width:'60%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginLeft:'5%'}}>
                                        <div style={{ display:'flex',flexDirection:'column',alignItems:'space-around',height:60,width:'100%'}}>
                                            <div style={{ width:'100%',height:'40%',display:'flex'}}>
                                                <p style={{ fontFamily:'FrutigerLight',fontSize:14,color:'white'}}>Nombre y Apellido</p>
                                            </div>
                                            <div style={{ width:'100%',height:'50%',display:'flex',backgroundColor:'white'}}>
                                                <input 
                                                    type='text' 
                                                    className='no-outline'
                                                    value={this.state.name}
                                                    onChange={(event) => this.setState({ name : event.target.value})}
                                                    style={{ marginLeft: 5, width:'100%',height:'100%',borderStyle:'none'}}
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
                                                    value={this.state.email}
                                                    className='no-outline'
                                                    onChange={(event) => this.setState({ email : event.target.value})}
                                                    style={{marginLeft: 5, width:'100%',height:'100%',borderStyle:'none'}}
                                                ></input>
                                            </div>
                                        </div>
                                        <div style={{ display:'flex',flexDirection:'column',alignItems:'space-around',height:120,width:'100%',marginTop:5}}>
                                            <div style={{ width:'100%',height:'20%',display:'flex'}}>
                                                <p style={{ fontFamily:'FrutigerLight',fontSize:14,color:'white'}}>Comentario</p>
                                            </div>
                                            <div style={{ width:'100%',height:'80%',display:'flex',backgroundColor:'white'}}>
                                                <textarea 
                                                    className='no-outline'
                                                    type='text' 
                                                    value={this.state.men}
                                                    onChange={(event) => this.setState({ men : event.target.value})}
                                                    style={{marginLeft: 5, width:'100%',height:'100%',borderStyle:'none'}}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.message && 
                                        <p style={{paddingLeft:40, marginTop: 20, color: 'white', textAlign: 'center', fontFamily:'FrutigerBold',fontSize:18}}>{this.state.message}</p>
                                    }
                                    <Button disabled={buttondisabled} onClick={() => this.send()} style={{paddingLeft:20,paddingRight:20,backgroundColor:'white',borderRadius:20,marginLeft: min ? '5%' : '',marginTop:20}}>
                                        <p style={{ fontFamily:'FrutigerBold',fontSize:15,margin:0}}>ENVIAR</p>
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
