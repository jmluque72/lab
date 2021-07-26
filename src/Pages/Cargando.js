import React from "react";
import {Grid} from '@material-ui/core';
import './Main.css'
import logoCargando from '../assets/logoCargando.png'
import Background2 from '../assets/placafinalweb.jpg'
import BackgroundR from '../assets/placafinalweb.jpg'

import PlacaAntes from '../assets/PlacaAntesVete.png'
import PlacaAntesVeteResponsive from '../assets/PlacaAntesVeteResponsive.jpg'

class Cargando extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            
        };
    }
    //
    PlacaAntesVeteResponsive
    render() {
        const min = window.innerWidth >= 1000
        if (min) {
            return (
                <div className='backgroundCargando' style={{flex: 1, width:window.innerWidth, height: window.innerHeight , backgroundColor: 'red'}}/>
            );
            } else {
                return (
                    <div className='backgroundCargandoResponsive' style={{flex: 1, width:window.innerWidth, height: window.innerHeight , backgroundColor: 'red'}}/>
                );
            }
        
    }
}
export default Cargando;
