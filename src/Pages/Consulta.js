import React from "react";
import PropTypes from "prop-types";

import Header from './Header.js'
import Footer from './Footer.js'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button} from '@material-ui/core';
import './Main.css'
import Background from '../assets/backgroundZoonvetAll.jpg'
import BackgroundR from '../assets/backgroun_responsive_all.jpg'

import enviar from '../assets/enviar.svg'


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
        var response = fetch("https://pom2lkx5ei.execute-api.us-east-1.amazonaws.com/production/comments", {
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
        var back = Background;
        var justify = "center";
        var top = -70;
        if (!min) {
            back = BackgroundR;
            justify = "start";
            top = -90
        }
        return (
            <div style={{width: '100%', flexDirection: 'row'}}>
                    <Grid item xs={12} style={{marginTop: top,height:window.innerHeight,backgroundImage:`url(${back})`,backgroundSize:'cover'}}>
                        <Grid container direction='row' style={{ width:'100%',height:'100%'}}>
                            <Grid item sm={6} xs={12} style={{ }}>
                                <Grid container direction='column' justifyContent='center' alignItems={ min ? 'flex-end' : 'center' } style={{ height:'100%'}}>
                                    <p style={{ fontFamily:'Montserrat-Black',fontSize:min ? 70 : 45,color:'white',textAlign: min ? 'right' : 'center',lineHeight:1,marginLeft: min ? 'auto' : 'none',width:'80%'}}>DEJANOS TU CONSULTA</p>
                                    <div style={{width:150,height:20,backgroundColor:'white'}}></div>
                                </Grid>
                            </Grid>
                            <Grid item sm={6} xs={12} style={{}}>
                                <Grid container direction='column' justifyContent={justify} alignItems={ min ? 'flex-start' : 'center' } style={{ height:'100%'}}>
                                    <div style={{ width:'60%',display:'flex',alignItems:'center',flexDirection:'column',marginLeft:'5%'}}>
                                        <div style={{ display:'flex',flexDirection:'column',alignItems:'space-around',height:60,width:'100%'}}>
                                            <div style={{ width:'100%',height:'40%',display:'flex'}}>
                                                <p style={{ fontFamily:'Montserrat-SemiBold',fontSize:14,color:'white'}}>Nombre y Apellido</p>
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
                                                <p style={{ fontFamily:'Montserrat-SemiBold',fontSize:14,color:'white'}}>E-mail</p>
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
                                                <p style={{ fontFamily:'Montserrat-SemiBold',fontSize:14,color:'white'}}>Comentario</p>
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
                                    <Button  onClick={() => this.send()} style={{}}>
                                        <img style={{marginLeft: 25, width: 100, height: 150*0.40}} src={enviar} />
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
