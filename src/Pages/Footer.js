import React from "react";
import PropTypes from "prop-types";
import './Main.css';
import Grid from '@material-ui/core/Grid';
import { colors } from '../utils'

const styles = {
    justificado: {
        textAlign: 'justify',
        lineHeight: 1.5,
        color: 'black',
        fontSize: 16,
        marginTop: 30
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 2,
        marginTop: 50
    },
    titleTable: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 1.5,
        lineHeight: 1.2,
        marginLeft: 5
    },
    textTable: {
        color: 'black',
        marginLeft: 5,
        lineHeight: 1.2
    },

    table: { borderWidth: 1, borderStyle: 'solid', borderColor: 'black' }
};
class Footer extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
            seconds: (new Date(1623466810000).getTime() - new Date().getTime()) / 1000
        }
    }

    timer = () => {
        var seconds = this.state.seconds;

        var days = Math.floor(seconds / 24 / 60 / 60);
        var hoursLeft = Math.floor((seconds) - (days * 86400));
        var hours = Math.floor(hoursLeft / 3600);
        var minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
        var minutes = Math.floor(minutesLeft / 60);
        var remainingSeconds = seconds % 60;

        this.setState({
            days: days,
            min: minutes,
            hours: hours,
            sec: parseInt(remainingSeconds)
        });

     
        if (seconds == 0) {
            this.stop();
        } else {
            seconds--;
            this.setState({
                seconds: seconds
            })
        }
    }
    pad = (n) => {
        return (n < 10 ? "0" + n : n);
    }

    componentDidMount() {

        this.interval = setInterval(() => {
            const date = this.timer();
        }, 1000);
    }


    stop() {
        clearInterval(this.interval);

    }

    goToVivo = () => {
        document.location.href = "/Vivo";
    }


    goToForm = () => {
        document.location.href = "/Form";
    }
    /*

 return (
                <div style={{ display: display, position: 'fixed',  paddingTop: 10, zIndex: 100, left: 0, bottom: 0, right: 0, background: colors.degrade_orange }}>
                    <p className='timeTitle_ing' onClick={this.goToVivo}>Ingresar al evento</p>
                </div>
            )
    */
    /*

            return (
                <div style={{ display: display, position: 'fixed',  paddingTop: 10, zIndex: 100, left: 0, bottom: 0, right: 0, background: colors.degrade_orange }}>
                    <p className='timeTitle_gracias'>Gracias por participar</p>
                    <p className='timeTitle_gracias_link' onClick={this.goToForm}>Por favor complete la encuenta</p>

                </div>
            )
                */
    render() {
        const countDown = this.state;
        var display = "block"
        if (window.scrollY > 0) {
            display = "none";
        }
        //        if (this.state.days <= 0 && this.state.hours <= 0 && this.state.min <= 15) {

        if (false) {
            return (
            <div style={{ display: display, position: 'fixed',  paddingTop: 10, zIndex: 100, left: 0, bottom: 0, right: 0, background: colors.degrade_orange }}>
                <p className='timeTitle_gracias'>Gracias por participar</p>
                <p className='timeTitle_gracias_link' onClick={this.goToForm}>Por favor complete la encuenta</p>

            </div>);
        }
        return (
            <div style={{display: display, position: 'fixed', zIndex: 100, left: 0, bottom: 0, right: 0, background: 'rgb(277,7,27)' }}>
                <Grid container style={{ alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                    <Grid xs={12} sm={2}>
                        <Grid container alignItems='center' direction='column'>
                            <div className='timeTitle'>FALTAN</div>
                        </Grid>
                    </Grid>
                    <Grid xs={3} sm={1} >
                        <Grid container alignItems='center' direction='column'>
                            <div className='timeValue' id='days'>{this.state.days}</div>
                            <div className='timeValueLabel'>Días</div>
                        </Grid>
                    </Grid>
                    <Grid xs={3} sm={1} >
                        <Grid container alignItems='center' direction='column'>
                            <div className='timeValue' id={'hours'}>{this.state.hours}</div>
                            <div className='timeValueLabel'>Horas</div>
                        </Grid>
                    </Grid>
                    <Grid xs={3} sm={1}>
                        <Grid container alignItems='center' direction='column'>
                            <div className='timeValue' id={'minutes'}>{this.state.min}</div>
                            <div className='timeValueLabel'>Minutos</div>
                        </Grid>
                    </Grid>
                    <Grid xs={3} sm={1} >
                        <Grid container alignItems='center' direction='column'>
                            <div className='timeValue' id={'seconds'}>{this.state.sec}</div>
                            <div className='timeValueLabel'>Segundos</div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};
Footer.defaultProps = {
    date: new Date()
};

export default Footer;
