import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Background from '../assets/backgroundRegister.png'
import Background2 from '../assets/background_event_program.png'
import backgroundCheck from '../assets/backgroundCheck.png'
import logoGridoGrande from '../assets/EC21_register.png'

import logoHeader from '../assets/logo_ozempic_header.png'
import logoNovo from '../assets/logoGrido.png'
import check from '../assets/check.png'
import { colors } from '../utils'
import LogoOzempicHeader from '../assets/logo_ozempic_header.png'
import Registrarse from '../assets/registrarse.png'
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
            this.state.mail === "" ||
            this.state.name === "" ||
            this.state.city === "" ||
            this.state.country === "" ||
            this.state.question1 === "" ||
            this.state.question2 === "" ||
            this.state.mod === "" ||
            this.state.address === "" ||
            this.state.addressNumber === "" ||
            this.state.phone === "" ||
            this.state.terms === false ||
            email.test(this.state.mail) === false
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

        const body = {
            name: this.state.name,
            day: this.state.day,
            month: this.state.mounth,
            year: this.state.year,

            street: this.state.address,
            street_number: this.state.addressNumber,
            street_dpto: this.state.depto,
            city: this.state.city,
            country: this.state.country,
            phone: this.state.phone,
            email: this.state.mail,
            work: this.state.mod,
            question1: this.state.question1,
            question2: this.state.question2,
            otherhabito: this.state.otherhabito,
            habito: this.state.habito,
            manzana: this.state.manzana,
            barrio: this.state.barrio,
            lote: this.state.lote,
            zipcode: this.state.zipcode
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
                    this.setState({ error: response + "", loading: false })
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
    onSubmit(event) {
        event.preventDefault()
        if (this.state.terms) {
            this.register()
        } else {
            alert('Debes aceptar los Terminos y Condiciones')
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
            <div style={{flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <img height='auto' width='100%' style={{ maxWidth: 500 }} src={logoGridoGrande} />
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
                        <div style={{ display: 'flex', justifyContent: 'center', backgroundImage: `url(${Background})`, height: '100%', width: '100%', backgroundSize: 'cover' }}>
                            <Grid container direction='row' styl={{ height: '100%' }}>
                                {header}
                                <Grid item xs={12} sm={9} md={8} lg={7} tyle={{}} >
                                    <Grid container direction='column' justify='center' alignItems='center' style={{ height: '100%', marginTop: 20 }}>
                                        <Grid item style={{ background: 'white', width: '90%', padding: 30, borderRadius: 30 }}>
                                            <div style={{ marginTop: 0 }}>
                                                <p className='titleFormTitle'>REGISTRATE</p>
                                            </div>
                                            <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                <Grid item xs={12} sm={4} style={{ alignItems: 'start', display: 'flex', flexDirection: 'column' }}>
                                                    <p className='textForm'> Nombre y Apellido</p>
                                                    <p className='textFormError'>{this.state.name == '' && this.state.send ? "Campo requerido" : ""}</p>
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
                                                        onChange={(event) => this.setState({ send: false, name: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                            </Grid>
                                            <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                <Grid item xs={12} sm={3} style={{ flexDirection: 'column', alignItems: 'start', display: 'flex', justifyContent: 'flex-start', marginTop: width && (10) }}>
                                                    <p className='textForm' >Fecha de nacimiento</p>
                                                    <p className='textFormError'>{this.state.name == '' && this.state.send ? "Campo requerido" : ""}</p>
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
                                                        onChange={(event) => this.setState({ send: false, mounth: event.target.value })}
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
                                            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                                <Grid item xs={3} sm={3} style={{ flexDirection: 'column', alignItems: 'start', display: 'flex' }}>
                                                    <p className='textForm'>D.N.I.</p>
                                                    <p className='textFormError'>{this.state.name == '' && this.state.send ? "Campo requerido" : ""}</p>

                                                </Grid>
                                                <Grid item xs={9} sm={9} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 0, borderStyle: 'solid', }}>
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
                                                        onChange={(event) => this.setState({ send: false, dni: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>

                                            </div>
                                            <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                <Grid item xs={2} sm={1} style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                                    <p className='textForm'>Calle</p>
                                                    <p className='textFormError'>{this.state.name == '' && this.state.send ? "Campo requerido" : ""}</p>

                                                </Grid>
                                                <Grid item xs={10} sm={5} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 0, borderStyle: 'solid', }}>
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
                                                        onChange={(event) => this.setState({ send: false, address: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                                <Grid item xs={2} sm={1} style={{ display: 'flex', justifyContent: 'center', marginTop: width && (10) }}>
                                                    <p className='textForm'>Nro.</p>

                                                </Grid>
                                                <Grid item xs={10} sm={2} style={{ marginTop: width && (10) }}>
                                                    <input
                                                        style={{
                                                            backgroundColor: '#CDCDCD',
                                                            width: '100%',
                                                            height: 30,
                                                            border: 'none',
                                                        }}
                                                        type='text'
                                                        className='no-outline'
                                                        required
                                                        onChange={(event) => this.setState({ send: false, addressNumber: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                                <Grid item xs={2} sm={1} style={{ display: 'flex', justifyContent: 'center', marginTop: width && (10) }}>
                                                    <p className='textForm' >Depto.</p>
                                                </Grid>
                                                <Grid item xs={10} sm={2} style={{ marginTop: width && (10) }}>
                                                    <input
                                                        style={{
                                                            backgroundColor: '#CDCDCD',
                                                            width: '100%',
                                                            height: 30,
                                                            border: 'none',
                                                        }}
                                                        type='text'

                                                        className='no-outline'
                                                        onChange={(event) => this.setState({ send: false, depto: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                            </Grid>
                                            


                                            <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                <Grid item xs={4} sm={1} style={{ flexDirection: 'column', alignItems: 'start', display: 'flex' }}>
                                                    <p className='textForm'>Manz.</p>
                                                    <p className='textFormError'>{this.state.name == '' && this.state.send ? "Campo requerido" : ""}</p>
                                                </Grid>
                                                <Grid item xs={8} sm={1} style={{}}>
                                                    <input
                                                        style={{
                                                            backgroundColor: '#CDCDCD',
                                                            width: '100%',
                                                            height: 30,
                                                            border: 'none',
                                                        }}
                                                        type='text'
                                                        className='no-outline'
                                                        onChange={(event) => this.setState({ send: false, manzana: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                                <Grid item xs={4} sm={1} style={{ flexDirection: 'column', alignItems: 'center', display: 'flex', justifyContent: !width ? 'flex-end' : '', marginTop: width && 10, }}>
                                                    <p className='textForm' >Lote</p>

                                                </Grid>
                                                <Grid item xs={8} sm={1} style={{ paddingLeft: !width && (10), marginTop: width && 10, }}>
                                                    <input
                                                        style={{
                                                            backgroundColor: '#CDCDCD',
                                                            width: '100%',
                                                            height: 30,
                                                            border: 'none',
                                                        }}
                                                        type='text'
                                                        className='no-outline'
                                                        onChange={(event) => this.setState({ send: false, lote: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                                <Grid item xs={4} sm={1} style={{ flexDirection: 'column', alignItems: 'center', display: 'flex', justifyContent: !width ? 'flex-end' : '', marginTop: width && 10, }}>
                                                    <p className='textForm' >Barrio</p>

                                                </Grid>
                                                <Grid item xs={8} sm={3} style={{ paddingLeft: !width && (10), marginTop: width && 10, }}>
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
                                                        onChange={(event) => this.setState({ send: false, barrio: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>

                                                <Grid item xs={4} sm={2} style={{ flexDirection: 'column', alignItems: 'center', display: 'flex', justifyContent: !width ? 'flex-end' : '', marginTop: width && 10, }}>
                                                    <p className='textForm' >Código postal</p>

                                                </Grid>
                                                <Grid item xs={8} sm={2} style={{ paddingLeft: !width && (10), marginTop: width && 10, }}>
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
                                                        onChange={(event) => this.setState({ send: false, zipcode: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>


                                            </Grid>







                                            <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                <Grid item xs={4} sm={2} style={{ flexDirection: 'column', alignItems: 'start', display: 'flex' }}>
                                                    <p className='textForm'>Localidad</p>
                                                    <p className='textFormError'>{this.state.name == '' && this.state.send ? "Campo requerido" : ""}</p>

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
                                                <Grid item xs={4} sm={1} style={{ flexDirection: 'column', alignItems: 'center', display: 'flex', justifyContent: !width ? 'flex-end' : '', marginTop: width && 10, }}>
                                                    <p className='textForm' >País</p>

                                                </Grid>
                                                <Grid item xs={8} sm={5} style={{ paddingLeft: !width && (10), marginTop: width && 10, }}>
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
                                                        onChange={(event) => this.setState({ send: false, country: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                            </Grid>
                                            <Grid container direction='row' alignItems='center' style={{ marginTop: 10, }}>
                                                <Grid item xs={3} sm={2} style={{ flexDirection: 'column', alignItems: 'start', display: 'flex' }}>
                                                    <p className='textForm'>Teléfono</p>
                                                    <p className='textFormError'>{this.state.name == '' && this.state.send ? "Campo requerido" : ""}</p>

                                                </Grid>
                                                <Grid item xs={9} sm={4} style={{}}>
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
                                                        onChange={(event) => this.setState({ send: false, phone: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                                <Grid item xs={3} sm={1} style={{ paddingLeft: 10, flexDirection: 'column', alignItems: 'start', display: 'flex', justifyContent: !width ? 'flex-end' : '', marginTop: width && (10) }}>
                                                    <p className='textForm'>Email</p>
                                                    <p className='textFormError'>{(this.state.mail == '' || !email.test(this.state.mail)) && this.state.send ? "Campo requerido" : ""}</p>

                                                </Grid>
                                                <Grid item xs={9} sm={5} style={{ paddingLeft: !width && (10), marginTop: width && (10) }}>
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
                                                        onChange={(event) => this.setState({ send: false, mail: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                            </Grid>
                                            <Grid container direction='row' alignItems='center' style={{ width: '100%', marginTop: 10, borderTop: 'solid  1px #CDCDCD', borderBottom: 'solid 1px #CDCDCD', paddingBottom: 10, paddingTop: 10 }}>
                                                <Grid item xs={12} sm={3} style={{ flexDirection: 'column', alignItems: 'start', marginTop: width && 10 }}>
                                                    <p className='textForm'>Modalidad de trabajo</p>
                                                    <p className='textFormError'>{this.state.mod == '' && this.state.send ? "Campo requerido" : ""}</p>

                                                </Grid>
                                                <Grid item xs={3} sm={2} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: width && 10 }}>
                                                    <p className='textForm'>Presencial</p>
                                                </Grid>
                                                <Grid item xs={3} sm={1} style={{ borderRight: 'solid  1px #CDCDCD', display: 'flex', justifyContent: 'center', marginTop: width && 10 }}>
                                                    <div onClick={() => this.setState({ send: false, mod: 'Presencial' })} style={{ cursor: 'pointer', width: 16, height: 16, borderStyle: 'solid', borderWidth: 0, borderColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: ' 0 1px 4px 0 #000000' }}>
                                                        {this.state.mod === 'Presencial' && (
                                                            <img src={check} style={{ width: '100%', }}></img>
                                                        )}
                                                    </div>
                                                </Grid>
                                                <Grid item xs={3} sm={2} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: width && 10 }}>
                                                    <p className='textForm'>Remoto</p>
                                                </Grid>
                                                <Grid item xs={3} sm={1} style={{ borderRight: 'solid  1px #CDCDCD', display: 'flex', justifyContent: 'center' }}>
                                                    <div onClick={() => this.setState({ send: false, mod: 'Remoto' })} style={{ cursor: 'pointer', width: 16, height: 16, borderStyle: 'solid', borderWidth: 0, borderColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: ' 0 1px 4px 0 #000000' }}>
                                                        {this.state.mod === 'Remoto' && (
                                                            <img src={check} style={{ width: '100%', }}></img>
                                                        )}
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} sm={2} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: width && 10 }}>
                                                    <p className='textForm'>Mixto</p>
                                                </Grid>
                                                <Grid item xs={6} sm={1} style={{ display: 'flex', justifyContent: 'center', marginTop: width && 10 }}>
                                                    <div onClick={() => this.setState({ send: false, mod: 'Mixto' })} style={{ cursor: 'pointer', width: 16, height: 16, borderStyle: 'solid', borderWidth: 0, borderColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: ' 0 1px 4px 0 #000000' }}>
                                                        {this.state.mod === 'Mixto' && (
                                                            <img src={check} style={{ width: '100%', }}></img>
                                                        )}
                                                    </div>
                                                </Grid>
                                            </Grid>
                                            <Grid container direction='row' alignItems='center' style={{ width: '100%', marginTop: 10,  borderBottom: 'solid 1px #CDCDCD', paddingBottom: 10, paddingTop: 10 }}>
                                                <Grid item xs={12} sm={8} style={{ flexDirection: 'column', alignItems: 'start', marginTop: width && 10 }}>
                                                    <p className='textForm'><span>Tenés algún hábito/regimen alimentario (Ej. vegetariano/a; vegano/a)?&nbsp;</span><span style={{color:'#CDCDCD'}}>Si la respuesta es "Si", especificar cual</span> </p>
                                                    <p className='textFormError'>{this.state.mod == '' && this.state.send ? "Campo requerido" : ""}</p>

                                                </Grid>
                                                <Grid item xs={3} sm={1} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: width && 10 }}>
                                                    <p className='textForm'>Si</p>
                                                </Grid>
                                                <Grid item xs={3} sm={1} style={{ borderRight: 'solid  1px #CDCDCD', display: 'flex', justifyContent: 'center', marginTop: width && 10 }}>
                                                    <div onClick={() => this.setState({ send: false, habito: 'Si' })} style={{ cursor: 'pointer', width: 16, height: 16, borderStyle: 'solid', borderWidth: 0, borderColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: ' 0 1px 4px 0 #000000' }}>
                                                        {this.state.habito === 'Si' && (
                                                            <img src={check} style={{ width: '100%', }}></img>
                                                        )}
                                                    </div>
                                                </Grid>
                                                <Grid item xs={3} sm={1} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: width && 10 }}>
                                                    <p className='textForm'>No</p>
                                                </Grid>
                                                <Grid item xs={3} sm={1} style={{ borderRight: 'solid  1px #CDCDCD', display: 'flex', justifyContent: 'center' }}>
                                                    <div onClick={() => this.setState({ send: false, habito: 'No' })} style={{ cursor: 'pointer', width: 16, height: 16, borderStyle: 'solid', borderWidth: 0, borderColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: ' 0 1px 4px 0 #000000' }}>
                                                        {this.state.habito === 'No' && (
                                                            <img src={check} style={{ width: '100%', }}></img>
                                                        )}
                                                    </div>
                                                </Grid>
                                                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>

                                                <Grid item xs={12} sm={12} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 0, borderStyle: 'solid', }}>
                                                    <p className='textFormError'>{this.state.habito == 'Si' && this.state.otherhabito == '' && this.state.send ? "Campo requerido" : ""}</p>
                                                    <input
                                                        style={{
                                                            backgroundColor: '#CDCDCD',
                                                            width: '100%',
                                                            height: '100%',
                                                            border: 'none',
                                                        }}
                                                        type='text'
                                                        className='no-outline'
                                                        onChange={(event) => this.setState({ send: false, otherhabito: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                            </div>
                                            </Grid>
                                            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                                <Grid item xs={12} sm={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                                    <p className='textForm'>Contanos en UNA frase cuáles son tus expectativas para este “EC21”</p>
                                                    <p className='textFormError'>{this.state.name == '' && this.state.send ? "Campo requerido" : ""}</p>

                                                </Grid>
                                            </div>
                                            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                                <Grid item xs={12} sm={12} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 0, borderStyle: 'solid', }}>
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
                                                        onChange={(event) => this.setState({ send: false, question1: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                            </div>
                                            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center', }}>
                                                <Grid item xs={12} sm={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                                    <p className='textForm' >¿Con quién vas a compartir este evento?</p>
                                                    <p className='textFormError'>{this.state.name == '' && this.state.send ? "Campo requerido" : ""}</p>

                                                </Grid>
                                            </div>
                                            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                                <Grid item xs={12} sm={12} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 0, borderStyle: 'solid', }}>
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
                                                        onChange={(event) => this.setState({ send: false, question2: event.target.value })}
                                                    >
                                                    </input>
                                                </Grid>
                                            </div>

                                            <div style={{ width: '100%', height: 40, display: 'flex', flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
                                                <Grid item xs={'auto'} sm={'auto'} style={{ display: 'flex', padding: 10, alignItems: 'center' }}>
                                                    <div onClick={() => this.setState({ terms: !this.state.terms })} style={{ cursor: 'pointer', width: 16, height: 16, borderStyle: 'solid', borderWidth: 0, borderColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: ' 0 1px 4px 0 #000000' }}>
                                                        <img src={check} style={{ width: '100%', display: this.state.terms ? 'flex' : 'none' }}></img>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={9} sm={11} style={{ display: 'flex', alignItems: 'center' }}>
                                                    <p className='textForm'>Acepto bases y condiciones</p>
                                                </Grid>
                                            </div>
                                            {this.state.error &&
                                                <div style={{ width: '85%', display: 'flex', justifyContent: 'center' }}>
                                                    <p style={{ marginTop: 20, color: 'red', fontFamily: 'FrutigerBlack', fontSize: 14 }}>{this.state.error}</p>
                                                </div>
                                            }

                                            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
                                                <p className='textTerm'>El aviso legal predeterminado que hay a continuación se mostrará a todo aquel que se inscriba al evento. Al marcar esta casilla envía su información al organizador del evento quien la utilizará para comunicarse con usted sobre este evento</p>
                                            </div>
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
                        </div>
                    </div>
                </form>
            );
        } else {
            return (
                <div>
                    <div style={{ display: 'flex', height: window.innerHeight }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundImage: `url(${Background2})`, backgroundSize: 'cover' }}>
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
                                                        <p style={{ fontFamily: 'FrutigerBlack', letterSpacing: 0.9, fontSize: 20, color: 'white', margin: 0, textAlign: !width ? 'left' : 'center', width: '70%' }}>TE REGISTRASTE SATISFACTORIAMENTE.</p>
                                                        <p style={{ fontFamily: 'FrutigerBold', fontSize: 16, color: 'white', margin: 0, textAlign: !width ? 'left' : 'center', width: '70%', marginTop: !width && 10 }}>Revise su correo electrónico para confirmar su e-mail</p>
                                                        <p style={{ fontFamily: 'FrutigerLight', fontSize: 13, color: 'white', margin: 0, textAlign: !width ? 'left' : 'center', width: '70%', marginTop: !width && 10 }}>(En caso de no encontrarlo, chequea la carpeta de spam)</p>

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