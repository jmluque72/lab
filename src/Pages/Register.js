import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Background from '../assets/background_event_program.png'
import logoEvent from '../assets/logo_ozempic_circle.png'
import logoHeader from '../assets/logo_ozempic_header.png'
import logoNovo from '../assets/logo_novo.png'
import check from '../assets/check.png'
import { colors } from '../utils'
import LogoOzempicHeader from '../assets/logo_ozempic_header.png'
import TILDE from '../assets/TILDE.png'
import Loader from "react-loader-spinner";

class Register extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            name: "",
            mail: "",
            city: "",
            esp: "",
            pal: "",
            error: null,
            register: false,
            terms: false,
            loading: false,
        };
    }
    register() {
        this.setState({
            error: null,
            loading: true
        })
        const body = {
            first_name: this.state.name,
            last_name: "",
            email: this.state.mail,
            city: this.state.city,
            speciality: this.state.esp,
            comment: this.state.pal,
        }

        var response = fetch("https://4swa57ilx6.execute-api.sa-east-1.amazonaws.com/prod/register", {
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
                    this.setState({ error: response + "" })
                }
            })
            .then((response) => {
                if (response) {
                    if (!response.error) {
                        this.setState({ register: true, loading: false });
                    } else {
                        this.setState({ error: response.error, loading: false })
                    }
                }
            })
            .catch(error => {
                this.setState({ error: error, loading: false })
            });
    }

    render() {
        const height = window.innerHeight
        const min = window.innerWidth >= 1000
        var disabledbutton = false;
        const email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (
            this.state.mail === "" ||
            this.state.name === "" ||
            this.state.city === "" ||
            this.state.esp === "" ||
            this.state.pal === "" ||
            this.state.terms === false ||
            email.test(this.state.mail) === false
        ) {
            disabledbutton = true;
        }
        if (!this.state.register) {
            return (
                <div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                            <Grid item xs={11} sm={11} style={{ backgroundColor: 'white', boxShadow: ' 0 3px 6px 0 #000000', padding: 25, marginTop: '2%', marginBottom: '2%', position: 'relative' }}>
                                <img style={{ width: 118 * 0.7, height: 84 * 0.7, position: 'absolute', bottom: 10, right: 10 }} src={logoNovo}></img>
                                <Grid container direction='row'>
                                    <Grid item sm={5} xs={12} style={{ height: '100%', display: 'flex' }} >
                                        <Grid container justify='center' alignItems='center' style={{ width: '100%', height: '100%' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                                <img style={{ width: '100%' }} src={logoEvent} />
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={6} xs={12} style={{ height: '100%' }} >
                                        <Grid container direction='row' justify='center' style={{ marginTop: min ? 0 : 20 }}>
                                            <div style={{ width: '80%' }}>
                                                <img style={{ width: '100%' }} src={logoHeader} />

                                            </div>
                                            <Grid item xs={11} sm={11} xs={11}>
                                                <Grid container direction='column'>
                                                    <div style={{ marginTop: 10 }}>
                                                        <p style={{ fontFamily: 'FrutigerBlack', fontSize: 26, color: colors.gray, margin: 0, textAlign: 'left' }}>REGISTRATE</p>
                                                    </div>
                                                    <div style={{ backgroundColor: colors.gray, height: 10, width: 50 }} ></div>
                                                    <div style={{ width: '100%', height: 40, display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                                        <Grid item xs={5} sm={3} style={{ display: 'flex' }}>
                                                            <p style={{ fontFamily: 'FrutigerBold', fontSize: 12, color: '#465658', margin: 0, textAlign: 'center' }}>Nombre y Apellido (*)</p>
                                                        </Grid>
                                                        <Grid item xs={7} sm={9} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 1, borderStyle: 'solid', }}>
                                                            <input
                                                                style={{
                                                                    backgroundColor: 'transparent',
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    border: 'none',
                                                                }}
                                                                type='text'
                                                                className='no-outline'
                                                                onChange={(event) => this.setState({ name: event.target.value })}
                                                            >
                                                            </input>
                                                        </Grid>
                                                    </div>
                                                    <div style={{ width: '100%', height: 40, display: 'flex', flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
                                                        <Grid item xs={2} sm={1} style={{ display: 'flex' }}>
                                                            <p style={{ fontFamily: 'FrutigerBold', fontSize: 12, color: '#465658', margin: 0 }}>Mail (*)</p>
                                                        </Grid>
                                                        <Grid item xs={10} sm={11} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 1, borderStyle: 'solid', }}>
                                                            <input
                                                                style={{
                                                                    backgroundColor: 'transparent',
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    border: 'none',
                                                                }}
                                                                className='no-outline'
                                                                type='email'
                                                                onChange={(event) => this.setState({ mail: event.target.value })}
                                                            >
                                                            </input>
                                                        </Grid>
                                                    </div>
                                                    <div style={{ width: '100%', height: 40, display: 'flex', flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
                                                        <Grid item xs={2} sm={2} style={{ display: 'flex' }}>
                                                            <p style={{ fontFamily: 'FrutigerBold', fontSize: 12, color: '#465658', margin: 0 }}>Ciudad (*)</p>
                                                        </Grid>
                                                        <Grid item xs={10} sm={10} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 1, borderStyle: 'solid', }}>
                                                            <input
                                                                style={{
                                                                    backgroundColor: 'transparent',
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    border: 'none',
                                                                }}
                                                                className='no-outline'
                                                                type='text'
                                                                onChange={(event) => this.setState({ city: event.target.value })}
                                                            >
                                                            </input>
                                                        </Grid>
                                                    </div>
                                                    <div style={{ width: '100%', height: 40, display: 'flex', flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
                                                        <Grid item xs={4} sm={2} style={{ display: 'flex' }}>
                                                            <p style={{ fontFamily: 'FrutigerBold', fontSize: 12, color: '#465658', margin: 0 }}>Especialidad (*)</p>
                                                        </Grid>
                                                        <Grid item xs={8} sm={10} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 1, borderStyle: 'solid', }}>
                                                            <input
                                                                style={{
                                                                    backgroundColor: 'transparent',
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    border: 'none',
                                                                }}
                                                                className='no-outline'
                                                                type='text'
                                                                onChange={(event) => this.setState({ esp: event.target.value })}
                                                            >
                                                            </input>
                                                        </Grid>
                                                    </div>
                                                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: 5 }}>
                                                        <Grid style={{ width: '100%' }} style={{ display: 'flex' }}>
                                                            <p style={{ fontFamily: 'FrutigerBold', fontSize: 12, color: '#465658', margin: 0, textAlign: 'left' }}>En una palabra, te invitamos a dejarnos tus expectativas por el lanzamiento de Ozempic® en Argentina</p>
                                                        </Grid>
                                                        <Grid style={{ width: '100%', height: 30, marginTop: 5, borderRadius: 8, borderColor: colors.gray, borderWidth: 1, borderStyle: 'solid', }}>
                                                            <input
                                                                style={{
                                                                    backgroundColor: 'transparent',
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    border: 'none',
                                                                }}
                                                                type='mail'
                                                                className='no-outline'
                                                                onChange={(event) => this.setState({ pal: event.target.value })}
                                                            >
                                                            </input>
                                                        </Grid>
                                                    </div>
                                                    <div style={{ width: '100%', height: 40, display: 'flex', flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
                                                        <Grid item xs={'auto'} sm={'auto'} style={{ display: 'flex', padding: 10, alignItems: 'center' }}>
                                                            <div onClick={() => this.setState({ terms: !this.state.terms })} style={{ cursor: 'pointer', width: 16, height: 16, borderStyle: 'solid', borderWidth: 1, borderColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: ' 0 1px 4px 0 #000000' }}>
                                                                <img src={check} style={{ width: '100%', display: this.state.terms ? 'flex' : 'none' }}></img>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={9} sm={11} style={{ display: 'flex', alignItems: 'center' }}>
                                                            <p style={{ fontFamily: 'FrutigerBold', fontSize: 14, color: '#465658', margin: 0, textAlign: 'left' }}>Acepto bases y condiciones</p>
                                                        </Grid>
                                                    </div>
                                                    {this.state.error &&
                                                        <div style={{ width: '85%', display: 'flex', justifyContent: 'center' }}>
                                                            <p style={{ marginTop: 20, color: 'red', fontFamily: 'FrutigerBlack', fontSize: 14 }}>{this.state.error}</p>
                                                        </div>
                                                    }

                                                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
                                                        <p style={{ fontFamily: 'FrutigerBold', fontSize: 10, color: '#465658', margin: 0, textAlign: 'left' }}>El aviso legal predeterminado que hay a continuación se mostrará a todo aquel que se inscriba al evento. Al marcar esta casilla envia su información al organizador del evento quien la utlizará para comunicarse con usted sobre este evento y otros servicios. Asimismo confirmo ser profesional de la salud para acceder a este evento.</p>
                                                    </div>
                                                    {this.state.loading ?
                                                        <Loader
                                                            type="Puff"
                                                            color="#465658"
                                                            height={60}
                                                            width={60}
                                                    /> :
                                                        <Button disabled={disabledbutton} onClick={() => this.register()} style={{ marginLeft: 'auto', padding: 10, paddingLeft: 20, paddingRight: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', background: colors.degrade_orange, borderRadius: 20, marginTop: 20, marginBottom: 50 }}>
                                                            <p style={{ fontFamily: 'FrutigerBold', fontSize: 16, color: 'white', margin: 0 }}>REGISTRARSE</p>
                                                        </Button>
                                                    }
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
        } else {
            return (
                <div>
                    <div style={{ display: 'flex', height: window.innerHeight }}>
                        <img style={{ width: '100%', height: height, position: 'fixed', top: 0, left: 0 }} src={Background} />
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
                            <Grid item xs={11} sm={11} style={{ width: '90%', backgroundColor: 'white', boxShadow: ' 0 3px 6px 0 #000000', padding: '2%', marginTop: '2%', marginBottom: '2%', position: 'relative' }}>
                                <img style={{ width: 118 * 0.7, height: 84 * 0.7, position: 'absolute', bottom: 10, right: 10 }} src={logoNovo}></img>
                                <Grid container alignItems='space-around' direction='row' justify='center' style={{ width: '100%' }}>
                                    <Grid item xs={12} style={{ height: 120, marginTop: 30 }}>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ width: 350 }}>
                                                <img style={{ width: '100%' }} src={LogoOzempicHeader}></img>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} style={{ marginTop: min ? 25 : 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: colors.degrade_orange, borderRadius: 20, paddingTop: 20, paddingBottom: 20 }}>
                                        <Grid container direction='row' alignContent='center' style={{ height: min ? 180 : 250 }} >
                                            <Grid item sm={4} xs={12} >
                                                <Grid container justify='center' alignItems='center' >
                                                    <div style={{ height: 120, width: 120, }}>
                                                        <img style={{ width: '100%' }} src={TILDE}></img>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={8} xs={12}>
                                                <Grid container alignItems='center' justify='center' style={{ width: min ? '85%' : '100%' }}>
                                                    <div style={{ height: 120, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                                        <p style={{ fontFamily: 'FrutigerBlack', letterSpacing: 0.9, fontSize: 20, color: 'white', margin: 0, textAlign: min ? 'left' : 'center' }}>USTED SE HA REGISTRADO SATISFACTORIAMENTE.</p>
                                                        <p style={{ fontFamily: 'FrutigerBold', fontSize: 16, color: 'white', margin: 0, textAlign: min ? 'left' : 'center', marginTop: 10 }}>Revise su correo electrónico para confirmar su e-mail</p>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Register;