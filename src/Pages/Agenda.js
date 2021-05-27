import React from "react";
import PropTypes from "prop-types";

import Header from './Header.js'
import Footer from './Footer.js'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Background from '../assets/background_event_program.png'
import fiesta from '../assets/fiesta.png'
import fiesta1 from '../assets/fiesta1.jpg'

import saber_mas from '../assets/saber_mas.png'

import './Main.css'

class Agenda extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
        };
    }
    pdf() {
        window.open('https://resourceslanzamiento.s3-sa-east-1.amazonaws.com/programa.pdf', '_blank');
    }

    render() {
        const min = window.innerWidth >= 1000
        console.log(window.innerWidth)
        return (
            <div style={{flexDirection: 'row', height: window.innerHeight, backgroundImage: `url(${Background})`, backgroundSize: 'cover', }}>
                <img style={{marginTop: -200, width: '100%' }} src={fiesta1} />
                <div style={{ zIndex: 999, position: 'absolute', bottom: - window.innerHeight+100, right: 50 }}>
                <Button onClick={() => this.pdf()}>
                    <img style={{width: 250, height: 250*0.28}} src={saber_mas} />
                </Button>
                </div>

            </div>
        );
    }
}

Agenda.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Agenda;
