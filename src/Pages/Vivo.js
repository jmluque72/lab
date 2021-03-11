import React from "react";
import PropTypes from "prop-types";
import Header from './Header.js'
import { Grid, Button } from '@material-ui/core';
import Background from '../assets/background_event_program.png'
import LogoOzempicHeader from '../assets/logo_white.png'
import up_white from '../assets/up_white.png'
import { colors } from '../utils'
import './Main.css'

import { client, w3cwebsocket as W3CWebSocket } from "websocket";

//var client = new W3CWebSocket('wss://n7bj7eh9le.execute-api.sa-east-1.amazonaws.com/production');

class Vivo extends React.Component {

    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            lang: "ESPAÑOL",
            response: -1,
            pause: true,
            url_video_es: "",
            url_video_en: "",
            url_chat_es: "",
            url_chat_en: "",
            client: new W3CWebSocket('wss://n7bj7eh9le.execute-api.sa-east-1.amazonaws.com/production')
        };
    }

    componentWillUnmount = () => {
        clearInterval(this.state.intervalFive);
    }

    timer = () => {
        this.state.client.send("hell");
    };

    componentDidMount() {

        this.interval = setInterval(this.timer, 60000);
        this.setState({ intervalFive: this.interval })

        this.state.client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        this.state.client.onmessage = (message) => {
            try {
                console.log(message.data)
                var data = message.data.replaceAll('"', '');
                var d = data.split("|")
                if (d[0] == "question") {
                    this.setState({
                        question: {title: d[1], responseServer: null }, pause: false
                    });
                } else if (d[0] == "response") {
                    this.setState({
                        question: {pause: false, title: d[1] + ":", responseServer: d[2] }, pause: false
                    });
                }
            } catch (e) {
            }
        };
        this.state.client.onclose = () => {
            console.log('WebSocket Client CLOSE');
            var clientv = new W3CWebSocket('wss://n7bj7eh9le.execute-api.sa-east-1.amazonaws.com/production');
            this.setState({
                client: clientv
            })
        }
    }



    upRotate() {
        if (!this.state.idiomaButton) {
            return `rotate(180deg)`
        } else {
            return `rotate(0deg)`
        }
    }

    setResponse = (value) => {
        this.setState({ error: null });
        const body = {
            question: this.state.question.title,
            response: value == 0 ? "VERDADERO" : "FALSE"
        }
        this.setState({
            response: value
        })
        var response = fetch("https://4swa57ilx6.execute-api.sa-east-1.amazonaws.com/prod/response", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then((response) => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    this.setState({ error: response })
                }
            })
            .then((response) => {
                this.setState({ question: null });
            })
            .catch(error => {
                alert(error);
                this.setState({ error: error })
            });
    }

    render() {
        const min = window.innerWidth >= 1000

   
        var display = "block";
        if (this.state.pause) {
            display = "none";
        }
        var url_video = "";
        var url_chat = "";
        if (this.state.lang == 'ESPAÑOL') {
            url_video = this.state.url_video_es;
            url_chat = this.state.url_chat_es;
        } else {
            url_video = this.state.url_video_en;
            url_chat = this.state.url_chat_en;

        }
        return (
            <div style={{ width: '100%', flexDirection: 'row' }}>
                <img style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0 }} src={Background} />
                <Grid item xs={12} style={{ height: window.innerHeight - 100, position: 'absolute', top: 0, left: 0, width: '100%', paddingBottom: 50 }}>
                    <Grid container direction='column'>
                        <Grid xs={12} style={{ padding: 10 }}></Grid>
                        <Grid container direction='row' justify='space-between' style={{ height: 70, paddingRight: 15, paddingLeft: 15 }}>
                            <div style={{ height: '100%', width: 200 }}>
                                <img src={LogoOzempicHeader} style={{ width: '100%', height: 'auto' }}></img>
                            </div>
                            <div style={{ position: 'relative', height: '100%', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div onClick={() => this.setState({ idiomaButton: !this.state.idiomaButton })} style={{ cursor: 'pointer', width: 100, height: 25, borderRadius: 5, backgroundColor: colors.gray, borderStyle: 'solid', borderWidth: 1, borderColor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <p style={{ color: 'white', fontSize: 12, margin: 0, fontFamily: 'FrutigerLight', letterSpacing: 1 }}>{this.state.lang ? this.state.lang : "IDIOMA"}</p>
                                </div>
                                {this.state.idiomaButton && (
                                    <div style={{ position: 'absolute', top: 50, width: 120, marginRight: 20, height: 50, marginTop: 5, backgroundColor: colors.gray, borderStyle: 'solid', borderWidth: 1, borderColor: 'white', display: 'flex', flexDirection: 'column', boxShadow: ' 0 3px 6px 0 #000000' }}>
                                        <div onClick={() => this.setState({ idiomaButton: false, lang: 'ESPAÑOL' })} style={{ cursor: 'pointer', backgroundColor: this.state.idiomaSelect ? colors.gray : '#a1a1a1', width: '100%', height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottomStyle: 'solid', borderWidth: 1, borderColor: 'white' }}>
                                            <p style={{ color: 'white', fontSize: 14, margin: 0, fontFamily: 'FrutigerLight', fontWeight: !this.state.idiomaSelect ? '' : 'bold', letterSpacing: 1 }}>ESPAÑOL</p>
                                        </div>
                                        <div onClick={() => this.setState({ idiomaButton: false, lang: "INGLES" })} style={{ cursor: 'pointer', backgroundColor: !this.state.idiomaSelect ? colors.gray : '#a1a1a1', width: '100%', height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottomStyle: 'solid', borderWidth: 1, borderColor: 'white' }}>
                                            <p style={{ color: 'white', fontSize: 14, margin: 0, fontFamily: 'FrutigerLight', fontWeight: this.state.idiomaSelect ? '' : 'bold', letterSpacing: 1 }}>INGLES</p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </Grid>
                    </Grid>
                    <Grid xs={12} justify='center' className='container' style={{ width: '100%', padding: 10 }}>
                        <Grid container >
                            <div className='left' style={{ marginLeft: '5%', width: '60%', height: 500, padding: 2, backgroundColor: 'white' }}>
                                <iframe src={url_video} style={{ width: '100%', height: '100%' }} ></iframe>
                            </div>
                            <div className='left' style={{ width: '30%', marginLeft: 30, height: 500, padding: 2, backgroundColor: 'white' }}>
                                <iframe src={url_chat} style={{ width: '100%', height: '100%' }} ></iframe>
                            </div>

                        </Grid>
                    </Grid>

                    <Grid xs={12} style={{display: display ,position: 'fixed', left: 0, right: 0, bottom: 10, height: 80 }}>
                        <Grid container justify='center' alignItems='center'>
                            <Grid xs={10} style={{ width: '80%', backgroundColor: colors.gray, borderRadius: 10, borderWidth: 2, borderStyle: 'solid', borderColor: 'white' }}>

                                {this.state.question ?
                                    <Grid container style={{ display: 'flex ', flexDirection: 'row' }}>
                                        <Grid sm={6} xs={12} style={{ height: 80 }}>
                                            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <p style={{ fontFamily: 'FrutigerBold', color: "white", margin: 0, fontSize: 22, lineHeight: 1 }}>{this.state.question.title}</p>
                                            </div>
                                        </Grid>
                                        {this.state.question.responseServer == null ?
                                            <Grid sm={6} xs={12} style={{ display: 'flex ', flexDirection: 'row' }}>
                                                <Grid sm={6} xs={6} style={{ display: 'flex ', flexDirection: 'column' }}>
                                                    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <Button onClick={() => this.setResponse(0)} style={{ height: '50%', width: '70%', background: colors.degrade_orange, borderWidth: 1, borderStyle: 'solid', borderColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                                            <p style={{ fontFamily: 'FrutigerBold', color: "white", margin: 0, fontSize: 20 }}>VERDADERO</p>
                                                        </Button>
                                                    </div>
                                                </Grid>
                                                <Grid sm={6} xs={6} style={{ height: 80 }}>
                                                    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <Button onClick={() => this.setResponse(1)} style={{ height: '50%', width: '70%', background: colors.degrade_orange, borderWidth: 1, borderStyle: 'solid', borderColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                                            <p style={{ fontFamily: 'FrutigerBold', color: "white", margin: 0, fontSize: 20 }}>FALSE</p>
                                                        </Button>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                            :

                                            <Grid sm={4} xs={12} style={{ display: 'flex ', flexDirection: 'row' }}>
                                                <Grid sm={4} xs={6} style={{ display: 'flex ', flexDirection: 'column' }}>

                                                    {this.state.question.responseServer && this.state.question.responseServer == 0 &&

                                                        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Button style={{ height: '50%', width: '70%', background: colors.degrade_orange, borderWidth: 1, borderStyle: 'solid', borderColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                                                <p style={{ fontFamily: 'FrutigerBold', color: "white", margin: 0, fontSize: 20 }}>VERDADERO</p>
                                                            </Button>
                                                        </div>
                                                    }
                                                </Grid>
                                                <Grid sm={4} xs={6} style={{ height: 80 }}>
                                                    {this.state.question.responseServer && this.state.question.responseServer == 1 &&
                                                        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Button  style={{ height: '50%', width: '70%', background: colors.degrade_orange, borderWidth: 1, borderStyle: 'solid', borderColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                                                <p style={{ fontFamily: 'FrutigerBold', color: "white", margin: 0, fontSize: 20 }}>FALSE</p>
                                                            </Button>
                                                        </div>
                                                    }

                                                </Grid>
                                            </Grid>




                                        }
                                    </Grid>

                                    :
                                        
                                    <Grid container style={{ display: 'flex ', flexDirection: 'row' }}>
                                        <Grid sm={12} xs={12} style={{ height: 80 }}>
                                            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <p style={{ fontFamily: 'FrutigerBold', color: "white", margin: 0, fontSize: 30, lineHeight: 1 }}>Gracias por responder, en minutos develaremos la respuesta correcta.</p>
                                            </div>
                                        </Grid>

                                    </Grid>


                                }

                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </div >
        );
    }
}

Vivo.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Vivo;
