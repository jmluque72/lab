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
      
        const eventDate = new Date('08/07/22 05:15 PM');
        const finevento = new Date('08/08/22 02:00 AM');
        const diaActual = new Date()


        this.state = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
            stoped: false,
            seconds: (eventDate.getTime() - new Date().getTime()) / 1000,
            eventDay:eventDate,
            finEvento: finevento,
            diaActual:diaActual,
            evento: false

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
            sec: parseInt(remainingSeconds),
            evento: (this.state.finEvento == this.state.diaActual || this.state.diaActual  == this.state.eventDay)
        });


        if (seconds <=0  ) {
            this.setState({
                stoped: true
            })
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


    //

    componentDidMount() {

        this.interval = setInterval(() => {
            const date = this.timer();
        }, 1000);
        console.log(this.state.stope, this.state.seconds)
          if ( this.state.seconds < 0) {
            this.setState({
                stoped: true
            })
        }
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
                        <p className='timeTitle_ing' onClick={this.goToVivo}>INGRESAR AL EVENTO</p>
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
        const min = window.innerWidth >= 1000


            var display = "block"
            var margin = 0
            var vtimeTitle = 'timeTitle'
            var vtimeValue = 'timeValue'
            var vtimeValueB = 'timeValueB'
            var vtimeValueLabel = 'timeValueLabel'


        if (!min) {
            var vtimeTitle = 'timeTitleR'
            var vtimeValue = 'timeValueR'
            var vtimeValueB = 'timeValueRB'
            var vtimeValueLabel = 'timeValueLabelR'
        }

        if (window.scrollY > 0) {
           // display = "none";
        }


        console.log(this.state.stoped, this.state.seconds)
        console.log( this.state.diaActual, this.state.eventDay)

        if (this.state.stoped == true & this.state.diaActual > this.state.finEvento ) {

                return (
                      <div style={{ display: display, position: 'absolute', paddingTop: 5,  zIndex: 100, left: 0, bottom: 0, right: 0, background: colors.degrade_orange , height: '20%'}}>

                        <p className={vtimeTitle} style={{ paddingTop: 20, cursor: 'pointer'}} onClick={this.goToForm}>Por favor complete la encuenta</p>

                    </div>
                )


        } else {

        if (this.state.stoped == true &  this.state.seconds <= 0  )  {

            return (
                <div style={{ display: display, position: 'absolute', paddingTop: 5, zIndex: 100, left: 0, bottom: 0, right: 0, background: colors.degrade_orange, height: '15%' }}>
                    <p className={vtimeTitle} style={{ cursor: 'pointer', marginTop: 20 }} onClick={this.goToVivo}>INGRESAR AL EVENTO</p>
                </div>
            )

        } else {

            return (
                <div style={{
                    width: window.innerWidth, display: display, position: 'absolute', zIndex: 100, left: 0, bottom: 0, right: 0, background: colors.degrade_orange,
               padding:0}}>
                        <Grid container style={{ alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                            <Grid item xs={12} sm={12} md={4} style={{marginTop:10}}>
                                <Grid container alignItems='center' direction='column' style={{}}>

                                    <div className={vtimeTitle} style={{  paddingLeft: 25, paddingRight: 25, paddingTop: 0, paddingBottom: 0, borderRadius: 40, backgroundColor: 'white', color: '#77127c' }}> FALTAN </div>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} sm={2} md={2} style={{marginTop:20}}>
                                <Grid container alignItems='center' direction='column'>
                                    <div className={vtimeValue} id={'hours'} style={{}} id='days'>{this.state.days}</div>
                                    <div className={vtimeValueLabel}>Días</div>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} sm={2} md={2} style={{marginTop:20}}>
                                <Grid container alignItems='center' direction='column'>
                                    <div className={vtimeValue} id={'hours'} style={{}} >{this.state.hours}</div>
                                    <div className={vtimeValueLabel}>Horas</div>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} sm={2} md={2} style={{marginTop:20}}>
                                <Grid container alignItems='center' direction='column'>
                                    <div className={vtimeValue} id={'minutes'} style={{}} >{this.state.min}</div>
                                    <div className={vtimeValueLabel} >Minutos</div>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} sm={2} md={2} style={{marginTop:20}}>
                                <Grid container alignItems='center' direction='column'>
                                    <div className={vtimeValue} id={'seconds'} style={{}} >{this.state.sec}</div>
                                    <div className={vtimeValueLabel}>Segundos</div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>

                )


            }
        }}

}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};
Footer.defaultProps = {
    date: new Date()

};

export default Footer;
