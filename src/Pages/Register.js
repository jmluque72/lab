import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Background from '../assets/backgroundRegister.svg'
import Background2 from '../assets/background_event_program.png'
import backgroundCheck from '../assets/backgroundCheck.png'
import backgroundRegisterOk from '../assets/backgroundRegisterOk.svg'

import logoVeteGrande from '../assets/LogoVete.svg'

import logoHeader from '../assets/logo_ozempic_header.png'
import logoNovo from '../assets/logoZoon.svg'
import check from '../assets/check.png'
import { colors } from '../utils'
import LogoOzempicHeader from '../assets/logo_ozempic_header.png'
import Registrarse from '../assets/buttonRegister.png'
import './Main.css'
import TILDE from '../assets/TILDE.png'
import Loader from "react-loader-spinner";
import moment from 'moment';

class Register extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            name: "",
            day: "",
            mounth: "",
            address: "",
            addressNumber: "",
            depto: "",
            city: "",
            country: "",
            mod: "",
            question1: "",
            question2: "",
            error: null,
            register: false,
            terms: false,
            loading: false,
            send: false,
            habito: "",
            otherhabito: "",
            check1: true,
            check2: false,
            check3: false,
            check4: false,
            check5: false,
            check6: false,
            check7: true,
            check8: false,
            check9: false,
            check10: false

        };
    }
    register() {
        const email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        var d = moment({ year: this.state.year, month: this.state.mounth, day: this.state.day });
        if (d == null) {
            this.setState({
                error: "Fecha de nacimiento inválida"
            })
            return;
        }
        this.setState({ send: true });
        if (
            this.state.email === "" ||
            this.state.day === "" ||
            this.state.month === "" ||
            this.state.year === "" ||
            this.state.first_name === "" ||
            this.state.last_name === "" ||
            this.state.phone1 === "" ||
            this.state.phon2 === "" ||
            this.state.city === "" ||
            this.state.province === ""
        ) {
            return;
        }
        if (this.state.habito == 'Si' && this.state.otherhabito == '') {
            return;
        }
        this.setState({
            error: null,
            loading: true
        })
        var  question1 = 1;
        var question2 = 1;
        if (this.state.check2) {
            question1 = 2
        }
        if (this.state.check3) {
            question1 = 3
        }
        if (this.state.check4) {
            question1 = 4
        }
        if (this.state.check5) {
            question1 = 5
        }
        if (this.state.check6) {
            question1 = 6
        }
        if (this.state.check7) {
            question2 = 1
        }
        if (this.state.check8) {
            question2 = 2
        }
        if (this.state.check9) {
            question2 = 3
        }
        if (this.state.check10) {
            question2 = 4
        }
        const body = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            day: this.state.day,
            month: this.state.month,
            year: this.state.year,
            city: this.state.city,
            province: this.state.province,
            phone1: this.state.phone1,
            phone2: this.state.phone2,
            question1: question1,
            question2: question2,
            email: this.state.email
        }
        var response = fetch("https://pom2lkx5ei.execute-api.us-east-1.amazonaws.com/production/register", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then((response) => {
                console.log(response);
                if (response.status == 200) {
                    return response.json();
                } else {
                    this.setState({ error: response + "", loading: false })
                }
            })
            .then((response) => {
                console.log(response);
                if (response) {
                    console.log(response);
                    if (!response.error) {
                        this.setState({ register: true, loading: false });
                    } else {
                        this.setState({ error: response.error, loading: false })
                    }
                }
            })
            .catch(error => {
                this.setState({ error: error + "", loading: false })
            });
    }
    onSubmit(event) {
        event.preventDefault()
        if (this.state.terms) {
            this.register()
        } else {
            alert('Debes aceptar los Terminos y Condiciones')
        }
    }
    radioButton = (field, value) => {
        if (field == "check1") {
            this.setState({
                check1: true,
                check2: false,
                check3: false,
                check4: false,
                check5: false,
                check6: false,
            })
        }
        if (field == "check2") {
            this.setState({
                check1: false,
                check2: true,
                check3: false,
                check4: false,
                check5: false,
                check6: false,
            })
        }
        if (field == "check3") {
            this.setState({
                check1: false,
                check2: false,
                check3: true,
                check4: false,
                check5: false,
                check6: false,
            })
        }
        if (field == "check4") {
            this.setState({
                check1: false,
                check2: false,
                check3: false,
                check4: true,
                check5: false,
                check6: false,
            })
        }
        if (field == "check5") {
            this.setState({
                check1: false,
                check2: false,
                check3: false,
                check4: false,
                check5: true,
                check6: false,
            })
        }
        if (field == "check6") {
            this.setState({
                check1: false,
                check2: false,
                check3: false,
                check4: false,
                check5: false,
                check6: true,
            })
        }
        if (field == "check7") {
            this.setState({
                check7: true,
                check8: false,
                check9: false,
                check10: false,
            })
        }
        if (field == "check8") {
            this.setState({
                check7: false,
                check8: true,
                check9: false,
                check10: false,
            })
        }
        if (field == "check9") {
            this.setState({
                check7: false,
                check8: false,
                check9: true,
                check10: false,
            })
        }
        if (field == "check10") {
            this.setState({
                check7: false,
                check8: false,
                check9: false,
                check10: true,
            })
        }
    }
    render() {
        const height = window.innerHeight
        const min = window.innerWidth >= 1000
        var disabledbutton = false;
        const email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        const width = window.innerWidth < 1000

        disabledbutton = false;
        var header = <Grid item xs={12} sm={3} md={4} lg={5} style={{ height: '100%', display: 'flex' }} >
            <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <img height='auto' width='100%' style={{ marginTop: -50, maxWidth: 500 }} src={logoVeteGrande} />
            </div>
        </Grid>

        const h = window.innerHeight;

        if (window.matchMedia('screen and (max-width: 768px)').matches) {
            header = <Grid item xs={12} sm={3} md={4} lg={5}  >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                </div>
            </Grid>
        }

        if (!this.state.register) {
            // if (false) {
            return (
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', backgroundImage: `url(${Background})`, minHeight: h, width: '100%', backgroundSize: 'cover' }}>
                            <Grid container direction='row' styl={{ height: '100%' }}>
                                {header}
                                <Grid item xs={12} sm={9} md={8} lg={7} tyle={{}} >
                                    <Grid container direction='column' justify='center' alignItems='center' style={{ height: '100%', marginTop: 20 }}>
                                        <Grid item style={{ background: 'white', width: '90%', padding: 30, borderRadius: 30 }}>
                                            <div style={{ marginTop: 0 }}>
                                                <p className='titleFormTitle'>REGISTRATE</p>
                                            </div>
                                            <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                <Grid item xs={12} sm={2} style={{ alignItems: 'start', display: 'flex', flexDirection: 'column' }}>
                                                    <p className='textForm'> Nombre</p>
                                                    <p className='textFormError'>{this.state.first_name == '' && this.state.send ? "Campo requerido" : ""}</p>
                                                </Grid>
                                                <Grid item xs={12} sm={4} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 0, borderStyle: 'solid', }}>
                                                    <input
                                                        style={{
                                                            backgroundColor: '#CDCDCD',
                                                            width: '100%',
                                                            height: '100%',
                                                            border: 'none',
                                                        }}
                                                        type='text'
                                                        required
                                                        className='no-outline'
                                                        onChange={(event) => this.setState({ send: false, first_name: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                                <Grid item xs={12} sm={2} style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                                                    <p className='textForm'> Apellido</p>
                                                    <p className='textFormError'>{this.state.last_name == '' && this.state.send ? "Campo requerido" : ""}</p>
                                                </Grid>
                                                <Grid item xs={12} sm={4} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 0, borderStyle: 'solid', }}>
                                                    <input
                                                        style={{
                                                            backgroundColor: '#CDCDCD',
                                                            width: '100%',
                                                            height: '100%',
                                                            border: 'none',
                                                        }}
                                                        type='text'
                                                        required
                                                        className='no-outline'
                                                        onChange={(event) => this.setState({ send: false, last_name: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                            </Grid>
                                            <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                <Grid item xs={12} sm={2} style={{ alignItems: 'start', display: 'flex', flexDirection: 'column' }}>
                                                    <p className='textForm'> Email</p>
                                                    <p className='textFormError'>{this.state.email == '' && this.state.send ? "Campo requerido" : ""}</p>
                                                </Grid>
                                                <Grid item xs={12} sm={8} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 0, borderStyle: 'solid', }}>
                                                    <input
                                                        style={{
                                                            backgroundColor: '#CDCDCD',
                                                            width: '100%',
                                                            height: '100%',
                                                            border: 'none',
                                                        }}
                                                        type='text'
                                                        required
                                                        className='no-outline'
                                                        onChange={(event) => this.setState({ send: false, email: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                            </Grid>
                                            <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                <Grid item xs={12} sm={4} style={{ alignItems: 'start', display: 'flex', flexDirection: 'column' }}>
                                                    <span className='textForm'> Tel. Código de área </span>
                                                    <p className='textFormError'>{(this.state.phone1 == '' || this.state.phone2 == '') && this.state.send ? "Campo requerido" : ""}</p>
                                                </Grid>
                                                <Grid item xs={12} sm={1} style={{paddingRight:5, alignItems: 'flex-end'}}>
                                                    <p className='textForm'>0</p>
                                                    <p className='textFormError'>{this.state.phone2 == '' && this.state.send ? "Campo requerido" : ""}</p>
                                                </Grid>
                                                <Grid item xs={12} sm={2} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 0, borderStyle: 'solid', }}>
                                                    <input
                                                        style={{
                                                            backgroundColor: '#CDCDCD',
                                                            width: '100%',
                                                            height: '100%',
                                                            border: 'none',
                                                        }}
                                                        type='text'
                                                        required
                                                        className='no-outline'
                                                        onChange={(event) => this.setState({ send: false, phone1: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                                <Grid item xs={12} sm={2} style={{paddingRight: 5, alignItems: 'flex-end', display: 'flex', flexDirection: 'column' }}>
                                                    <p className='textForm'> 15</p>
                                                    <p className='textFormError'>{this.state.phone2 == '' && this.state.send ? "Campo requerido" : ""}</p>
                                                </Grid>
                                                <Grid item xs={12} sm={3} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 0, borderStyle: 'solid', }}>
                                                    <input
                                                        style={{
                                                            backgroundColor: '#CDCDCD',
                                                            width: '100%',
                                                            height: '100%',
                                                            border: 'none',
                                                        }}
                                                        type='text'
                                                        required
                                                        className='no-outline'
                                                        onChange={(event) => this.setState({ send: false, phone2: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                            </Grid>
                                            <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                <Grid item xs={12} sm={3} style={{ flexDirection: 'column', alignItems: 'start', display: 'flex', justifyContent: 'flex-start', marginTop: width && (10) }}>
                                                    <p className='textForm' >Fecha de nacimiento</p>
                                                </Grid>
                                                <Grid item xs={2} sm={1} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 10 }}>
                                                    <p className='textForm'>Día</p>
                                                </Grid>
                                                <Grid item xs={2} sm={1} style={{}}>
                                                    <input
                                                        className="boxForm"
                                                        type='number'
                                                        required
                                                        min={1}
                                                        max={31}
                                                        onChange={(event) => this.setState({ send: false, day: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                                <Grid item xs={2} sm={2} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 10 }}>
                                                    <p className='textForm' >Mes</p>
                                                </Grid>

                                                <Grid item xs={2} sm={1} style={{}}>
                                                    <input
                                                        className="boxForm"
                                                        type='number'
                                                        required
                                                        min={1}
                                                        max={12}
                                                        onChange={(event) => this.setState({ send: false, month: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                                <Grid item xs={2} sm={1} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 10 }}>
                                                    <p className='textForm' >Año</p>
                                                </Grid>

                                                <Grid item xs={2} sm={2} style={{}}>
                                                    <input
                                                        className="boxForm"
                                                        type='number'
                                                        required
                                                        onChange={(event) => this.setState({ send: false, year: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>

                                            </Grid>

                                            <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                <Grid item xs={4} sm={2} style={{ flexDirection: 'column', alignItems: 'start', display: 'flex' }}>
                                                    <p className='textForm'>Localidad</p>
                                                    <p className='textFormError'>{this.state.city == '' && this.state.send ? "Campo requerido" : ""}</p>

                                                </Grid>
                                                <Grid item xs={8} sm={4} style={{}}>
                                                    <input
                                                        style={{
                                                            backgroundColor: '#CDCDCD',
                                                            width: '100%',
                                                            height: 30,
                                                            border: 'none',
                                                        }}
                                                        type='text'
                                                        required
                                                        className='no-outline'
                                                        onChange={(event) => this.setState({ send: false, city: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                                <Grid item xs={4} sm={2} style={{ flexDirection: 'column', alignItems: 'center', display: 'flex', justifyContent: !width ? 'flex-end' : '', marginTop: width && 10, }}>
                                                    <p className='textForm' >Provincia</p>
                                                </Grid>
                                                <Grid item xs={8} sm={4} style={{ paddingLeft: !width && (10), marginTop: width && 10, }}>
                                                    <input
                                                        style={{
                                                            backgroundColor: '#CDCDCD',
                                                            width: '100%',
                                                            height: 30,
                                                            border: 'none',
                                                            marginLeft: 20,
                                                        }}
                                                        type='text'
                                                        required
                                                        className='no-outline'
                                                        onChange={(event) => this.setState({ send: false, province: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12} sm={12} style={{ marginTop: 20, marginBotton: 20, alignItems: 'start', display: 'flex', flexDirection: 'column' }}>
                                                <p className='textForm'>¿Que funcion desempeña dentro del rubro veterinario?</p>
                                            </Grid>
                                            <Grid style={{ flex: 1, flexDirection: 'row', display: 'flex' }}>
                                                <Grid style={{ alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                    <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                        <input type="radio" checked={this.state.check1} onChange={(value) => this.radioButton('check1', value)} /><span className='radioB'>Estudiante de veterinaria</span>
                                                    </div>
                                                    <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                        <input type="radio" checked={this.state.check2} onChange={(value) => this.radioButton('check2', value)} /><span className='radioB'>Productor</span>
                                                    </div>
                                                    <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                        <input type="radio" checked={this.state.check3} onChange={(value) => this.radioButton('check3', value)} /><span className='radioB'>Vendedor / Asistente Comercial en Distribuidor</span>
                                                    </div>
                                                </Grid>
                                                <Grid style={{ alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                    <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                        <input type="radio" checked={this.state.check4} onChange={(value) => this.radioButton('check4', value)} /><span className='radioB'>Representante del canal de Distribución</span>
                                                    </div>
                                                    <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                        <input type="radio" checked={this.state.check5} onChange={(value) => this.radioButton('check5', value)} /><span className='radioB'>Proveedor</span>
                                                    </div>
                                                    <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                        <input type="radio" checked={this.state.check6} onChange={(value) => this.radioButton('check6', value)} /><span className='radioB'>Médico Veterinario en clínica / particular</span>
                                                    </div>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12} sm={12} style={{ marginTop: 20, marginBotton: 20, alignItems: 'start', display: 'flex', flexDirection: 'column' }}>
                                                <p className='textForm'>Si usted es médico veterinario, usted se especializa en:</p>
                                            </Grid>
                                            <Grid style={{ flex: 1, alignItems: 'start', flexDirection: 'row', display: 'flex' }}>
                                                <Grid style={{ flex: 0.5, alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                    <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                        <input type="radio" checked={this.state.check7} onChange={(value) => this.radioButton('check7', value)} /><span className='radioB'>Grandes Animales</span>
                                                    </div>
                                                    <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                        <input type="radio" checked={this.state.check8} onChange={(value) => this.radioButton('check8', value)} /><span className='radioB'>Pequeños Animales</span>
                                                    </div>
                                                </Grid>
                                                <Grid style={{ flex: 0.5, alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                    <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                        <input type="radio" checked={this.state.check9} onChange={(value) => this.radioButton('check9', value)} /><span className='radioB'>Ambos </span>
                                                    </div>
                                                    <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                        <input type="radio" checked={this.state.check10} onChange={(value) => this.radioButton('check10', value)} /><span className='radioB'>Otros</span>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={12} style={{marginTop: 20,  alignItems: 'start', marginRigh: 40 }}>
                                                <div style={{ width: '100%', height: 40, display: 'flex', flexDirection: 'row', marginTop: 0, alignItems: 'start' }}>
                                                    <Grid item xs={1} sm={1} style={{ display: 'flex', padding: 10, alignItems: 'start' }}>
                                                        <div onClick={() => this.setState({ terms: !this.state.terms })} style={{ cursor: 'pointer', width: 16, height: 16, borderStyle: 'solid', borderWidth: 0, borderColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: ' 0 1px 4px 0 #000000' }}>
                                                            <img src={check} style={{ width: '100%', display: this.state.terms ? 'flex' : 'none' }}></img>
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={11} sm={11} style={{marginLeft: 10, display: 'flex', alignItems: 'start', marginTop: 10 }}>
                                                        <p className='textForm' style={{ textAlign: 'left' }}>Acepto bases y condiciones</p>
                                                    </Grid>
                                                </div>
                                                {this.state.error &&
                                                    <div style={{ width: '85%', display: 'flex', justifyContent: 'center' }}>
                                                        <p style={{ marginTop: 20, color: 'red', fontFamily: 'FiraSansBook', fontSize: 14 }}>{this.state.error}</p>
                                                    </div>
                                                }

                                                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
                                                        <p style={{ fontFamily: 'FiraSansBook', fontSize: 10, color: '#465658', margin: 0, textAlign: 'left' }}>El aviso legal predeterminado que hay a continuación se mostrará a todo aquel que se inscriba al evento. Al marcar esta casilla envia su información al organizador del evento quien la utlizará para comunicarse con usted sobre este evento.</p>
                                                    </div>
                                                                                                    <Grid item xs={9} sm={11} style={{ display: 'flex', alignItems: 'center' }}>
                                                    </Grid>

                                                {this.state.loading ?
                                                    <Loader
                                                        type="Puff"
                                                        color="#465658"
                                                        height={60}
                                                        width={60}
                                                    />
                                                    :
                                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
                                                        <button disabled={disabledbutton} type='submit' style={{ padding: 0, cursor: 'pointer', border: 'none', background: 'transparent' }}>
                                                            <img width='140px' height='auto' src={Registrarse}></img>
                                                        </button>
                                                    </div>

                                                }



                                            </Grid>

                                        </Grid>
                                    </Grid>


                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </form>
            );
        } else {
            return (
                <div>
                    <div style={{ display: 'flex', height: window.innerHeight }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundImage: `url(${backgroundRegisterOk})`, backgroundSize: 'cover' }}>
                            <Grid item xs={11} sm={11} style={{ width: '100%', }}>
                                <img style={{ width: 118 * 0.7, height: 84 * 0.7, position: 'absolute', bottom: 10, right: 10 }} src={logoNovo}></img>
                                <Grid container alignItems='center' direction='row' justify='center' style={{ width: '100%' }}>
                                    <Grid item xs={12} sm={6} style={{ marginTop: min ? 25 : 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <Grid container direction='row' alignContent='center' style={{ padding: 35, height: 330, width: 650, maxWidth: window.innerWidth, backgroundImage: `url(${backgroundCheck})`, backgroundSize: 'cover' }} >
                                            <Grid item sm={5} xs={12} style={{ marginTop: -20 }}>
                                                <Grid container justify='center' alignItems='center' style={{ width: '100%' }}>
                                                    <img width='70%' height='auto' style={{ maxWidth: 120 }} src={TILDE}></img>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={7} xs={12} style={{ marginTop: !width && -20 }}>
                                                <Grid container alignItems='center' justify='center' style={{ width: min ? '85%' : '100%' }}>
                                                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                                        <p style={{ fontFamily: 'FiraSansBook', letterSpacing: 0.9, fontSize: 20, color: 'white', margin: 0, textAlign: !width ? 'left' : 'center', width: '70%' }}>TE REGISTRASTE SATISFACTORIAMENTE.</p>
                                                        <p style={{ fontFamily: 'FiraSansBook', fontSize: 16, color: 'white', margin: 0, textAlign: !width ? 'left' : 'center', width: '70%', marginTop: !width && 10 }}>Revise su correo electrónico para confirmar su e-mail</p>
                                                        <p style={{ fontFamily: 'FiraSansBook', fontSize: 14, color: 'white', margin: 0, textAlign: !width ? 'left' : 'center', width: '70%', marginTop: !width && 10 }}>No olvides chequear la carpeta SPAM</p>


                                                        
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