import React from "react";
import PropTypes from "prop-types";
import Header from './Header.js'
import { Grid, Button } from '@material-ui/core';
import Background from '../assets/background_event_program.png'
import LogoOzempicHeader from '../assets/logo_white.png'
import up_white from '../assets/up_white.png'
import { colors } from '../utils'
import './Main.css'
import { PieChart } from 'react-minimal-pie-chart';

class Chart extends React.Component {

    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            lang: "ESPAÑOL",
            response: -1,
            responseServer: null,
            currentTitle: "Pregunta 1",
        };
    }

    componentWillUnmount = () => {
        clearInterval(this.state.intervalFive);
    }

    timer = () => {
        this.getResponse();
    };

    componentDidMount() {

        this.interval = setInterval(this.timer, 10000);
        this.setState({ intervalFive: this.interval })
        this.getResponse();
    }



    upRotate() {
        if (!this.state.idiomaButton) {
            return `rotate(180deg)`
        } else {
            return `rotate(0deg)`
        }
    }

    getResponse = (value) => {
        this.setState({ error: null });
        
        var response = fetch("https://4swa57ilx6.execute-api.sa-east-1.amazonaws.com/prod/chart", {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((response) => {
                alert(response);
                if (response.status == 200) {
                    return response.json();
                } else {
                    this.setState({ error: response })
                }
            })
            .then((response) => {
                if (!response.error) {
                } else {
                    this.setState({ error: response.error })
                }
            })
            .catch(error => {
                alert(error);
                this.setState({ error: error })
            });
    }

    render() {
        const min = window.innerWidth >= 1000
        return (
            <div style={{ width: '100%', flexDirection: 'row' }}>
                <Grid justify='center' item xs={12} style={{ height: window.innerHeight - 100, position: 'absolute', top: 0, left: 0, width: '100%', flexDirection: 'column', paddingBottom: 50 }}>
                    <Grid container direction='column' style={{alignContent: 'center', justifyContent: 'center', background: 'blue'}} >
                        <Grid container direction='row' justify='space-between' style={{ height: 70, paddingRight: 15, paddingLeft: 15 }}>
                            <div style={{  height: '100%', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <p style={{textAlign:'center', color: 'black', fontSize: 60, margin: 0, fontFamily: 'FrutigerLight', letterSpacing: 1 }}>{this.state.currentTitle}</p>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} direction='column' style={{background: 'red', width: '35%', textAlign: 'center', justifyItems: 'center'}} >

                        <PieChart
                            style={{textAlign: 'center'}}
                            paddingAngle={10}
                            label={(dataEntry) => {
                                return dataEntry.dataEntry.title + "(" + dataEntry.dataEntry.percentage + "%)";
                            }}

                            data={[
                                { title: 'Verdadero', value: 40, color: '#E38627' },
                                { title: 'False', value: 60, color: '#C13C37' },
                            ]}
                        />;

                    </Grid>


                </Grid>
            </div >
        );
    }
}

Chart.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Chart;
