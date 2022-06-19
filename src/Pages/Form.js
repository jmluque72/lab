import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Button,Dialog} from '@material-ui/core';
import './Main.css'
import logoNovo from '../assets/logo_novo.png'
import {colors} from '../utils'
import LogoOzempicHeader from '../assets/logoZoovetHeader.svg'


class Form extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            disertantes: [
                'Augusto Lavalle Cobo',
                'Guillermo Dieuzeide',
                'Jack Lawson',
                'Joaquín Gonzalez',
                'Esteban Jodar',
                'Hugo Sanabria',
                'Lawrence Leiter',
                'Rafael Diaz',
                'Daniel Piskorz',
                'Alejandro Dain',
                'Cecilia Luquez',
                'Adrián Proietti',
                'Daniel Siniawski'
            ],
            "meet_evaluate":0,
            "compare_other": 0,
            "message":"",
            "temaSelect1":0,
            "temaSelect2":0,
            "temaSelect3":0,
            "temaSelect4":0,
            "temaSelect5":0,
            "orador_1":0,
            "orador_2":0,
            "orador_3":0,
            "orador_4":0,
            "orador_5":0,
            "orador_6":0,
            "orador_7":0,
            "orador_8":0,
            "orador_9":0,
            "orador_10":0,
            "orador_11":0,
            "orador_12":0,
            "orador_13":0,
            "practica_diaria":0
        };
    }

    send_form() {
        this.setState({error: null});
        var body = this.state
        const context = {
            "meet_evaluate":body['calificacionSelect'],
            "compare_other": body['eventoSelect'],
            "compare_text":body['message'],
            "question_a":body['temaSelect1'],
            "question_b":body['temaSelect2'],
            "question_c":body['temaSelect3'],
            "question_d":body['temaSelect4'],
            "question_e":body['temaSelect5'],
            "orador_1":body['orador_1'],
            "orador_2":body['orador_2'],
            "orador_3":body['orador_3'],
            "orador_4":body['orador_4'],
            "orador_5":body['orador_5'],
            "orador_6":body['orador_6'],
            "orador_7":body['orador_7'],
            "orador_8":body['orador_8'],
            "orador_9":body['orador_9'],
            "orador_10":body['orador_10'],
            "orador_11":body['orador_11'],
            "orador_12":body['orador_12'],
            "orador_13":body['orador_13'],
            "practica_diaria":body['conocSelect']
        }
        var response = fetch("https://4swa57ilx6.execute-api.sa-east-1.amazonaws.com/prod/send_form", {
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
                    this.setState({send: true})
                } else {
                    this.setState({error: response.error})
                }
            })
            .catch(error => {
                this.setState({ error: error })
            });
    }



    render() {
        const min = window.innerWidth >= 1000
        const gray = '#c7c7c7'

        var disabled = false;
        if (this.state.calificacionSelect == 0 ||
            this.state.eventoSelect == 0 ||
            this.state.orador_1 == 0 ||
            this.state.orador_2 == 0 ||
            this.state.orador_3 == 0 ||
            this.state.orador_4 == 0 ||
            this.state.orador_5 == 0 ||
            this.state.orador_6 == 0 ||
            this.state.orador_7 == 0 ||
            this.state.orador_8 == 0 ||
            this.state.orador_9 == 0 ||
            this.state.orador_10 == 0 ||
            this.state.orador_11 == 0 ||
            this.state.orador_12 == 0 ||
            this.state.orador_13 == 0 ||
            this.state.conocSelect == 0) {
            disabled = true;
        }


        return (
            <div style={{ height:window.innerHeight-100}}>
                <div style={{height:'100%',width:22,position:'fixed',top:0,left:0,background:colors.degrade_orange}}></div>
                <img style={{width:118*0.7,height:84*0.7, position:'absolute',top:10,right:10}} src={logoNovo}></img>
                <Grid item xs={12} style={{marginTop:50}}>
                    <Grid container direction='column' alignItems='center' style={{marginLeft: 10, marginRight: 10, width:'100%',height:'100%'}}>
                        <div style={{ width:150}}>
                            <img style={{width:'100%'}} src={LogoOzempicHeader}></img>
                        </div>
                        <p style={{color:colors.gray,textDecoration:'underline',fontFamily:'Montserrat-SemiBold',marginTop:40}}>Estimado Dr/Dra:</p>
                        <p style={{marginLeft: 20, marginRight: 20, color:colors.gray,fontFamily:'Montserrat-Black',fontSize:14,textAlign:'center'}}>Muchas gracias por participar en nuestro evento “La Gran Oportunidad en Diabetes Tipo 2”.</p>
                        <p style={{color:colors.gray,fontFamily:'Montserrat-Black',fontSize:14,textAlign:'center',width:'80%'}}>A continuación, encontrará una serie de preguntas para comprender aquellos elementos que más valor le aportan a Ud. De esta manera continuaremos diseñando eventos de educación médica que cumplan todas sus expectativas.</p>
                        <div style={{ width:'90%',height:2,background:colors.gray}}></div>
                        <div style={{width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                            <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:colors.degrade_orange,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                            <Grid container direction='column' style={{width:'100%',height:'100%'}}>
                                <div style={{ width:'100%'}}>
                                    <p style={{color:'black',fontFamily:'Montserrat-Black',textAlign:'left',fontSize:14,margin:0, marginLeft: 5}}>1. Calificación general de la reunión </p>
                                    <p style={{color:'black',fontFamily:'Montserrat-Regular',textAlign:'left',fontSize:14,margin:0, marginLeft: 5}}>(De 1 a 5, donde 1 pobre, 2 regular, 3 bueno, 4 muy bueno y 5 excelente) </p>
                                </div>
                                <Grid container direction={!min? 'column' : 'row'} >
                                    <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                        <p style={{margin:0,fontSize:18,color:'black',fontFamily:'Montserrat-Black',marginRight:5}}>1</p>
                                        <div onClick={() => this.setState({ calificacionSelect : 1})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.calificacionSelect == 1 && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                    </Grid>
                                    <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                        <p style={{margin:0,fontSize:18,color:'black',fontFamily:'Montserrat-Black',marginRight:5}}>2</p>
                                        <div onClick={() => this.setState({ calificacionSelect : 2})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.calificacionSelect == 2 && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                    </Grid>
                                    <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                        <p style={{margin:0,fontSize:18,color:'black',fontFamily:'Montserrat-Black',marginRight:5}}>3</p>
                                        <div onClick={() => this.setState({ calificacionSelect : 3})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.calificacionSelect == 3 && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                    </Grid>
                                    <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                        <p style={{margin:0,fontSize:18,color:'black',fontFamily:'Montserrat-Black',marginRight:5}}>4</p>
                                        <div onClick={() => this.setState({ calificacionSelect : 4})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.calificacionSelect == 4 && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                    </Grid>
                                    <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                        <p style={{margin:0,fontSize:18,color:'black',fontFamily:'Montserrat-Black',marginRight:5}}>5</p>
                                        <div onClick={() => this.setState({ calificacionSelect : 5})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.calificacionSelect == 5 && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:colors.degrade_orange,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>

                        </div>
                        <div style={{ width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                            <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:colors.degrade_orange,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                            <Grid container direction='column' style={{width:'100%',height:'100%'}}>
                                <div style={{ width:'100%'}}>
                                    <p style={{color:'black',fontFamily:'Montserrat-Black',textAlign:'left',fontSize:14,margin:0, marginLeft: 5}}>2. En comparación con otros eventos de la industria, ¿cómo calificaría este evento?</p>
                                </div>
                                <Grid container direction={'column'} style={{marginLeft: 5}}>
                                    <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                        <div onClick={() => this.setState({ eventoSelect : 1})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.eventoSelect == 1 && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                        <p style={{margin:0,fontSize:14,color:'black',fontFamily:'Montserrat-Black',marginLeft:10}}>Inferior</p>
                                    </Grid>
                                    <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                        <div onClick={() => this.setState({ eventoSelect : 2})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.eventoSelect == 2 && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                        <p style={{margin:0,fontSize:14,color:'black',fontFamily:'Montserrat-Black',marginLeft:10}}>Igual</p>
                                    </Grid>
                                    <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                        <div onClick={() => this.setState({ eventoSelect : 3})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.eventoSelect == 3 && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                        <p style={{margin:0,fontSize:14,color:'black',fontFamily:'Montserrat-Black',marginLeft:10}}>Superior</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <div style={{ width:'100%',height:15,borderBottomStyle:'dotted',borderWidth:2}}></div>
                            <div    style={{ width:'100%',marginTop:20}}>
                                <p style={{color:'black',fontFamily:'Montserrat-Black',textAlign:'left',fontSize:14,margin:0, marginLeft: 5}}>¿Qué mejoraría?</p>
                            </div>
                            <input
                                style={{ backgroundColor:'transparent',
                                width:'100%',
                                height:'100%',
                                border:'none',
                                borderBottomStyle:'solid',
                                borderWidth:1,
                                borderColor:'gray',
                                marginTop:5,
                                padding:5}}
                                placeholder='Su respuesta'
                                className='no-outline'
                                onChange={(event) => this.setState({ message : event.target.value})}

                            >
                            </input>
                        </div>
                        <div style={{ width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                            <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:colors.degrade_orange,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                            <Grid container direction='column' style={{width:'100%',height:'100%'}}>
                                <div style={{ width:'100%'}}>
                                    <p style={{color:'black',fontFamily:'Montserrat-Black',textAlign:'left',fontSize:14,margin:0, marginLeft: 5}}>3. ¿Cuál fue el tema de la agenda que le resultó más atractivo? </p>
                                </div>
                                <Grid container direction={'column' } style={{marginLeft: 5}}>
                                    <Grid item sm={12} style={{marginTop:5,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                        <div onClick={() => this.setState({ temaSelect1 : !this.state.temaSelect1})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.temaSelect1 && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                        <p style={{margin:0,fontSize:16,color:'black',fontFamily:'Montserrat-Regular',marginLeft:15,textAlign:'left',width:'90%'}}>A. Diabetes y ECV ¿Cuál es el escenario en 2021</p>

                                    </Grid>
                                    <Grid item sm={12} style={{marginTop:0,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                        <div onClick={() => this.setState({ temaSelect2 : !this.state.temaSelect2})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.temaSelect2  && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                        <p style={{margin:0,fontSize:16,color:'black',fontFamily:'Montserrat-Regular',marginLeft:15,textAlign:'left',width:'90%'}}>B. Semaglutida: la innovación en un arGLP-1 semanal</p>

                                    </Grid>
                                    <Grid item sm={12} style={{marginTop:0,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                        <div onClick={() => this.setState({ temaSelect3 : !this.state.temaSelect3})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.temaSelect3 && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                        <p style={{margin:0,fontSize:16,color:'black',fontFamily:'Montserrat-Regular',marginLeft:15,textAlign:'left',width:'90%'}}>C. Programa SUSTAIN: Eficacia de semaglutida en todas las etapas de la DM2</p>

                                    </Grid>
                                    <Grid item sm={12} style={{marginTop:0,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                        <div onClick={() => this.setState({ temaSelect4 : !this.state.temaSelect4})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.temaSelect4 && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                        <p style={{margin:0,fontSize:16,color:'black',fontFamily:'Montserrat-Regular',marginLeft:15,textAlign:'left',width:'90%'}}>D. Explorado los beneficios CV de Semaglutida: impacto en las recomendaciones</p>

                                    </Grid>
                                    <Grid item sm={12} style={{marginTop:0,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                        <div onClick={() => this.setState({ temaSelect5 : !this.state.temaSelect5})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.temaSelect5 && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                        <p style={{margin:0,fontSize:16,color:'black',fontFamily:'Montserrat-Regular',marginLeft:15,textAlign:'left',width:'90%'}}>E. Integrando semaglutida a la práctica clínica</p>

                                    </Grid>

                                </Grid>

                            </Grid>
                            <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:colors.degrade_orange,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>

                        </div>
                        <div style={{ width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                            <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:colors.degrade_orange,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                            <Grid container direction='column' style={{width:'100%',height:'100%',marginLeft: 5}}>
                                <div style={{ width:'100%'}}>
                                    <p style={{color:'black',fontFamily:'Montserrat-Black',textAlign:'left',fontSize:14,margin:0, marginLeft: 5}}>4. Calificación general del disertante</p>
                                    <p style={{color:'black',fontFamily:'Montserrat-Regular',textAlign:'left',fontSize:14,margin:0}}>(De 1 a 5, donde 1 pobre, 2 regular, 3 bueno, 4 muy bueno y 5 excelente) </p>
                                </div>
                                <div style={{ width:'100%',display:'flex',justifyContent:'center',marginTop:20}}>
                                    <table border={1} style={{width:'100%',backgroundColor:'white'}}>
                                        <tbody>
                                            <tr style={{background:colors.degrade_orange}}>
                                                <td style={{width:'40%',color:'white'}}></td>
                                                <th style={{width:'12%',color:'white'}}>1</th>
                                                <th style={{width:'12%',color:'white'}}>2</th>
                                                <th style={{width:'12%',color:'white'}}>3</th>
                                                <th style={{width:'12%',color:'white'}}>4</th>
                                                <th style={{width:'12%',color:'white'}}>5</th>
                                            </tr>

                                            {this.state.disertantes.map((item, index) => {
                                                var key = "orador_" + (index+1);
                                                return(
                                                    <tr >
                                                        <td style={{width:'40%',textAlign:'left',fontFamily:'Montserrat-Black',fontSize:14,padding:5}}>{item}</td>
                                                        <th style={{width:'12%'}}>
                                                            <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
                                                                <div onClick={() => this.setState({[key]: 1, [item] : 1})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                                    {this.state[item] == 1 && (
                                                                        <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <th style={{width:'12%'}}>
                                                            <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
                                                                <div onClick={() => this.setState({[key]: 2, [item]  : 2})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                                    {this.state[item] == 2 && (
                                                                        <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <th style={{width:'12%'}}>
                                                            <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
                                                                <div onClick={() => this.setState({[key]: 3, [item]  : 3})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                                    {this.state[item] == 3 && (
                                                                        <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <th style={{width:'12%'}}>
                                                            <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
                                                                <div onClick={() => this.setState({[key]: 4, [item]  : 4})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                                    {this.state[item] == 4 && (
                                                                        <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <th style={{width:'12%'}}>
                                                            <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
                                                                <div onClick={() => this.setState({[key]: 5, [item]  : 5})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                                    {this.state[item] == 5 && (
                                                                        <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </th>

                                                    </tr>
                                                )
                                            })}


                                        </tbody>
                                    </table>
                                </div>
                            </Grid>
                            <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:colors.degrade_orange,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>

                        </div>
                        <div style={{ width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                            <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:colors.degrade_orange,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                            <Grid container direction='column' style={{width:'100%',height:'100%'}}>
                                <div style={{ width:'100%'}}>
                                    <p style={{color:'black',fontFamily:'Montserrat-Black',textAlign:'left',fontSize:14,margin:0, marginLeft: 5}}>5. El haber participado de esta actividad, ¿contribuyó a su conocimiento y/o práctica diaria?</p>
                                </div>
                                <Grid container direction={'column'} style={{marginLeft: 5}}>
                                    <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                        <div onClick={() => this.setState({ conocSelect : 1})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.conocSelect == 1 && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                        <p style={{margin:0,fontSize:16,color:'black',fontFamily:'Montserrat-Black',marginLeft:15}}>Si</p>

                                    </Grid>
                                    <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                        <div onClick={() => this.setState({ conocSelect : 2})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.conocSelect == 2 && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                        <p style={{margin:0,fontSize:16,color:'black',fontFamily:'Montserrat-Black',marginLeft:15}}>Es probable</p>

                                    </Grid>
                                    <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                        <div onClick={() => this.setState({ conocSelect : 3})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            {this.state.conocSelect == 3 && (
                                                <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                            )}
                                        </div>
                                        <p style={{margin:0,fontSize:16,color:'black',fontFamily:'Montserrat-Black',marginLeft:15}}>No</p>

                                    </Grid>

                                </Grid>

                            </Grid>
                            <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:colors.degrade_orange,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>

                        </div>

                    </Grid>
                    <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                        {this.state.send ?
                            <p style={{color:colors.gray,fontFamily:'Montserrat-Black',fontSize:min ? 18 :30 ,marginTop:20,textAlign:'center'}}>¡Muchas gracias por su participación!</p>
                        :
                        <Button disabled={disabled} onClick={() => this.send_form()} style={{ cursor:'pointer',paddingBottom:5,paddingTop:5,paddingLeft:15,paddingRight:15,background:colors.degrade_orange,borderRadius:10,marginTop:20}}>
                            <p style={{color:'white',fontFamily:'Montserrat-Black',fontSize:16,margin:0,textAlign:'center'}}>Enviar</p>
                        </Button>
                        }

                    </div>
                    <div style={{ height:20,width:'100%'}}></div>
                </Grid>
            </div>
        );
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Form;
