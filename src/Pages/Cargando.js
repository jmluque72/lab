import React from "react";
import {Grid} from '@material-ui/core';
import './Main.css'
import logoCargando from '../assets/logoCargando.png'
import Background2 from '../assets/background_event_program.png'
import BackgroundR from '../assets/background_responsive.jpg'


class Cargando extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            
        };
    }

    render() {
        const min = window.innerWidth >= 1000
        if (min) {
            return (
                <div style={{height: window.innerHeight, width:'100%',backgroundImage:`url(${Background2})`,backgroundSize:'cover'}}>
                    <img src={logoCargando} width='auto' height='90%'></img>
                </div>
            );
        } else {
            return (
                <div style={{height: window.innerHeight, width:'100%'}}>
                    <img src={BackgroundR} width='auto' width='100%'></img>
                </div>
            );
        }
        
    }
}
export default Cargando;
