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
            hasResponse: false,
            question_process: null,
            url_video_es: "https://vimeo.com/event/789315/embed",
            url_video_en: "https://vimeo.com/event/789348/embed",
            url_chat_es: "https://vimeo.com/event/789315/chat/",
            url_chat_en: "https://vimeo.com/event/789348/chat/",
            client: null,
            loading: false
        };
    }

    componentWillUnmount = () => {

    }

    timer2 = () => {
        this.getQuestion();
        this.getResponse();
    }

    timer = () => {
        if (this.state.client) {
            console.log(this.state.client.readyState);
        }
        if (this.state.client == null || this.state.client.readyState != 1) {

            console.log('WebSocket Client RECONNECT');
            var clientv = new W3CWebSocket('wss://n7bj7eh9le.execute-api.sa-east-1.amazonaws.com/production');
            this.setState({
                client: clientv
            })

            clientv.onopen = () => {
                console.log('WebSocket Client Connected');
            };
            clientv.onmessage = (message) => {
                try {
                    console.log(message.data)
                    var data = message.data.replaceAll('"', '');
                    var d = data.split("|")
                    if (d[0] == "question") {
                        this.setState({
                            question: { title: d[1], responseServer: null }, pause: false
                        });
                    } else if (d[0] == "response") {
                        this.setState({
                            question: { pause: false, title: d[1] + ":", responseServer: d[2] }, pause: false
                        });
                        this.intervalClose = setInterval(this.intervalClose, 30000);
                        this.setState({ intervalClose: this.intervalClose })

                    }
                } catch (e) {
                }
            };
        }
    };


    intervalClose = () => {
        this.setState({
            question: null
        })
        clearInterval(this.state.intervalClose);

    };
    componentDidMount() {
        this.interval = setInterval(this.timer2, 10000);
        this.setState({ intervalFive: this.interval })
    }

    upRotate() {
        if (!this.state.idiomaButton) {
            return `rotate(180deg)`
        } else {
            return `rotate(0deg)`
        }
    }

    getQuestion = () => {
        this.setState({ loading: true, error: null });
        if (this.state.hasResponse) {
            return;
        }
        const body = {
        }
     
        var response = fetch("https://4swa57ilx6.execute-api.sa-east-1.amazonaws.com/prod/get_question", {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((response) => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    this.setState({ error: response })
                }
            })
            .then((response) => {
                if (response.question) {
                    this.setState({ question_process: true, question: { title: response.question, responseServer: null }, pause: false });
                }
            })
            .catch(error => {
                this.setState({ loading: true, error: error })
            });
    }

    getResponse = () => {

        this.setState({ loading: true, error: null });
        const body = {
        }
        var response = fetch("https://4swa57ilx6.execute-api.sa-east-1.amazonaws.com/prod/get_response", {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((response) => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    this.setState({ error: response })
                }
            })
            .then((response) => {
                if (response.response) {
                    var responseValid = this.responseValid(response.response);
                    this.setState({ question: { title: response.response, responseServer: responseValid }, hasResponse: false, pause: false });
                } else {
                    this.setState({ question_process: false, question: null, responseServer: null, pause: false });
                }
            })
            .catch(error => {
                this.setState({ loading: true, error: error })
            });
    }

    responseValid = (response) => {
        if (response == '1. Semaglutida es de administración diaria y titulación semanal') {
            return 0;
        } else if (response == '2. Semaglutida siempre se debe iniciar con la dosis de 0,25mg/semana') {
            return 1;
        } else if (response == '3. La dosis de mantenimiento de semaglutida es 1mg/semana') {
            return 0;
        } else if (response == '4. El evento adverso más frecuente con semaglutida es la pancreatitis') {
            return 1;
        } else if (response == '5. El tratamiento con semaglutida produce más intolerancia digestiva que otros arGLP1') {
            return 0;
        } else if (response == '6. Durante el tratamiento no se puede modificar el día de aplicación de semaglutida.') {
            return 0;
        } else if (response == '7. Al iniciar con semaglutida debe ajustar la dosis de metformina.') {
            return 0;
        } else if (response == '8.Una paciente embarazada o en periodo de lactancia no debe usar semaglutida') {
            return 1;
        } else if (response == '9. El tratamiento con semalutida no es seguro en adultos mayores') {
            return 0;
        } else if (response == '10. Semaglutida puede indicarse en pacientes con insuficiencia renal leve, moderada y severa.') {
            return 1;
        }
        return 1;
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
                this.setState({hasResponse: true, question: null });
            })
            .catch(error => {
                this.setState({ error: error })
            });
    }

    render() {
        const min = window.innerWidth >= 1000


        var widthVideo = '60%';
        var widthChat = '30%';
        var marginLeft = '3%';
        var fontSize = 24;
        if (!min) {
            widthVideo = '100%';
            widthChat = '100%';
            marginLeft = '0%';
            fontSize = 20;
        }

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
        var width = 0;
        if (this.state.question || this.state.hasResponse) {
            width = 2;
        }
        var valueResponse = "Falso"
        if (this.state.question && this.state.question.responseServer == 1) {
            valueResponse = "Verdadero";
        }
        console.log(valueResponse);
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
                            <div className='left' style={{ marginBottom: 20, marginLeft: marginLeft, width: widthVideo, height: '500', padding: 2 }}>
                                <div style={{ width: '100%', height: '100%' }}><iframe src={url_video} frameborder="0" width='100%' height='100%' allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
                            </div>
                            <div className='left' style={{ marginLeft: marginLeft, width: widthChat, height: 500, padding: 2, backgroundColor: 'white' }}>
                                <iframe src={url_chat} width="100%" height="100%" frameborder="0"></iframe>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid xs={12} style={{ display: display, position: 'fixed', left: 0, right: 0, bottom: 10, height: 'auto' }}>
                        <Grid container justify='center' alignItems='center'>
                            <Grid xs={10} style={{ width: '80%', backgroundColor: colors.gray, borderRadius: 10, borderWidth: width, borderStyle: 'solid', borderColor: 'white' }}>

                                {this.state.question ?
                                    <Grid container style={{ display: 'flex ', flexDirection: 'row' }}>
                                        <Grid sm={6} xs={12} style={{ height: 'auto' }}>
                                            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <p style={{ fontFamily: 'FrutigerBold', color: "white", margin: 10, fontSize: fontSize, lineHeight: 1, marginTop: 10 }}>{this.state.question.title}</p>
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

                                            <Grid justify='center' alignItems='center' sm={4} xs={12} style={{ width: '100%', display: 'flex ', flexDirection: 'row' }}>
                                                <Grid sm={4} xs={6} style={{ display: 'flex ', flexDirection: 'column', width: '100%' }}>
                                                    <p style={{ fontFamily: 'FrutigerBold', color: "white", margin: 0, fontSize: 14, lineHeight: 1, marginTop: 10 }}>Respuesta correcta:</p>
                                                </Grid>
                                                <Grid sm={6} xs={6} style={{ height: 80 }}>
                                                    {this.state.question.responseServer != null ?
                                                        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Button disabled={true} style={{ height: '50%', width: '70%', borderWidth: 1, borderStyle: 'solid', borderColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                                                <p style={{ fontFamily: 'FrutigerBold', color: "white", margin: 10, fontSize: 20 }}>{valueResponse}</p>
                                                            </Button>
                                                        </div>
                                                        :<div/>
                                                    }
                                                </Grid>
                                            </Grid>


                                        }
                                    </Grid>

                                    :
                                        this.state.hasResponse &&
                                            <Grid container style={{ display: 'flex ', flexDirection: 'row' }}>
                                                <Grid sm={12} xs={12} style={{ height: 80 }}>
                                                    <div style={{ width: '100%', marginTop: 5, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <p style={{ fontFamily: 'FrutigerBold', color: "white", margin: 10, fontSize: fontSize, lineHeight: 1 }}>Gracias por responder, en minutos develaremos la respuesta correcta.</p>
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
