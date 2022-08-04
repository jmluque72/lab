import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Dialog } from '@material-ui/core';
import './Main.css'
import LogoZoovet from '../assets/LogoVete.png'
import { colors } from '../utils'
import margen from '../assets/encuesta/margen.png'
import background from '../assets/encuesta/background.png'
import star from '../assets/encuesta/star.png'
import starSelected from '../assets/encuesta/starSelected.png'
import logo from '../assets/encuesta/logo.png'
import arrow from '../assets/encuesta/arrow.png'


class Form extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            heightForm: 0,
            calificacionSelect: 1,
            modalidad: 1,
            box: 1,
            comun: 1,
            juegos: 1,
            show: 1,
            contenido: 1,
            reconocimiento: 1,
            compartir: 1,
            gusto: 1,
            recomendar: 1,
            question1: 1,
            question2: 1,
            question3: 1,
            question4: 1,
            question5: 1,
            question6: 1,
            question7: 1,
            question8: 1,
            question8_t: "",
            question9: 1,

        }
    }

    send_form(event) {
        // send
        // send
        // send
        event.preventDefault()
        this.setState({ error: null });
        const context = {
            question1: this.state.question1,
            question2: this.state.question2,
            question3: this.state.question3,
            question4: this.state.question4,
            question5: this.state.question5,
            question6: this.state.question6,
            question7: this.state.question7,
            question8: this.state.question8,
            question8_t: this.state.question8_t,
            question9: this.state.question9,
      }


        var response = fetch("https://pom2lkx5ei.execute-api.us-east-1.amazonaws.com/production/send_form", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(context)
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
                    this.setState({ send: true })
                } else {
                    this.setState({ error: response.error })
                }
            })
            .catch(error => {
                this.setState({ error: error })
            });
    }
    componentDidMount() {
        const heightForm = document.getElementById('form')
        if (heightForm) {
            this.setState({ heightForm: heightForm.offsetHeight })
        }
    }

    render() {
        const min = window.innerWidth >= 1000
        const gray = '#ECECEC'
        const azul = '#22a4f5'
        var disabled = false;
        const margenTop = min ? 280 : 50

        return (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', marginBottom: 10 }}>

                {/* <div style={{height:'100%',width:22,position:'fixed',top:0,left:0,background:colors.degrade_orange}}></div> */}
                <Grid id='form' item xs={12} style={{ margin: 0, marginTop: 50, marginBottom: 10 }}>
                    <form onSubmit={(event) => this.send_form(event)}>
                        <Grid container direction='column' alignItems='center' style={{ width: '100%', height: '100%' }}>
                            <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: ' 0 4px 5px -2px black' }}>
                                  <img src={LogoZoovet} alt='logo-zoovet' height='140px' width='auto' style={{ marginRight: 16,  marginLeft: min ? '0' : '30' }}></img>
                                <p style={{ marginLeft: 20, marginRight: 20, color: 'black', fontFamily: 'Montserrat-Regular', fontSize: 20, textAlign: 'center' }}>Muchas gracias por ser parte del “Dia del Veterinario Zoovet”</p>
                                <p style={{ color: colors.gray, fontFamily: 'Montserrat-SemiBold', fontSize: 18, textAlign: 'center', width: '80%' }}>A continuación, vas a encontrar una serie de preguntas para comprender aquellos elementos que más valor te aportan a vos. De esta manera seguiremos diseñando eventos que cumplan todas sus expectativas.</p>
                            </div>
                            <div style={{ width: '70%', background: gray, position: 'relative', borderRadius: 12, marginTop: 20, paddingLeft: '2.5%', paddingRight: '2.5%', paddingTop: 20, paddingBottom: 20 }}>
                                <div style={{ height: '100%', width: 12, position: 'absolute', top: 0, left: 0, background: azul, borderTopLeftRadius: 10, borderBottomLeftRadius: 12 }}></div>
                                <Grid container direction='column' style={{ width: '100%', height: '100%' }}>
                                    <div style={{ width: '100%' }}>
                                        <p className='title'>1. ¿Sos cliente de Zoovet?</p>
                                    </div>
                                    <Grid container direction={'column'} style={{ marginLeft: 5 }}>
                                        <Grid item sm={12} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div onClick={() => this.setState({ question1: 1 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question1 == 1 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>Si</p>
                                        </Grid>
                                        <Grid item sm={12} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div onClick={() => this.setState({ question1: 2 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question1 == 2 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>No</p>
                                        </Grid>
                                        <Grid item sm={12} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div onClick={() => this.setState({ question1: 3 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question1 == 3 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>Estoy interesado</p>
                                        </Grid>
                                        <Grid item sm={12} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div onClick={() => this.setState({ question1: 4 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question1 == 4 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>No soy veterinario/a</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{ width: '70%', background: gray, position: 'relative', borderRadius: 12, marginTop: 20, paddingLeft: '2.5%', paddingRight: '2.5%', paddingTop: 20, paddingBottom: 20 }}>
                                <Grid container direction='column' style={{ width: '100%', height: '100%' }}>
                                    <div style={{ width: '100%' }}>
                                        <p className='title'>2. Calificación general del evento CON NÚMERO DE ESCALA</p>
                                        <p style={{ color: 'black', fontFamily: 'Montserrat-Regular', textAlign: 'left', fontSize: 14, margin: 0, marginLeft: 5 }}>(De 1 a 5, donde 1 es muy malo, 2 malo, 3 bueno, 4 muy bueno y 5 excelente)</p>
                                    </div>
                                    <Grid container direction={!min ? 'column' : 'row'} >
                                        <Grid item sm={1} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <p style={{ margin: 0, fontSize: 18, color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>1</p>
                                            <img onClick={() => this.setState({ question2: 1 })} width='25px' height='auto' src={this.state.question2 === 1 ? starSelected : star} style={{ cursor: 'pointer' }}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <p style={{ margin: 0, fontSize: 18, color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>2</p>
                                            <img onClick={() => this.setState({ question2: 2 })} width='25px' height='auto' src={this.state.question2 === 2 ? starSelected : star} style={{ cursor: 'pointer' }}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <p style={{ margin: 0, fontSize: 18, color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>3</p>
                                            <img onClick={() => this.setState({ question2: 3 })} width='25px' height='auto' src={this.state.question2 === 3 ? starSelected : star} style={{ cursor: 'pointer' }}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <p style={{ margin: 0, fontSize: 18, color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>4</p>
                                            <img onClick={() => this.setState({ question2: 4 })} width='25px' height='auto' src={this.state.question2 === 4 ? starSelected : star} style={{ cursor: 'pointer' }}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <p style={{ margin: 0, fontSize: 18, color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>5</p>
                                            <img onClick={() => this.setState({ question2: 5 })} width='25px' height='auto' src={this.state.question2 === 5 ? starSelected : star} style={{ cursor: 'pointer' }}></img>
                                        </Grid>

                                    </Grid>
                                </Grid>
                                <div style={{ height: '100%', width: 12, position: 'absolute', top: 0, left: 0, background: azul, borderTopLeftRadius: 10, borderBottomLeftRadius: 12 }}></div>

                            </div>
                            <div style={{ width: '70%', background: gray, position: 'relative', borderRadius: 12, marginTop: 20, paddingLeft: '2.5%', paddingRight: '2.5%', paddingTop: 20, paddingBottom: 20 }}>
                                <div style={{ height: '100%', width: 12, position: 'absolute', top: 0, left: 0, background: azul, borderTopLeftRadius: 10, borderBottomLeftRadius: 12 }}></div>
                                <Grid container direction='row' style={{ width: '100%', height: '100%' }}>
                                    <div style={{ width: '100%' }}>
                                        <p className='title'>3.¿Cómo te enteraste del evento?</p>
                                    </div>
                                    <Grid justifyContent='start' container direction={'column'} style={{ marginLeft: 5 }}>
                                        <Grid item sm={3} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div onClick={() => this.setState({ question3: 1 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question3 == 1 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>Redes sociales</p>
                                        </Grid>
                                        <Grid item sm={3} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div onClick={() => this.setState({ question3: 2 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question3 == 2 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>Radios</p>
                                        </Grid>
                                        <Grid item sm={3} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div onClick={() => this.setState({ question3: 3 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question3 == 3 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>Mailing</p>
                                        </Grid>
                                        <Grid item sm={3} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start' }}>
                                            <div onClick={() => this.setState({ question3: 4 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question3 == 4 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>Distribuidores</p>
                                        </Grid>
                                        <Grid item sm={3} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start' }}>
                                            <div onClick={() => this.setState({ question3: 5 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question3 == 5 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>Medios del sector</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{ width: '70%', background: gray, position: 'relative', borderRadius: 12, marginTop: 20, paddingLeft: '2.5%', paddingRight: '2.5%', paddingTop: 20, paddingBottom: 20 }}>
                                <Grid container direction='column' style={{ width: '100%', height: '100%' }}>
                                    <div style={{ width: '100%' }}>
                                        <p className='title'>4. ¿Te gustaron los juegos interactivos?</p>
                                        <p style={{ color: 'black', fontFamily: 'Montserrat-Regular', textAlign: 'left', fontSize: 14, margin: 0, marginLeft: 5 }}>(De 1 a 5, donde 1 es muy malo, 2 malo, 3 bueno, 4 muy bueno y 5 excelente)</p>
                                    </div>
                                    <Grid container direction={!min ? 'column' : 'row'} >
                                        <Grid item sm={1} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <p style={{ margin: 0, fontSize: 18, color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>1</p>
                                            <img onClick={() => this.setState({ question4: 1 })} width='25px' height='auto' src={this.state.question4 === 1 ? starSelected : star} style={{ cursor: 'pointer' }}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <p style={{ margin: 0, fontSize: 18, color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>2</p>
                                            <img onClick={() => this.setState({ question4: 2 })} width='25px' height='auto' src={this.state.question4 === 2 ? starSelected : star} style={{ cursor: 'pointer' }}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <p style={{ margin: 0, fontSize: 18, color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>3</p>
                                            <img onClick={() => this.setState({ question4: 3 })} width='25px' height='auto' src={this.state.question4 === 3 ? starSelected : star} style={{ cursor: 'pointer' }}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <p style={{ margin: 0, fontSize: 18, color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>4</p>
                                            <img onClick={() => this.setState({ question4: 4 })} width='25px' height='auto' src={this.state.question4 === 4 ? starSelected : star} style={{ cursor: 'pointer' }}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <p style={{ margin: 0, fontSize: 18, color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>5</p>
                                            <img onClick={() => this.setState({ question4: 5 })} width='25px' height='auto' src={this.state.question4 === 5 ? starSelected : star} style={{ cursor: 'pointer' }}></img>
                                        </Grid>

                                    </Grid>
                                </Grid>
                                <div style={{ height: '100%', width: 12, position: 'absolute', top: 0, left: 0, background: azul, borderTopLeftRadius: 10, borderBottomLeftRadius: 12 }}></div>

                            </div>
                            <div style={{ width: '70%', background: gray, position: 'relative', borderRadius: 12, marginTop: 20, paddingLeft: '2.5%', paddingRight: '2.5%', paddingTop: 20, paddingBottom: 20 }}>
                                <Grid container direction='column' style={{ width: '100%', height: '100%' }}>
                                    <div style={{ width: '100%' }}>
                                        <p className='title'>5. ¿Qué te pareció el contenido artístico del evento?</p>
                                        <p style={{ color: 'black', fontFamily: 'Montserrat-Regular', textAlign: 'left', fontSize: 14, margin: 0, marginLeft: 5 }}>(Alejandra Maglietti, Los Totora, Carismagico)</p>
                                        <p style={{ color: 'black', fontFamily: 'Montserrat-Regular', textAlign: 'left', fontSize: 14, margin: 0, marginLeft: 5 }}>(De 1 a 5, donde 1 es muy malo, 2 malo, 3 bueno, 4 muy bueno y 5 excelente)</p>
                                    </div>
                                    <Grid container direction={!min ? 'column' : 'row'} >
                                        <Grid item sm={1} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <p style={{ margin: 0, fontSize: 18, color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>1</p>
                                            <img onClick={() => this.setState({ question5: 1 })} width='25px' height='auto' src={this.state.question5 === 1 ? starSelected : star} style={{ cursor: 'pointer' }}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <p style={{ margin: 0, fontSize: 18, color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>2</p>
                                            <img onClick={() => this.setState({ question5: 2 })} width='25px' height='auto' src={this.state.question5 === 2 ? starSelected : star} style={{ cursor: 'pointer' }}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <p style={{ margin: 0, fontSize: 18, color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>3</p>
                                            <img onClick={() => this.setState({ question5: 3 })} width='25px' height='auto' src={this.state.question5 === 3 ? starSelected : star} style={{ cursor: 'pointer' }}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <p style={{ margin: 0, fontSize: 18, color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>4</p>
                                            <img onClick={() => this.setState({ question5: 4 })} width='25px' height='auto' src={this.state.question5 === 4 ? starSelected : star} style={{ cursor: 'pointer' }}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <p style={{ margin: 0, fontSize: 18, color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>5</p>
                                            <img onClick={() => this.setState({ question5: 5 })} width='25px' height='auto' src={this.state.question5 === 5 ? starSelected : star} style={{ cursor: 'pointer' }}></img>
                                        </Grid>
                                        <div style={{ width: '100%', marginTop: 20 }}>
                                            <p style={{ color: 'black', fontFamily: 'Montserrat-SemiBold', textAlign: 'left', fontSize: 16, margin: 0, marginLeft: 5 }}>¿Qué mejoraría?</p>
                                        </div>

                                    </Grid>
                                </Grid>
                                <div style={{ height: '100%', width: 12, position: 'absolute', top: 0, left: 0, background: azul, borderTopLeftRadius: 10, borderBottomLeftRadius: 12 }}></div>

                            </div>

                            <div style={{ width: '70%', background: gray, position: 'relative', borderRadius: 12, marginTop: 20, paddingLeft: '2.5%', paddingRight: '2.5%', paddingTop: 20, paddingBottom: 20 }}>
                                <div style={{ height: '100%', width: 12, position: 'absolute', top: 0, left: 0, background: azul, borderTopLeftRadius: 10, borderBottomLeftRadius: 12 }}></div>
                                <Grid container direction='column' style={{ width: '100%', height: '100%' }}>
                                    <div style={{ width: '100%' }}>
                                        <p className='title'>6. ¿Te sentiste representado con el contenido del evento?</p>
                                    </div>
                                    <Grid container direction={'column'} style={{ marginLeft: 5 }}>
                                        <Grid item sm={12} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div onClick={() => this.setState({ question6: 1 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question6 == 1 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>Si</p>
                                        </Grid>
                                        <Grid item sm={12} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div onClick={() => this.setState({ question6: 2 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question6 == 2 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>No</p>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{ width: '70%', background: gray, position: 'relative', borderRadius: 12, marginTop: 20, paddingLeft: '2.5%', paddingRight: '2.5%', paddingTop: 20, paddingBottom: 20 }}>
                                <Grid container direction='column' style={{ width: '100%', height: '100%' }}>
                                    <div style={{ width: '100%' }}>
                                        <p className='title'>7. ¿Con quién compartiste la fiesta?</p>
                                        <p style={{ color: 'black', fontFamily: 'Montserrat-Regular', textAlign: 'left', fontSize: 14, margin: 0, marginLeft: 5 }}>(De 1 a 5, donde 1 es muy malo, 2 malo, 3 bueno, 4 muy bueno y 5 excelente)</p>
                                    </div>
                                    <div style={{ width: '100%', marginTop: 20 }}>
                                        <p className='title'>Dejanos tu comentario</p>
                                    </div>
                                    <input
                                        style={{
                                            backgroundColor: 'transparent',
                                            width: '100%',
                                            height: '100%',
                                            border: 'none',
                                            borderBottomStyle: 'solid',
                                            borderWidth: 1,
                                            borderColor: 'gray',
                                            marginTop: 5,
                                            padding: 5
                                        }}
                                        placeholder='Su respuesta'
                                        className='no-outline'
                                        required={true}
                                        onChange={(event) => this.setState({ question7: event.target.value })}

                                    >
                                    </input>
                                </Grid>
                                <div style={{ height: '100%', width: 12, position: 'absolute', top: 0, left: 0, background: azul, borderTopLeftRadius: 10, borderBottomLeftRadius: 12 }}></div>
                            </div>
                            <div style={{ width: '70%', background: gray, position: 'relative', borderRadius: 12, marginTop: 20, paddingLeft: '2.5%', paddingRight: '2.5%', paddingTop: 20, paddingBottom: 20 }}>
                                <Grid container direction='column' style={{ width: '100%', height: '100%' }}>
                                    <div style={{ width: '100%' }}>
                                        <p className='title'>8. ¿Cuál fue tu parte preferida del Día del Veterinario Zoovet?</p>
                                    </div>
                                    <Grid container direction={'column'} style={{ marginLeft: 5 }}>
                                        <Grid item sm={12} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div onClick={() => this.setState({ question8: 1 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question8 == 1 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>Show de Los Totora</p>
                                        </Grid>
                                        <Grid item sm={12} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div onClick={() => this.setState({ question8: 2 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question8 == 2 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>Show de Carismagico</p>
                                        </Grid>

                                        <Grid item sm={12} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div onClick={() => this.setState({ question8: 4 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question8 == 4 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>La conduccion</p>
                                        </Grid>
                                        <Grid item sm={12} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div onClick={() => this.setState({ question8: 5 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question8 == 5 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>Bloque emotivo</p>
                                        </Grid>
                                    </Grid>
                                    <div style={{ width: '100%', marginTop: 20 }}>
                                        <p className='title'>Por que?</p>
                                    </div>
                                    <input
                                        style={{
                                            backgroundColor: 'transparent',
                                            width: '100%',
                                            height: '100%',
                                            border: 'none',
                                            borderBottomStyle: 'solid',
                                            borderWidth: 1,
                                            borderColor: 'gray',
                                            marginTop: 5,
                                            padding: 5
                                        }}
                                        placeholder='Su respuesta'
                                        className='no-outline'
                                        required={true}

                                        onChange={(event) => this.setState({ question8_t: event.target.value })}

                                    >
                                    </input>
                                </Grid>
                                <div style={{ height: '100%', width: 12, position: 'absolute', top: 0, left: 0, background: azul, borderTopLeftRadius: 10, borderBottomLeftRadius: 12 }}></div>
                            </div>
                            <div style={{ width: '70%', background: gray, position: 'relative', borderRadius: 12, marginTop: 20, paddingLeft: '2.5%', paddingRight: '2.5%', paddingTop: 20, paddingBottom: 20 }}>
                                <div style={{ height: '100%', width: 12, position: 'absolute', top: 0, left: 0, background: azul, borderTopLeftRadius: 10, borderBottomLeftRadius: 12 }}></div>
                                <Grid container direction='column' style={{ width: '100%', height: '100%' }}>
                                    <div style={{ width: '100%' }}>
                                        <p className='title'> 9. Luego de lo vivido, ¿recomendarías a tus compañeros y colegas el Día del Veterinario Zoovet el próximo año?</p>
                                    </div>
                                    <Grid container direction={'column'} style={{ marginLeft: 5 }}>
                                        <Grid item sm={12} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div onClick={() => this.setState({ question9: 1 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question9 == 1 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>Si</p>
                                        </Grid>
                                        <Grid item sm={12} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div onClick={() => this.setState({ question9: 2 })} style={{ width: 15, boxShadow: ' 0 1px 2px 0 black', height: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 7.5, backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {this.state.question9 == 2 && (
                                                    <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'black' }}></div>
                                                )}
                                            </div>
                                            <p style={{ margin: 0, fontSize: 16, color: 'black', fontFamily: 'Montserrat-SemiBold', marginLeft: 10 }}>No</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>

                            <div style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
                                {this.state.send ?
                                    <p style={{ color: colors.gray, fontFamily: 'Montserrat-Regular', fontSize: min ? 30 : 30, marginTop: 20, textAlign: 'center' }}>¡Muchas gracias por su participación!</p>
                                    :
                                    <button disabled={disabled} type='sumbit' style={{ cursor: 'pointer', border: 'none', paddingBottom: 5, paddingTop: 5, paddingLeft: 15, paddingRight: 15, marginLeft: 'auto', background: azul, borderRadius: 10, marginTop: 20 }}>
                                        <p style={{ color: 'white', fontFamily: 'Montserrat-Regular', fontSize: 16, margin: 0, textAlign: 'center' }}>Enviar</p>
                                    </button>
                                }

                            </div>
                        </Grid>
                    </form>
                </Grid>


            </div>
        );
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Form;
