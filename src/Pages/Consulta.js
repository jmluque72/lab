import React from "react";
import PropTypes from "prop-types";

import Header from './Header.js'
import Footer from './Footer.js'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button} from '@material-ui/core';
import './Main.css';
import Background from '../assets/backgroundZoonvetAll.jpg';
import BackgroundR from '../assets/backgroun_responsive_all.jpg';

import imgComoserParte from '../assets/imgConsulta-01-01.png';
import enviar from '../assets/enviar.svg';
import { ISO_8601 } from "moment";


class Consulta extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            name: "",
            email: "",
            men: "",
            message: "",
            error:null
        };
    }

    send() {
        this.setState({ error: null, message: "" });
        const email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (email.test(this.state.email)) {
               this.setState({ error: null, message: "" });
        // this is a valid email address
        // call setState({email: email}) to update the email
        // or update the data in redux store.
            }
            else {
              this.setState({
                error: "Email inválido"
            })
            return;
            }

        var body = {
            name : this.state.name,
            email: this.state.email,
            comment: this.state.men
        }

        var response = fetch("https://pom2lkx5ei.execute-api.us-east-1.amazonaws.com/prod/comments", {
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
                    this.setState({ error: response.error })
                }
            })

            .then((response) => {

                if (response) {

                    if (!response.error) {

                        this.setState({
                            name: "",
                            email: "",
                            men: "",
                            error: "Su consulta se envio correctamente"
                        })
                    } else {
                        this.setState({ error: response.error })
                    }
                }
            })
            .catch(error => {
                this.setState({ error: response.error })
            });


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
            <div style={{width: window.innerWidth, flexDirection: 'row'}}>
            <Grid item sm={12} xs={12} md={12} lg={12}  style={{ width: window.innerWidth, height:'100vh'  , backgroundImage:`url(${back})`,backgroundSize: 'cover'}}>
                        <Grid container direction='row' style={{height:'100%', width: '100%'}}>
                        <Grid item sm={12} xs={12} md={6} l={6} lg={6}   style={{ }}>
                                <Grid container direction='column' justifyContent='space-around' alignItems={ min ? 'flex-end' : 'center' } style={{ width:'100%', height:'100%'}}>
                                  <img style={{ marginLeft: min? '-9%' : '-3%',marginTop: min? '5%' : '20%', width: min? 550 :300, height: min? 250: 140,justifyContent: min? 'center' : 'center' }} src={imgComoserParte} ></img>
                                </Grid>
                            </Grid>
                        <Grid item sm={12} xs={12} md={6} l={6} style={{}}>
                                <Grid container direction='column' justifyContent='center' alignItems={ min ? 'flex-start' : 'center' } style={{ height:'100%'}}>
                                <div style={{ marginTop: min ? 40 : '-30%', width: '80%', display: 'flex', alignItems: 'center', flexDirection: 'column', marginLeft: min ? '15%' : 0 }}>

                                        <div style={{ display:'flex',flexDirection:'column',alignItems:'space-around',height:55,width:'100%',marginTop:5}}>
                                            <div style={{ width:'100%',height:'40%',display:'flex'}}>
                                                <p className="titleForm" style={{ fontSize:16,color:'white'}}>Nombre y Apellido</p>
                                            </div>
                                            <div style={{ width:'100%',height:'100%',display:'flex',backgroundColor:'white'}}>
                                                <input
                                                    type='text'
                                                    value={this.state.name}
                                                    className='no-outline'
                                                    onChange={(event) => this.setState({ name : event.target.value})}
                                                    style={{marginLeft: 5, width:'100%',height:'100%',borderStyle:'none'}}
                                                ></input>
                                            </div>
                                    </div>
                                      <div style={{ display:'flex',flexDirection:'column',alignItems:'space-around',height:55,width:'100%',marginTop:5}}>
                                            <div style={{ width:'100%',height:'40%',display:'flex'}}>
                                                <p className="titleForm" style={{ fontSize:16,color:'white'}}>E-mail</p>
                                            </div>
                                            <div style={{ width:'100%',height:'100%',display:'flex',backgroundColor:'white'}}>
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
                                                <p className="titleForm" style={{ fontSize:16,color:'white'}}>Comentario</p>
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
                                    <Button  onClick={() => this.send()} style={{marginLeft: min?  '10%' : 0}}>
                                        <img style={{ marginLeft: min ? 25 : 0, textAlign: min? 'left' : 'center', width: 150, height:100 }}  src={enviar} />
                                </Button>
                                 {this.state.error &&
                                    <div style={{ width:'95%',display:'flex',justifyContent:'center'}}>
                                        <p style={{ borderRadius: 2, background: 'red', margin:10, marginTop: 40, color: 'white', fontFamily:'Montserrat-SemiBold',fontSize:18}}>{this.state.error}</p>
                                    </div>
                                }
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