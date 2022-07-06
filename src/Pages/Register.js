import React, { Component, useState } from 'react';
import {components } from "react-select";
import axios from 'axios';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Background from '../assets/backgroundRegister.svg';
import Background2 from '../assets/background_event_program.png';
import backgroundCheck from '../assets/backgroundCheck.png';
import backgroundRegisterOk from '../assets/backgroundRegisterOk.svg';
import LogoTop from '../assets/LogoVete.svg'
import logoVeteGrande from '../assets/LogoVete.png';

import CheckMail from '../assets/Checkmail.png';
import logoNovo from '../assets/logoZoon.svg'
import check from '../assets/check.png'
import { colors } from '../utils'

import Registrarse from '../assets/buttonRegister.png'
import './Main.css'
import TILDE from '../assets/TILDE.png'
import Loader from "react-loader-spinner";
import moment from 'moment';

import { default as ReactSelect } from "react-select";

import { products} from "../utils/products";
import { ConsoleLogger } from '@aws-amplify/core';

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
              <label>{props.label}</label>
      </components.Option>
    </div>
  );
};




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
            presencial: false,
            streaming: true,
            productSi: true,
            productNo: false,
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
            check10: false,
            check11: false

        };
    }


handleChange = (selected) => {
    this.setState({
      optionSelected: selected
    });
    };

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
        var question1 = 1;
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
        if (this.state.check11) {
            question1 = 11
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
        if (this.state.check12) {
            question2 = 12
        }
        var obj = this.state.optionSelected


        var p1 = ""
        var p2 = ""
        var p3 = ""
        var p4 = ""
        var p5 = ""
        var p6 = ""
        var p7 = ""
        var p8 = ""
        var p9 = ""
        var p10 = ""



        for (let i = 0; i<obj.length; i++) {

            if (obj[i].value == 1) {
               var p1 = "x"


            }
              if (obj[i].value == 2) {
               var p2 = "x"

            }
              if (obj[i].value == 3) {
                 var p3 = "x"

            }
             if (obj[i].value == 4) {
                 var p4 = "x"

            }
              if (obj[i].value == 5) {
                  var p5 = "x"

            }
              if (obj[i].value == 6) {
                  var p6 = "x"

            }
             if (obj[i].value == 7) {
                 var p7 = "x"

            }
              if (obj[i].value == 8) {
                  var p8 = "x"

            }
              if (obj[i].value == 9) {
                  var p9 = "x"

            }
              if (obj[i].value == 10) {
                  var p10 = "x"

            }
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
            email: this.state.email,
            presencial: this.state.presencial,
            productsi: this.state.productSi,
            producto1: p1,
            producto2: p2,
            producto3: p3,
            producto4: p4,
            producto5: p5,
            producto6: p6,
            producto7: p7,
            producto8: p8,
            producto9: p9,
            producto10: p10

        }



        var response = fetch("https://pom2lkx5ei.execute-api.us-east-1.amazonaws.com/production/register", {

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
                check11: false

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
                check11: false

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
                check11: false

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
                check11: false

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
                check11: false

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
                check11: false
            })
        }
        if (field == "check11") {
            this.setState({
                check1: false,
                check2: false,
                check3: false,
                check4: false,
                check5: false,
                check6: false,
                check11: true,
            })
        }
        if (field == "check7") {
            this.setState({
                check7: true,
                check8: false,
                check9: false,
                check10: false,
                check12: false,
            })
        }
        if (field == "check8") {
            this.setState({
                check7: false,
                check8: true,
                check9: false,
                check10: false,
                check12: false,

            })
        }
        if (field == "check9") {
            this.setState({
                check7: false,
                check8: false,
                check9: true,
                check10: false,
                check12: false,

            })
        }
        if (field == "check10") {
            this.setState({
                check7: false,
                check8: false,
                check9: false,
                check10: true,
                check12: false,
            })
        }
        if (field == "check12") {
            this.setState({
                check7: false,
                check8: false,
                check9: false,
                check10: false,
                check12: true,

            })
        }
         if (field == "streaming") {
            this.setState({
                presencial: false,
                streaming: true,
            })
        }
        if (field == "presencial") {
            this.setState({
                streaming: false,
                presencial: true,
            })
        }
            if (field == "productSi") {
            this.setState({
                productSi: true,
                productNo: false,
            })
        }
        if (field == "productNo") {
            this.setState({
                productSi: false,
                productNo: true,
            })
        }


    }

    render() {

        const height = window.innerHeight
        const min = window.innerWidth >= 1000
        const minxs =window.innerWidth <= 700
        var disabledbutton = false;
        const email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        const width = window.innerWidth < 1000



        var header = <Grid item xs={12} sm={3} l={3} md={3} lg={4} style={{ height: '100%', display: 'flex' }} >
            <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <img height='auto' width='100%' style={{ marginTop: 50, maxWidth: 500 }} src={logoVeteGrande} />
                 <img style={{ width: 90, height: 90 * 0.64, position: 'absolute', bottom: 10, right: 10 }} src={logoNovo}></img>
            </div>
        </Grid>

        const h = window.innerHeight;

        if (window.matchMedia('screen and (max-width: 768px)').matches) {
            header = <Grid item xs={12} sm={3} md={4} l={4} lg={4}  >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                </div>
            </Grid>
        }

        if (min) {

            if (!this.state.register) {
                return (
                    <form onSubmit={(event) => this.onSubmit(event)}>
                        <div style={{ overflowY: 'scroll', display: 'flex' }}>

                            <div style={{ display: 'flex', justifyContent: 'center', backgroundImage: `url(${Background})`,minHeight: h, height: '100%', width: '100%',backgroundSize: 'cover' }}>

                                <Grid container direction='row' style={{ height: '100%' }}>
                                    {header}
                                    <Grid item xs={12} sm={9} md={9} l={9} lg={8} style={{}} >
                                        <Grid container direction='column' justifyContent='center' alignItems='center' style={{ height: '100%', marginTop: 20 }}>

                                            <Grid item style={{ background: 'white', width: '90%', padding: 30, borderRadius: 30 }}>
                                                <div style={{ marginTop: 0 }}>
                                                    <p className='titleFormTitle'>REGISTRATE</p>
                                                </div>
                                                <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                    <Grid item xs={12} sm={2} style={{ alignItems: 'start', display: 'flex', flexDirection: 'column' }}>
                                                        <p className='textForm'> Nombre</p>
                                                        <p className='textFormError'>{this.state.first_name == '' && this.state.send ? "Campo requerido" : ""}</p>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 1, borderStyle: 'solid', }}>
                                                        <input
                                                          style={{
                                                                height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 1, borderStyle: 'solid',
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
                                                    <Grid item xs={12} sm={2} style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <p className='textForm'> Apellido</p>
                                                        <p className='textFormError'>{this.state.last_name == '' && this.state.send ? "Campo requerido" : ""}</p>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 1, borderStyle: 'solid', }}>
                                                        <input
                                                            style={{
                                                                height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 1, borderStyle: 'solid',
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
                                                    <Grid item xs={12} sm={8} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 1, borderStyle: 'solid', }}>
                                                        <input
                                                         style={{
                                                                height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 1, borderStyle: 'solid',
                                                                backgroundColor: '#CDCDCD',
                                                                width: '100%',
                                                                height: '100%',
                                                                border: 'none',
                                                            }}
                                                            type='email'
                                                            required
                                                            placeholder={'ej.: ejemplo@gmail.com'}
                                                            className='no-outline'
                                                            onChange={(event) => this.setState({ send: false, email: event.target.value })}
                                                        >
                                                        </input>
                                                    </Grid>
                                                </Grid>

                                                <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                    <Grid item xs={12} sm={2} style={{ alignItems: 'start', display: 'flex', flexDirection: 'column' }}>

                                                        <p className='textForm'> Tel. Código de área 0</p>
                                                        <p className='textFormError'>{(this.state.phone1 == '' || this.state.phone2 == '') && this.state.send ? "Campo requerido" : ""}</p>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 1, }}>
                                                        <input
                                                             style={{  height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 1, borderStyle: 'solid',  backgroundColor: '#CDCDCD', }}
                                                                    type='number'
                                                                    required
                                                                    className='no-outline'
                                                                    onChange={(event) => this.setState({ send: false, phone1: event.target.value })}
                                                        >
                                                        </input>
                                                    </Grid>
                                                    <Grid item xs={12} sm={2} style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <p className='textForm'> 15</p>
                                                        <p className='textFormError'>{this.state.phone2 == '' && this.state.send ? "Campo requerido" : ""}</p>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 1 }}>
                                                        <input
                                                             style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 1, borderStyle: 'solid',  backgroundColor: '#CDCDCD', }}
                                                             type='number'
                                                            required
                                                            className='no-outline'

                                                            onChange={(event) => this.setState({ send: false, phone2: event.target.value })}
                                                        >
                                                        </input>
                                                    </Grid>
                                                </Grid>




                                                <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                    <Grid item xs={12} sm={5} style={{ flexDirection: 'column', alignItems: 'start', display: 'flex', justifyContent: 'flex-start', marginTop: width && (10) }}>
                                                        <p className='textForm' >Fecha de nacimiento</p>
                                                    </Grid>
                                                    <Grid item xs={2} sm={1} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 10 }}>
                                                        <p className='textForm'>Día</p>
                                                    </Grid>
                                                    <Grid item xs={2} sm={1} >
                                                        <input
                                                            style={{borderRadius: 8, borderWidth:1, borderColor: colors.gray,borderStyle: 'solid'}}
                                                            className="boxForm"
                                                            type='number'
                                                            required
                                                            min={1}
                                                            max={31}
                                                            onChange={(event) => this.setState({ send: false, day: event.target.value })}
                                                        >
                                                        </input>
                                                    </Grid>
                                                    <Grid item xs={2} sm={1} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 10 }}>
                                                        <p className='textForm' >Mes</p>
                                                    </Grid>

                                                    <Grid item xs={2} sm={1} style={{}}>
                                                        <input
                                                              style={{borderRadius: 8, borderWidth:1, borderColor: colors.gray,borderStyle: 'solid'}}
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

                                                    <Grid item xs={2} sm={1} >
                                                        <input
                                                           style={{width:'70px', borderRadius: 8, borderWidth:1, borderColor: colors.gray,borderStyle: 'solid'}}
                                                            className="boxForm"
                                                            type='number'
                                                            required
                                                            min={1900}
                                                            max={2000}
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
                                                                borderRadius: 8, borderColor: colors.gray, borderWidth: 1, borderStyle: 'solid',
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
                                                                marginLeft: 20,
                                                                borderRadius: 8, borderColor: colors.gray, borderWidth: 1, borderStyle: 'solid',
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
                                                    <Grid style={{ marginLeft: '10%', alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.check4} onChange={(value) => this.radioButton('check4', value)} /><span className='radioB'>Canal Distribuidor</span>
                                                        </div>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.check5} onChange={(value) => this.radioButton('check5', value)} /><span className='radioB'>Proveedor</span>
                                                        </div>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.check6} onChange={(value) => this.radioButton('check6', value)} /><span className='radioB'>Médico Veterinario particular</span>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                                <Grid style={{ alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                    <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                        <input type="radio" checked={this.state.check11} onChange={(value) => this.radioButton('check11', value)} /><span className='radioB'>Otros</span>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginTop: 20, marginBotton: 20, alignItems: 'start', display: 'flex', flexDirection: 'column' }}>
                                                    <p className='textForm'>Si usted es médico veterinario, se especializa en:</p>
                                                </Grid>
                                                <Grid style={{ flex: 1, alignItems: 'start', flexDirection: 'row', display: 'flex' }}>
                                                    <Grid style={{ alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.check7} onChange={(value) => this.radioButton('check7', value)} /><span className='radioB'>Grandes Animales</span>
                                                        </div>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.check8} onChange={(value) => this.radioButton('check8', value)} /><span className='radioB'>Pequeños Animales</span>
                                                        </div>
                                                    </Grid>
                                                   <Grid style={{ marginLeft: '10%', alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.check9} onChange={(value) => this.radioButton('check9', value)} /><span className='radioB'>Ambos </span>
                                                        </div>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.check10} onChange={(value) => this.radioButton('check10', value)} /><span className='radioB'>Otros</span>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                                <Grid style={{ alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                    <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                        <input type="radio" checked={this.state.check12} onChange={(value) => this.radioButton('check12', value)} /><span className='radioB'>Ninguna</span>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={10} sm={10} style={{ marginLeft: 0, display: 'flex', alignItems: 'start', marginTop: 10 }}>
                                                            <p className='textForm' style={{ textAlign: 'left' }}>Asistire al evento en modo:</p>

                                                </Grid>

                                                  <Grid style={{ flex: 1, alignItems: 'start', flexDirection: 'row', display: 'flex' }}>
                                                    <Grid style={{ flex: 0.5, alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                         <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.streaming} onChange={(value) => this.radioButton('streaming', value)} /><span className='radioB'>Streaming</span>
                                                        </div>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.presencial} onChange={(value) => this.radioButton('presencial', value)} /><span className='radioB'>Presencial</span>
                                                        </div>

                                                    </Grid>

                                                </Grid>
                                                <Grid item xs={10} sm={10} style={{ marginLeft: 0, display: 'flex', alignItems: 'start', marginTop: 10 }}>
                                                            <p className='textForm' style={{ textAlign: 'left' }}>Utiliza productos Zoovet?</p>

                                                </Grid>

                                                  <Grid style={{ flex: 1, alignItems: 'start', flexDirection: 'row', display: 'flex' }}>
                                                    <Grid style={{ flex: 0.5, alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                            <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                                <input type="radio" checked={this.state.productNo} onChange={(value) => this.radioButton('productNo', value)} /><span className='radioB'>No</span>
                                                            </div>

                                                             <div  style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                                <input type="radio" checked={this.state.productSi} onChange={(value) => this.radioButton('productSi', value)} /><span className='radioB'>Si</span>
                                                            </div>
                                                      {this.state.productSi ?
                                                            <span
                                                                    class="d-inline-block"
                                                                    data-toggle="popover"
                                                                    data-trigger="focus"
                                                                    data-content="Seleccione Productos"
                                                                    style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}
                                                                    placeholder="Seleccione productos"
                                                                >
                                                                    <ReactSelect
                                                                    options={products}
                                                                    isMulti
                                                                    closeMenuOnSelect={false}
                                                                    hideSelectedOptions={false}
                                                                    components={{
                                                                        Option
                                                                    }}
                                                                    onChange={this.handleChange}
                                                                    allowSelectAll={true}
                                                                    value={this.state.optionSelected}
                                                                    />
                                                            </span>
                                                            :
                                                            <span></span>
                                                            }
                                                    </Grid>

                                                </Grid>

                                                <Grid item xs={12} sm={12} style={{ marginTop: 20, alignItems: 'start', marginRigh: 40 }}>
                                                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 0, alignItems: 'start' }}>
                                                        <Grid item xs={2} sm={2} style={{ display: 'flex', padding: 10, alignItems: 'start' }}>
                                                            <div onClick={() => this.setState({ terms: !this.state.terms })} style={{ cursor: 'pointer', width: 16, height: 16, borderStyle: 'solid', borderWidth: 0, borderColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: ' 0 1px 4px 0 #000000' }}>
                                                                <img src={check} style={{ width: '100%', display: this.state.terms ? 'flex' : 'none' }}></img>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={10} sm={10} style={{ marginLeft: 0, display: 'flex', alignItems: 'start', marginTop: 10 }}>
                                                            <p className='textForm' style={{ textAlign: 'left' }}>Acepto bases y condiciones</p>
                                                        </Grid>
                                                    </div>
                                                    {this.state.error &&
                                                        <div style={{ width: '85%', display: 'flex', justifyContent: 'center' }}>
                                                            <p style={{ marginTop: 20, color: 'red', fontFamily: 'Montserrat-SemiBold', fontSize: 14 }}>{this.state.error}</p>
                                                        </div>
                                                    }

                                                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
                                                        <p style={{ fontFamily: 'FiraSansMedium', fontSize: 10, color: '#465658', margin: 0, textAlign: 'left' }}>El aviso legal predeterminado que hay a continuación se mostrará a todo aquel que se inscriba al evento. Al marcar esta casilla envia su información al organizador del evento quien la utlizará para comunicarse con usted sobre este evento.</p>
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

                                        <div className='d-flex justify-content-center'>
                                                 <img style={{ width: 800, height: 350, alignItems: 'center', }} src={CheckMail}></img>
                                        </div>
                                        <Grid item  style={{ }}>
                                            <img style={{ width: 118 * 0.7, height: 84 * 0.7, position: 'absolute', bottom: 10, right: 10 }} src={logoNovo}></img>
                                        </Grid>

                            </div>
                        </div>
                    </div>
                )
            }



        } else {



            if (!this.state.register) {
                return (
                    <form onSubmit={(event) => this.onSubmit(event)}>
                        <div style={{ overflowY: 'scroll', flex: 1, display: 'flex' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', backgroundImage: `url(${Background})`, minHeight: h, backgroundSize: 'cover' }}>
                                <Grid container direction='row' style={{ height: '100%' }}>
                                    {header}
                                    <Grid item xs={12} sm={9} md={8} lg={7} tyle={{}} >
                                        <Grid container direction='column' justifyContent='center' alignItems='center' style={{ height: '100%', marginTop: 20 }}>
                                            <Grid item style={{ background: 'white', width: '90%', padding: 30, borderRadius: 30 }}>
                                                <div style={{ marginTop: 0 }}>
                                                    <p className='titleFormTitle'>REGISTRATE</p>
                                                </div>
                                                <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                    <Grid item xs={12} sm={2} style={{ alignItems: 'start', display: 'flex', flexDirection: 'column' }}>
                                                        <p className='textForm'> Nombre</p>
                                                        <p className='textFormError'>{this.state.first_name == '' && this.state.send ? "Campo requerido" : ""}</p>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4} style={{height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 0, borderStyle: 'solid', }}>
                                                        <input
                                                            style={{
                                                                backgroundColor: '#CDCDCD',
                                                                width: '100%',
                                                                height: '100%',
                                                                       borderRadius: 8, borderWidth:1, borderColor: colors.gray,borderStyle: 'solid',
                                                            }}
                                                            type='text'
                                                            required
                                                            className='no-outline'
                                                            onChange={(event) => this.setState({ send: false, first_name: event.target.value })}
                                                        >
                                                        </input>
                                                    </Grid>
                                                    <Grid item xs={12} sm={2} style={{ alignItems: 'start', display: 'flex', flexDirection: 'column' }}>
                                                        <p className='textForm'> Apellido</p>
                                                        <p className='textFormError'>{this.state.last_name == '' && this.state.send ? "Campo requerido" : ""}</p>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 0, borderStyle: 'solid', }}>
                                                        <input
                                                            style={{
                                                                backgroundColor: '#CDCDCD',
                                                                width: '100%',
                                                                height: '100%',
                                                                     borderRadius: 8, borderWidth:1, borderColor: colors.gray,borderStyle: 'solid',
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
                                                                     borderRadius: 8, borderWidth:1, borderColor: colors.gray,borderStyle: 'solid',
                                                            }}
                                                            type='email'
                                                            required
                                                            placeholder={'ej.: ejemplo@gmail.com'}
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
                                                    <Grid item xs={12} sm={2} style={{ paddingRight: 5, alignItems: 'start', display: 'flex', flexDirection: 'column' }}>
                                                        <p className='textForm'>0</p>
                                                        <p className='textFormError'>{this.state.phone2 == '' && this.state.send ? "Campo requerido" : ""}</p>
                                                    </Grid>
                                                    <Grid item xs={12} sm={2} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 0, borderStyle: 'solid', }}>
                                                        <input
                                                            style={{
                                                                backgroundColor: '#CDCDCD',
                                                                width: '100%',
                                                                height: '100%',
                                                                borderRadius: 8, borderWidth:1, borderColor: colors.gray,borderStyle: 'solid'
                                                            }}
                                                             type='number'
                                                            required
                                                            className='no-outline'
                                                            onChange={(event) => this.setState({ send: false, phone1: event.target.value })}
                                                        >
                                                        </input>
                                                    </Grid>
                                                    <Grid item xs={12} sm={2} style={{ paddingRight: 5, alignItems: 'start', display: 'flex', flexDirection: 'column' }}>
                                                        <p className='textForm'> 15</p>
                                                        <p className='textFormError'>{this.state.phone2 == '' && this.state.send ? "Campo requerido" : ""}</p>
                                                    </Grid>
                                                    <Grid item xs={12} sm={3} style={{ height: 30, borderRadius: 8, borderColor: colors.gray, borderWidth: 0, borderStyle: 'solid', }}>
                                                        <input
                                                            style={{
                                                                backgroundColor: '#CDCDCD',
                                                                width: '100%',
                                                                height: '100%',
                                                                borderRadius: 8, borderWidth:1, borderColor: colors.gray,borderStyle: 'solid'
                                                            }}
                                                            type='number'
                                                            required
                                                            className='no-outline'
                                                            onChange={(event) => this.setState({ send: false, phone2: event.target.value })}
                                                        >
                                                        </input>
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                    <Grid item xs={12} sm={12} style={{ flexDirection: 'column', alignItems: 'start', display: 'flex', justifyContent: 'flex-start', marginTop: width && (10) }}>
                                                        <p className='textForm' >Fecha de nacimiento</p>
                                                        <p></p>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'start' }}>
                                                        <p className='textForm'>Día </p>

                                                        <input
                                                           style={{ marginLeft:5,   borderRadius: 8, borderWidth:1, borderColor: colors.gray,borderStyle: 'solid'}}
                                                            className="boxForm"
                                                            type='number'
                                                            required
                                                            min={1}
                                                            max={31}

                                                            onChange={(event) => this.setState({ send: false, day: event.target.value })}
                                                        >
                                                        </input>

                                                        <p className='textForm'  style={{ marginLeft:5 }}>Mes</p>

                                                        <input
                                                            style={{ marginLeft:5,  borderRadius: 8, borderWidth:1, borderColor: colors.gray,borderStyle: 'solid' }}
                                                            className="boxForm"
                                                            type='number'
                                                            required
                                                            min={1}
                                                            max={12}
                                                            onChange={(event) => this.setState({ send: false, month: event.target.value })}
                                                        >
                                                        </input>


                                                        <p className='textForm' style={{ marginLeft:5 }}>Año</p>

                                                    <input
                                                           style={{ width: '70px', marginLeft:5, borderRadius: 8, borderWidth:1, borderColor: colors.gray,borderStyle: 'solid'}}
                                                            className="boxForm"
                                                            type='number'
                                                            required
                                                            min={1900}
                                                            max={2000}
                                                            onChange={(event) => this.setState({ send: false, year: event.target.value })}
                                                        >
                                                        </input>

                                                    </Grid>
                                                </Grid>

                                                <Grid container direction='row' alignItems='center' style={{ marginTop: 10 }}>
                                                    <Grid item xs={4} sm={4} style={{ flexDirection: 'column', alignItems: 'start', display: 'flex' }}>
                                                        <p className='textForm'>Localidad</p>
                                                        <p className='textFormError'>{this.state.city == '' && this.state.send ? "Campo requerido" : ""}</p>

                                                    </Grid>
                                                    <Grid item xs={8} sm={8} style={{}}>
                                                        <input
                                                            style={{
                                                                backgroundColor: '#CDCDCD',
                                                                width: '100%',
                                                                height: 30,
                                                                       borderRadius: 8, borderWidth:1, borderColor: colors.gray,borderStyle: 'solid',
                                                            }}
                                                            type='text'
                                                            required
                                                            className='no-outline'
                                                            onChange={(event) => this.setState({ send: false, city: event.target.value })}
                                                        >
                                                        </input>
                                                    </Grid>
                                                    <Grid item xs={4} sm={4} style={{ flexDirection: 'column', alignItems: 'start', display: 'flex', justifyContent: !width ? 'flex-end' : '', marginTop: width && 10, }}>
                                                        <p className='textForm' >Provincia</p>
                                                    </Grid>
                                                    <Grid item xs={8} sm={8} style={{ paddingLeft: !width && (10), marginTop: width && 10, }}>
                                                        <input
                                                            style={{
                                                                backgroundColor: '#CDCDCD',
                                                                width: '100%',
                                                                height: 30,
                                                                borderRadius: 8, borderWidth:1, borderColor: colors.gray,borderStyle: 'solid',
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
                                                    <Grid style={{ marginLeft:'10%', alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.check4} onChange={(value) => this.radioButton('check4', value)} /><span className='radioB'>Canal Distribuidor</span>
                                                        </div>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.check5} onChange={(value) => this.radioButton('check5', value)} /><span className='radioB'>Proveedor</span>
                                                        </div>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.check6} onChange={(value) => this.radioButton('check6', value)} /><span className='radioB'>Médico Veterinario particular</span>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                                <Grid style={{ alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                    <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                        <input type="radio" checked={this.state.check11} onChange={(value) => this.radioButton('check11', value)} /><span className='radioB'>Otros</span>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={12} sm={12} style={{ marginTop: 20, marginBotton: 20, alignItems: 'start', display: 'flex', flexDirection: 'column' }}>
                                                    <p className='textForm'>Si usted es médico veterinario, se especializa en:</p>
                                                </Grid>
                                               <Grid style={{ flex: 1, flexDirection: 'row', display: 'flex' }}>
                                                    <Grid style={{ alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.check7} onChange={(value) => this.radioButton('check7', value)} /><span className='radioB'>Grandes Animales</span>
                                                        </div>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.check8} onChange={(value) => this.radioButton('check8', value)} /><span className='radioB'>Pequeños Animales</span>
                                                        </div>
                                                    </Grid>
                                                    <Grid style={{ marginLeft:'15%', alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.check9} onChange={(value) => this.radioButton('check9', value)} /><span className='radioB'>Ambos </span>
                                                        </div>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.check10} onChange={(value) => this.radioButton('check10', value)} /><span className='radioB'>Otros</span>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                                <Grid style={{ alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                    <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                        <input type="radio" checked={this.state.check12} onChange={(value) => this.radioButton('check12', value)} /><span className='radioB'>Ninguna</span>
                                                    </div>
                                                </Grid>

                                                 <Grid item xs={10} sm={10} style={{ marginLeft: 0, display: 'flex', alignItems: 'start', marginTop: 10 }}>
                                                            <p className='textForm' style={{ textAlign: 'left' }}>Asistire al evento en modo:</p>

                                                </Grid>

                                                  <Grid style={{ flex: 1, alignItems: 'start', flexDirection: 'row', display: 'flex' }}>
                                                    <Grid style={{ flex: 0.5, alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                           <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.streaming} onChange={(value) => this.radioButton('streaming', value)} /><span className='radioB'>Streaming</span>
                                                        </div>
                                                        <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                            <input type="radio" checked={this.state.presencial} onChange={(value) => this.radioButton('presencial', value)} /><span className='radioB'>Presencial</span>
                                                        </div>

                                                    </Grid>

                                                </Grid>
                                                   <Grid item xs={10} sm={10} style={{ marginLeft: 0, display: 'flex', alignItems: 'start', marginTop: 10 }}>
                                                            <p className='textForm' style={{ textAlign: 'left' }}>Utiliza productos Zoovet?</p>

                                                </Grid>
                                                     <Grid style={{ flex: 1, alignItems: 'start', flexDirection: 'row', display: 'flex' }}>
                                                    <Grid style={{ flex: 0.5, alignItems: 'start', flexDirection: 'column', display: 'flex' }}>
                                                            <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                                <input type="radio" checked={this.state.productNo} onChange={(value) => this.radioButton('productNo', value)} /><span className='radioB'>No</span>
                                                            </div>
                                                             <div style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}>
                                                                <input type="radio" checked={this.state.productSi} onChange={(value) => this.radioButton('productSi', value)} /><span className='radioB'>Si</span>
                                                             </div>
                                                        {this.state.productSi ?
                                                            <span
                                                                class="d-inline-block"
                                                                data-toggle="popover"
                                                                data-trigger="focus"
                                                                data-content="Seleccione Productos"
                                                                style={{ textAlign: 'left', width: '100%', alignItems: 'start' }}
                                                                placeholder="Seleccione productos"
                                                            >
                                                                <ReactSelect
                                                                    options={products}
                                                                    isMulti
                                                                    closeMenuOnSelect={false}
                                                                    hideSelectedOptions={false}
                                                                    components={{
                                                                        Option
                                                                    }}
                                                                    onChange={this.handleChange}
                                                                    allowSelectAll={true}
                                                                    value={this.state.optionSelected}
                                                                />
                                                            </span>
                                                            :
                                                            <span></span>
                                                        }
                                                    </Grid>

                                                </Grid>


                                                <Grid item xs={12} sm={12} style={{ marginTop: 20, alignItems: 'start', marginRigh: 40 }}>
                                                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 0, alignItems: 'start' }}>
                                                        <Grid item xs={2} sm={2} style={{ display: 'flex', padding: 10, alignItems: 'start' }}>
                                                            <div onClick={() => this.setState({ terms: !this.state.terms })} style={{ cursor: 'pointer', width: 16, height: 16, borderStyle: 'solid', borderWidth: 0, borderColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: ' 0 1px 4px 0 #000000' }}>
                                                                <img src={check} style={{ width: '100%', display: this.state.terms ? 'flex' : 'none' }}></img>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={10} sm={10} style={{ marginLeft: 10, display: 'flex', alignItems: 'start', marginTop: 10 }}>
                                                            <p className='textForm' style={{ textAlign: 'left' }}>Acepto bases y condiciones</p>
                                                        </Grid>
                                                    </div>
                                                    {this.state.error &&
                                                        <div style={{ width: '85%', display: 'flex', justifyContent: 'center' }}>
                                                            <p style={{ marginTop: 20, color: 'red', fontFamily: 'FiraSansMedium', fontSize: 14 }}>{this.state.error}</p>
                                                        </div>
                                                    }

                                                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
                                                        <p style={{ fontFamily: 'FiraSansMedium', fontSize: 10, color: '#465658', margin: 0, textAlign: 'left' }}>El aviso legal predeterminado que hay a continuación se mostrará a todo aquel que se inscriba al evento. Al marcar esta casilla envia su información al organizador del evento quien la utlizará para comunicarse con usted sobre este evento.</p>
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
                        <div style={{ display: 'block', height: window.innerHeight }}>
                              <Grid  item xs={12} style={{marginTop:'5',alignItems: 'center', width:'100%' }}>
                                     <img  style={{ width: 250, height: 150 * 0.86, marginTop: 50 }} src={logoVeteGrande}></img>
                                </Grid>
                            <div style={{ display: 'flex', flexdirection:'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundImage: `url(${backgroundRegisterOk})`, backgroundSize: 'cover' }}>

                                <div style={{ display: 'flex', direction: 'column', alignItems: 'center', justifyContent: 'center', }}>
                                        <img style={{ width: minxs? 350 : 550, height: minxs? 180 : 250, alignItems: 'center', marginTop:'-60%' }} src={CheckMail}></img>
                                </div>
                                        <Grid item  style={{ }}>
                                            <img style={{ width: 118 * 0.7, height: 84 * 0.7, position: 'absolute', bottom: 10, right: 10 }} src={logoNovo}></img>
                                        </Grid>

                            </div>
                        </div>
                    </div>
                )
            }



        }


    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Register;