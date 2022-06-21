import React from "react";
import {Grid} from '@material-ui/core';
import './Main.css'
import logoCargando from '../assets/logoCargando.png'
import Background from '../assets/background_event_program.png'
import BackgroundCargandoR from '../assets/PlacaAntesVeteResponsive-01.png'
import logoNovo from '../assets/logoZoon.svg'
import pieCargando from '../assets/piecargando-01.png'

import LogoTop from '../assets/LogoVete.png'



class Cargando extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }

    render() {
        const min = window.innerWidth >= 1000
        const height = window.innerHeight
        const width = window.innerWidth
        const minheight = window.innerHeight >= 1400
        const minWidth = window.innerWidth >= 500

 if (min) {
            return (
             <div>
                    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
                        <div style={{ width: '100%', backgroundImage: `url(${Background})`, backgroundSize: 'cover' ,height: '100vh' }}>
                            <Grid item xs={12} sm={12} style={{ display:'flex',flexDirection: 'column',alignContent:'center' }}>

                                    <div  style={{display: 'flex',justifyContent:'center', alignContent:'center'}}>
                                        <img style={{ maxWidth: minheight ? 700 : 400, marginTop: '10%', alignItems: 'center', }} src={LogoTop}></img>

                                    </div>
                                    <div  style={{ alignContent:'center',justifyContent:'center'}}>
                                        <img style={{ maxWidth: minheight? 600 : 400 , minWidth: minheight? 400 : 300, alignItems: 'center' }} src={logoCargando}></img>
                                    </div>
                                    <Grid container alignItems='center' direction='row' justifyContent='center' style={{ width: '100%' }}>

                                            <img style={{ width: 90, height: 90 * 0.64, position: 'absolute', bottom: 10, right: 10 }} src={logoNovo}></img>
                                            <div style={{display: 'flex', justifyContent:'center', alignContent:'center'}}>
                                            <img  style={{ maxWidth: 150, bottom: 0, position: 'absolute', alignItems: 'center' }} src={pieCargando}></img>
                                            </div>
                                     </Grid>


                           </Grid>
                        </div>
                        </div>
                </div>
            );
        } else {
            return (
              <div>
                    <div style={{ display: 'flex',  height: '100%vh', width:'100%' }}>
                    <div style={{display:'flex',justifyContent:'center',width:'100%',backgroundImage:`url(${Background})`,backgroundSize:'cover', height:'100vh'}}>
                          <Grid item xs={12} sm={12} style={{ display:'flex',flexDirection: 'column',alignContent:'center' }}>

                                    <div  style={{display: 'flex',justifyContent:'center', alignContent:'center'}}>
                                        <img style={{ maxWidth: minWidth ? 400 : 300 , maxHeight: minheight ? 250 * 0.86 : 150 * 0.86, marginTop: '50%',alignItems: 'center' }} src={LogoTop}></img>
                                    </div>
                                <div style={{ display: 'flex',flexDirection: 'column',alignItems:'center'}}>
                                     <img style={{   maxWidth: minWidth ? 400 : 300, minWidth: 300,alignItems: 'center' }} src={logoCargando}></img>
                                </div>
                            </Grid>
                                    <img style={{ width: 118 * 0.7, height: 84 * 0.7, position: 'absolute', bottom: '0%', right: '5%' }} src={logoNovo}></img>
                                    <img style={{ maxWidth: 150, bottom: 0, position: 'absolute', alignItems: 'center' }} src={pieCargando}></img>
                    </div>
                </div>
            </div>
            );
        }

    }



        }

export default Cargando;
