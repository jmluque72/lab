import React from "react";
import PropTypes from "prop-types";

import Header from './Header.js'
import SliderHome from './SliderHome.js'
import Agenda from './Agenda.js'
import Oradores from './Oradores.js'
import Evento from './Evento.js'
import Consultas from './Consulta.js'
import Contacto from './Contacto.js'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Main.css'


class HomeView extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            visible: 'home'
        };
        this.scrollDivHome = React.createRef();
        this.scrollDivAgenda = React.createRef();
        this.scrollDivEvento = React.createRef();
        this.scrollDivOradores = React.createRef();
        this.scrollDivConsultas = React.createRef();
        this.scrollDivContacto = React.createRef();

        
    }

    redirect = (name) => {
        //this.myRef.current.scrollIntoView()
        if (name == 'Home') {
            this.setState({visible: 'home'});
            window.scrollTo(0, this.scrollDivHome.current.offsetTop-100);
        }
        if (name == 'Agenda') {
            this.setState({visible: 'agenda'});
            window.scrollTo(0, this.scrollDivAgenda.current.offsetTop-100);
        }
        if (name == 'Oradores') {
            this.setState({visible: 'oradores'});
            window.scrollTo(0, this.scrollDivOradores.current.offsetTop-100);
        }
        if (name == 'Evento') {
            this.setState({visible: 'evento'});
            window.scrollTo(0, this.scrollDivEvento.current.offsetTop-100);
        }
        if (name == 'Consultas') {
            this.setState({visible: 'consultas'});
            window.scrollTo(0, this.scrollDivConsultas.current.offsetTop-100);
        }
        if (name == 'Contacto') {
            this.setState({visible: 'contacto'});
            window.scrollTo(0, this.scrollDivContacto.current.offsetTop-100);
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', (event) => {
            
        });
    }

    render() {
        return (
            <div style={{flexDirection: 'row'}}>
                <div id='home' ref={this.scrollDivHome}>
                    <SliderHome />
                </div>
                 <div id='agenda' ref={this.scrollDivAgenda}>
                    <Agenda/>
                </div>
                <div id='oradores'   ref={this.scrollDivOradores}>
                    <Oradores/>
                </div>
                <div id='evento' style={{ marginTop:50}}  ref={this.scrollDivEvento}>
                    <Evento/>
                </div>
                <div id='consultas' style={{ marginTop:50, marginBottom: 50}}  ref={this.scrollDivConsultas}>
                    <div></div>
                    <Consultas/>
                </div>
              <div id='contacto'ref={this.scrollDivContacto}>
                    <Contacto/>
                </div>  
                <Header state={this.state.visible} style={{position: 'absolute', top: window.innerHeight*6, height: window.innerHeight, width: '100%'}} redirect={this.redirect} />

            </div>
        );
    }
}

HomeView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default HomeView;
