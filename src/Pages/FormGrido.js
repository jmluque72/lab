import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Button,Dialog} from '@material-ui/core';
import './Main.css'
import logoNovo from '../assets/logo_novo.png'
import {colors} from '../utils'
import logoEC21 from '../assets/logoEC21.png'
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
            box:1,
            comun:1,
            juegos:1,
            show:1,
            contenido:1,
            reconocimiento:1,
            compartir:1,
            gusto: 1,
            recomendar:1
        }
    }

    send_form(event) {
        event.preventDefault()
        this.setState({error: null});
        var {calificacionSelect, calificacionComment, modalidad, modalidadComment, box, comun,juegos, show, showComment, contenido, reconocimiento,reconocimientoComment,compartir, gusto, partePreferida, recomendar, recomendarComment} = this.state
        const context = {
            uno : calificacionSelect,
            unoB:  calificacionComment,
            dos: modalidad,
            dosB: modalidadComment,
            cuatro: box,
            cinco: comun,
            seis: juegos,
            siete: show,
            sieteB: showComment,
            ocho: contenido,
            nueve: reconocimiento,
            nueveB: reconocimientoComment,
            diez: compartir,
            once: gusto,
            doce: partePreferida,
            trece: recomendar,
            treceB: recomendarComment
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
    componentDidMount(){
        const heightForm = document.getElementById('form')
        if(heightForm){
            this.setState({heightForm : heightForm.offsetHeight })
        }
    } 

    render() {
        const min = window.innerWidth >= 1000
        const gray = '#ECECEC'
        const azul = '#000F9F'
        var disabled = false;
        const margenTop = min ? 280 : 50
      
        return (    
            <div style={{height:'100%',display:'flex',flexDirection:'column',marginBottom:10}}>
                <div style={{ width:'100%',height: window.innerHeight*1,backgroundImage:`url(${background})`,backgroundSize:'cover',backgroundPosition:'center bottom',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={logoEC21} height='auto' width='40%'></img> 
                </div>
                <div style={{position:'absolute', top:window.innerHeight - margenTop,left:0,height:this.state.heightForm + margenTop,width:'8%',backgroundImage:`url(${margen})`,backgroundSize:'cover'}}></div>

                {/* <div style={{height:'100%',width:22,position:'fixed',top:0,left:0,background:colors.degrade_orange}}></div> */}
                <Grid id='form' item xs={12} style={{margin:0,marginTop:50,marginBottom:10}}>
                    <form onSubmit={(event) => this.send_form(event)}>
                        <Grid container direction='column' alignItems='center' style={{ width:'100%',height:'100%'}}>
                            <div style={{ width:'80%',display:'flex',flexDirection:'column', alignItems:'center',boxShadow:' 0 4px 5px -2px black'}}>
                                <p style={{color:colors.gray,textDecoration:'underline',fontFamily:'FrutigerBlackItalic'}}>Colaboradora / or:</p>
                                <p style={{marginLeft: 20, marginRight: 20, color:colors.gray,fontFamily:'FrutigerBlack',fontSize:14,textAlign:'center'}}>Muchas gracias por ser parte del “Encuentrode Colaboradores 2021”.</p>
                                <p style={{color:colors.gray,fontFamily:'FrutigerBlack',fontSize:14,textAlign:'center',width:'80%'}}>A continuación, vas a encontrar una serie de preguntas para comprender aquellos elementos que más valor te aportan a vos. De esta manera seguiremos diseñando eventos que cumplan todas sus expectativas.</p>
                            </div>
                            <div style={{width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                                <Grid container direction='column' style={{width:'100%',height:'100%'}}>
                                    <div style={{ width:'100%'}}>
                                        <p className='title'>1. Calificación general del evento</p>
                                        <p style={{color:'black',fontFamily:'FrutigerRoman',textAlign:'left',fontSize:14,margin:0, marginLeft: 5}}>(De 1 a 5, donde 1 es muy malo, 2 malo, 3 bueno, 4 muy bueno y 5 excelente)</p>
                                    </div>
                                    <Grid container direction={!min? 'column' : 'row'} >
                                        <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{margin:0,fontSize:18,color:'black',fontFamily:'FrutigerBlack',marginRight:5}}>1</p>
                                            <img onClick={() => this.setState({ calificacionSelect : 1})} width='25px' height='auto' src={this.state.calificacionSelect === 1 ? starSelected : star} style={{cursor:'pointer'}}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{margin:0,fontSize:18,color:'black',fontFamily:'FrutigerBlack',marginRight:5}}>2</p>
                                            <img onClick={() => this.setState({ calificacionSelect : 2})} width='25px' height='auto' src={this.state.calificacionSelect === 2 ? starSelected : star} style={{cursor:'pointer'}}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{margin:0,fontSize:18,color:'black',fontFamily:'FrutigerBlack',marginRight:5}}>3</p>
                                            <img onClick={() => this.setState({ calificacionSelect : 3})} width='25px' height='auto' src={this.state.calificacionSelect === 3 ? starSelected : star} style={{cursor:'pointer'}}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{margin:0,fontSize:18,color:'black',fontFamily:'FrutigerBlack',marginRight:5}}>4</p>
                                            <img onClick={() => this.setState({ calificacionSelect : 4})} width='25px' height='auto' src={this.state.calificacionSelect === 4 ? starSelected : star} style={{cursor:'pointer'}}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{margin:0,fontSize:18,color:'black',fontFamily:'FrutigerBlack',marginRight:5}}>5</p>
                                            <img onClick={() => this.setState({ calificacionSelect : 5})} width='25px' height='auto' src={this.state.calificacionSelect === 5 ? starSelected : star} style={{cursor:'pointer'}}></img>
                                        </Grid>
                                        <div style={{ width:'100%',marginTop:20}}>
                                            <p style={{color:'black',fontFamily:'FrutigerBold',textAlign:'left',fontSize:16,margin:0, marginLeft: 5}}>¿Qué mejoraría?</p>
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
                                            onChange={(event) => this.setState({ calificacionComment : event.target.value})}

                                        >
                                        </input>
                                    </Grid>
                                </Grid>
                                <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:azul,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>

                            </div>
                            <div style={{ width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                                <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:azul,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                                <Grid container direction='column' style={{width:'100%',height:'100%'}}>
                                    <div style={{ width:'100%'}}>
                                        <p className='title'>2. ¿Te gustó la modalidad Streaming?</p>
                                    </div>
                                    <Grid container direction={'column'} style={{marginLeft: 5}}>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ modalidad : 1})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.modalidad == 1 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>Si</p>
                                        </Grid>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ modalidad : 2})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.modalidad == 2 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>No</p>
                                        </Grid>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ modalidad : 3})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.modalidad == 3 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>En parte</p>
                                        </Grid>
                                        <div style={{ width:'100%',height:15,borderBottomStyle:'dotted',borderWidth:2,marginTop:10}}></div>
                                        <div    style={{ width:'100%',marginTop:20}}>
                                            <p className='title'>Si tu respuesta fue “No” o “En parte”, ¿Qué cambiarías / agregarías?</p>
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
                                            required={this.state.modalidad > 1}
                                            className='no-outline'
                                            onChange={(event) => this.setState({ modalidadComment : event.target.value})}

                                        >
                                        </input>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                                <Grid container direction='column' style={{width:'100%',height:'100%'}}>
                                    <div style={{ width:'100%'}}>
                                        <p className='title'>4. ¿Qué te pareció el contenido de la Grido Box que llegó a tu domicilio?</p>
                                        <p style={{color:'black',fontFamily:'FrutigerRoman',textAlign:'left',fontSize:14,margin:0, marginLeft: 5}}>(De 1 a 5, donde 1 es muy malo, 2 malo, 3 bueno, 4 muy bueno y 5 excelente)</p>
                                    </div>
                                    <Grid container direction={!min? 'column' : 'row'} >
                                        <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{margin:0,fontSize:18,color:'black',fontFamily:'FrutigerBlack',marginRight:5}}>1</p>
                                            <img onClick={() => this.setState({ box : 1})} width='25px' height='auto' src={this.state.box === 1 ? starSelected : star} style={{cursor:'pointer'}}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{margin:0,fontSize:18,color:'black',fontFamily:'FrutigerBlack',marginRight:5}}>2</p>
                                            <img onClick={() => this.setState({ box : 2})} width='25px' height='auto' src={this.state.box === 2 ? starSelected : star} style={{cursor:'pointer'}}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{margin:0,fontSize:18,color:'black',fontFamily:'FrutigerBlack',marginRight:5}}>3</p>
                                            <img onClick={() => this.setState({ box : 3})} width='25px' height='auto' src={this.state.box === 3 ? starSelected : star} style={{cursor:'pointer'}}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{margin:0,fontSize:18,color:'black',fontFamily:'FrutigerBlack',marginRight:5}}>4</p>
                                            <img onClick={() => this.setState({ box : 4})} width='25px' height='auto' src={this.state.box === 4 ? starSelected : star} style={{cursor:'pointer'}}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{margin:0,fontSize:18,color:'black',fontFamily:'FrutigerBlack',marginRight:5}}>5</p>
                                            <img onClick={() => this.setState({ box : 5})} width='25px' height='auto' src={this.state.box === 5 ? starSelected : star} style={{cursor:'pointer'}}></img>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:azul,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                            </div>
                            <div style={{width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                                <Grid container direction='column' style={{width:'100%',height:'100%'}}>
                                    <div style={{ width:'100%'}}>
                                        <p className='title'>5. ¿Qué te pareció la comunicación del evento?</p>
                                        <p style={{color:'black',fontFamily:'FrutigerRoman',textAlign:'left',fontSize:14,margin:0, marginLeft: 5}}>(De 1 a 5, donde 1 es muy malo, 2 malo, 3 bueno, 4 muy bueno y 5 excelente)</p>
                                    </div>
                                    <Grid container direction={!min? 'column' : 'row'} >
                                        <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{margin:0,fontSize:18,color:'black',fontFamily:'FrutigerBlack',marginRight:5}}>1</p>
                                            <img onClick={() => this.setState({ comun : 1})} width='25px' height='auto' src={this.state.comun === 1 ? starSelected : star} style={{cursor:'pointer'}}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{margin:0,fontSize:18,color:'black',fontFamily:'FrutigerBlack',marginRight:5}}>2</p>
                                            <img onClick={() => this.setState({ comun : 2})} width='25px' height='auto' src={this.state.comun === 2 ? starSelected : star} style={{cursor:'pointer'}}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{margin:0,fontSize:18,color:'black',fontFamily:'FrutigerBlack',marginRight:5}}>3</p>
                                            <img onClick={() => this.setState({ comun : 3})} width='25px' height='auto' src={this.state.comun === 3 ? starSelected : star} style={{cursor:'pointer'}}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{margin:0,fontSize:18,color:'black',fontFamily:'FrutigerBlack',marginRight:5}}>4</p>
                                            <img onClick={() => this.setState({ comun : 4})} width='25px' height='auto' src={this.state.comun === 4 ? starSelected : star} style={{cursor:'pointer'}}></img>
                                        </Grid>
                                        <Grid item sm={1} style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <p style={{margin:0,fontSize:18,color:'black',fontFamily:'FrutigerBlack',marginRight:5}}>5</p>
                                            <img onClick={() => this.setState({ comun : 5})} width='25px' height='auto' src={this.state.comun === 5 ? starSelected : star} style={{cursor:'pointer'}}></img>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:azul,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                            </div>
                            <div style={{ width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                                <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:azul,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                                <Grid container direction='column' style={{width:'100%',height:'100%'}}>
                                    <div style={{ width:'100%'}}>
                                        <p className='title'>6. ¿Te gustaron los juegos interactivos?</p>
                                    </div>
                                    <Grid container direction={'column'} style={{marginLeft: 5}}>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ juegos : 1})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.juegos == 1 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>Si</p>
                                        </Grid>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ juegos : 2})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.juegos == 2 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>No</p>
                                        </Grid>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ juegos : 3})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.juegos == 3 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>En parte</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{ width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                                <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:azul,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                                <Grid container direction='column' style={{width:'100%',height:'100%'}}>
                                    <div style={{ width:'100%'}}>
                                        <p className='title'>7. ¿Qué te pareció el contenido artístico del evento (show de inicio, intervención de Willy Magia, beatbox, etc)?</p>
                                    </div>
                                    <Grid container direction={'column'} style={{marginLeft: 5}}>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ show : 1})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.show == 1 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>Si, me gustó</p>
                                        </Grid>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ show : 2})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.show == 2 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>No me gustó</p>
                                        </Grid>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ show : 3})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.show == 3 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>No me convenció el todo</p>
                                        </Grid>
                                        <div style={{ width:'100%',height:15,borderBottomStyle:'dotted',borderWidth:2,marginTop:10}}></div>
                                        <div    style={{ width:'100%',marginTop:20}}>
                                            <p className='title'>Si tu respuesta fue “No me convenció del todo” o “No me gustó”, ¿Qué tipo de show o qué artista te hubiera gustado ver?</p>
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
                                            onChange={(event) => this.setState({ showComment : event.target.value})}

                                        >
                                        </input>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{ width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                                <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:azul,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                                <Grid container direction='column' style={{width:'100%',height:'100%'}}>
                                    <div style={{ width:'100%'}}>
                                        <p className='title'>8. ¿Te sentiste representado con el contenido del evento?</p>
                                    </div>
                                    <Grid container direction={'column'} style={{marginLeft: 5}}>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ contenido : 1})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.contenido == 1 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>Si</p>
                                        </Grid>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ contenido : 2})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.contenido == 2 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>No</p>
                                        </Grid>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ contenido : 3})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.contenido == 3 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>En parte</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{ width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                                <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:azul,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                                <Grid container direction='column' style={{width:'100%',height:'100%'}}>
                                    <div style={{ width:'100%'}}>
                                        <p className='title'>9. ¿Qué te parecieron los reconocimientos a los empleados?</p>
                                    </div>
                                    <Grid container direction={'column'} style={{marginLeft: 5}}>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ reconocimiento : 1})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.reconocimiento == 1 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>Me gustaron</p>
                                        </Grid>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ reconocimiento : 2})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.reconocimiento == 2 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>No me gustaron</p>
                                        </Grid>
                                        <div style={{ width:'100%',height:15,borderBottomStyle:'dotted',borderWidth:2,marginTop:10}}></div>
                                        <div    style={{ width:'100%',marginTop:20}}>
                                            <p className='title'>Si tu respuesta fue “No me gustaron”, nos interesa saber tu sugerencia.</p>
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
                                            onChange={(event) => this.setState({ reconocimientoComment : event.target.value})}

                                        >
                                        </input>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{ width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                                <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:azul,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                                <Grid container direction='row' style={{width:'100%',height:'100%'}}>
                                    <div style={{ width:'100%'}}>
                                        <p className='title'>10. ¿Con quién compartiste la fiesta?</p>
                                    </div>
                                    <Grid container direction={'row'} style={{marginLeft: 5}}>
                                        <Grid item sm={3} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ compartir : 1})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.compartir == 1 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>Familia</p>
                                        </Grid>
                                        <Grid item sm={3} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ compartir : 2})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.compartir == 2 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>Amig@s</p>
                                        </Grid>
                                        <Grid item sm={3} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ compartir : 3})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.compartir == 3 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>Compañer@s de trabajo.</p>
                                        </Grid>
                                        <Grid item sm={3} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                            <div onClick={() => this.setState({ compartir : 4})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.compartir == 4 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>Sol@</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{ width:'70%',display:'flex',flexDirection:'row'}}>
                                <div style={{ width:'20%',display:'flex',justifyContent:'flex-end',alignItems:'flex-start',paddingRight:15,paddingTop:15}}>
                                    <img src={arrow} width='35%' height='auto'></img>
                                </div>
                                <div style={{ width:'80%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                                    <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:azul,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                                    <Grid container direction='column' style={{width:'100%',height:'100%'}}>
                                        <div style={{ width:'100%'}}>
                                            <p className='title'>11. Si la respuesta anterior fué familia / amig@s / compañer@s. ¿Te gustó haber compartido la fiesta?</p>
                                        </div>
                                        <Grid container direction={'column'} style={{marginLeft: 5}}>
                                            <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                                <div onClick={() => this.setState({ gusto : 1})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                    {this.state.gusto == 1 && (
                                                        <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                    )}
                                                </div>
                                                <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>Si</p>
                                            </Grid>
                                            <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                                <div onClick={() => this.setState({ gusto : 2})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                    {this.state.gusto == 2 && (
                                                        <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                    )}
                                                </div>
                                                <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>No</p>
                                            </Grid>
                                            
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                            <div style={{ width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                                <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:azul,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                                <Grid container direction='column' style={{width:'100%',height:'100%'}}>
                                    <div style={{ width:'100%'}}>
                                        <p className='title'>12. ¿Cuál fué tu parte preferida del EC21?</p>
                                    </div>
                                    <Grid container direction={'column'} style={{marginLeft: 5}}>
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
                                            required
                                            onChange={(event) => this.setState({ partePreferida : event.target.value})}

                                        >
                                        </input>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{ width:'70%',background:gray,position:'relative',borderRadius:12,marginTop:20,paddingLeft:'2.5%',paddingRight:'2.5%',paddingTop:20,paddingBottom:20}}>
                                <div style={{height:'100%',width:12,position:'absolute',top:0,left:0,background:azul,borderTopLeftRadius:10,borderBottomLeftRadius:12}}></div>
                                <Grid container direction='column' style={{width:'100%',height:'100%'}}>
                                    <div style={{ width:'100%'}}>
                                        <p className='title'>13. Luego de lo vivido, ¿recomendarías a tus compañeros sumarte al Encuentro de Colaboradores el próximo año? ¿Por qué?</p>
                                    </div>
                                    <Grid container direction={'column'} style={{marginLeft: 5}}>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ recomendar : 1})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.recomendar == 1 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>Si</p>
                                        </Grid>
                                        <Grid item sm={12} style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <div onClick={() => this.setState({ recomendar : 2})} style={{ width:15,boxShadow:' 0 1px 2px 0 black',height:15,borderStyle:'solid',borderColor:'black',borderWidth:1,borderRadius:7.5,backgroundColor:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                {this.state.recomendar == 2 && (
                                                    <div style={{width:7,height:7,borderRadius:3.5,backgroundColor:'black'}}></div>
                                                )}
                                            </div>
                                            <p style={{margin:0,fontSize:16,color:'black',fontFamily:'FrutigerBold',marginLeft:10}}>No</p>
                                        </Grid>
                                        <div    style={{ width:'100%',marginTop:20}}>
                                            <p className='title'>Justifique su respuesta</p>
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
                                            onChange={(event) => this.setState({ recomendarComment : event.target.value})}

                                        >
                                        </input>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{width:'70%',display:'flex',justifyContent:'center'}}>
                                {this.state.send ? 
                                    <p style={{color:colors.gray,fontFamily:'FrutigerBlack',fontSize:min ? 30 :30 ,marginTop:20,textAlign:'center'}}>¡Muchas gracias por su participación!</p>
                                :
                                <button disabled={disabled} type='sumbit' style={{ cursor:'pointer',border:'none',paddingBottom:5,paddingTop:5,paddingLeft:15,paddingRight:15,marginLeft:'auto',background:azul,borderRadius:10,marginTop:20}}>
                                    <p style={{color:'white',fontFamily:'FrutigerBlack',fontSize:16,margin:0,textAlign:'center'}}>Enviar</p>
                                </button>
                                }
                            
                            </div>
                        </Grid> 
                    </form>
                </Grid>
                    
                <div style={{ width:'100%',height:40,display:'flex',flexDirection:'row',alignItems:'center',marginTop:20}}>
                    <div style={{ width:min ? '70%' : '35%',height:'50%',backgroundColor:azul}}></div>
                    <div style={{ width:min ? '10%' : '25%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
                        <p style={{color:azul,fontFamily:'FrutigerBlack',fontSize:16,margin:0,textAlign:'center'}}>Recursos Humanos</p>
                    </div>
                    <div style={{ width:min ? '10%' : '30%',display:'flex',justifyContent:'center'}}>
                        <img src={logo} width='50%'></img>
                    </div>
                    <div style={{ width:'10%',height:'50%',backgroundColor:azul}}></div>

                </div>

            </div>
        );
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Form;
