import React from "react";
import PropTypes from "prop-types";

import Header from './Header.js'
import SliderHome from './SliderHome.js'
import Agenda from './Agenda.js'

import Evento from './Evento.js'
import Consultas from './Consulta.js'
import Contacto from './Contacto.js'
import Cargando from './Cargando.js'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Main.css'
import Footer from './Footer.js'


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
        this.scrollDivConsultas = React.createRef();


    }



    redirect = (name) => {




        if (name == 'Home') {
            this.setState({visible: 'home'});
            window.scrollTo(0, this.scrollDivHome.current.offsetTop-100);
        }
        if (name == 'Agenda') {
            this.setState({visible: 'agenda'});
            window.scrollTo(0, this.scrollDivAgenda.current.offsetTop-100);
        }
        if (name == 'Evento') {

            this.setState({visible: 'evento'});
            window.scrollTo(0, this.scrollDivEvento.current.offsetTop-100);
        }
        if (name == 'Consultas') {
            this.setState({visible: 'consultas'});
            window.scrollTo(0, this.scrollDivConsultas.current.offsetTop-100);
        }
        if (name == 'Vivo') {
            window.open("./Vivo");
        }

    }

    componentDidMount() {
        window.addEventListener('scroll', (event) => {
            var current = "home";
            var offset = window.pageYOffset + 200;


            if (document.getElementById("home").offsetTop < offset) current = "home";
            if (document.getElementById("agenda").offsetTop < offset) current = "agenda";
            if (document.getElementById("evento").offsetTop < offset) current = "evento";
            if (document.getElementById("consultas").offsetTop < offset) current = "consultas";

            this.setState({visible: current});

            //console.log(this.isScrolledIntoView())
        });
    }



    isScrolledIntoView = (el) => {

        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        // Only completely visible elements return true:
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }


    render() {


        return (
            <div style={{flexDirection: 'row'}}>
                <div id='home' style={{}}  ref={this.scrollDivHome}>
                    <SliderHome />
                </div>
                 <div id='agenda' style={{ }} ref={this.scrollDivAgenda}>
                    <Agenda/>
                </div>
                <div id='evento' style={{}}  ref={this.scrollDivEvento}>
                    <Evento/>
                </div>
                <div id='consultas' style={{   }}  ref={this.scrollDivConsultas}>
                    <div></div>
                    <Consultas/>
                </div>

                <Header state={this.state.visible} style={{position: 'absolute', top: window.innerHeight*5, height: window.innerHeight, width: window.innerWidth}} redirect={this.redirect} />

            </div>
        );
    }
}

HomeView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default HomeView;
