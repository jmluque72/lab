import React from "react";
import {Grid} from '@material-ui/core';
import './Main.css'
import logoCargando from '../assets/logoCargando.png'
import Background2 from '../assets/placafinalweb.jpg'
import BackgroundR from '../assets/placafinalweb.jpg'

import PlacaAntes from '../assets/PlacaAntesVete.png'

class Cargando extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            
        };
    }
    //
    render() {
        const min = window.innerWidth >= 1000
        return (
            <div className='backgroundCargando' style={{flex: 1, width:window.innerWidth, height: window.innerHeight , backgroundColor: 'red'}}/>
        );
    if (min) {
            return (
                <div style={{width: 100, backgroundColor: 'red'}} />
            );
        } else {
            return (
                <div style={{height: window.innerHeight, width:'100%',backgroundImage:`url(${PlacaAntes})`,backgroundSize:'auto'}}>
                </div>
            );
        }
        
    }
}
export default Cargando;
