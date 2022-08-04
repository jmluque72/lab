import React from "react";
import PropTypes from "prop-types";
import Header from './Header.js'
import { Grid, Button } from '@material-ui/core';
import Background from '../assets/backgroundZoonvetAll.jpg'
import BackgroundR from '../assets/backgroun_responsive_all.jpg'
import LogoOzempicHeader from '../assets/logo_white.png'
import up_white from '../assets/up_white.png'
import { colors } from '../utils'
import './Main.css'
import jugar from '../assets/boton_jugar.png'
import logoNovo from '../assets/logoZoon.svg'
import imgComoserParte from '../assets/imgNuestraFiesta-01.png';
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
            url_video_es: "https://vimeo.com/event/2331784/embed",
            url_video_en: "https://vimeo.com/event/2331784/embed",
            url_chat_es: "https://vimeo.com/event/2331784/chat/",
            url_chat_en: "https://vimeo.com/event/2331784/chat/",
            client: null,
            loading: false
        };
    }



    componentWillUnmount = () => {

    }

    timer2 = () => {
        return
        this.getQuestion();
        this.getResponse();
    }

    timer = () => {
        return
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
                this.setState({ hasResponse: true, question: null });
            })
            .catch(error => {
                this.setState({ error: error })
            });
    }

    play = () => {
        window.open("https://quizizz.com/join?class=O305839", "_blank");
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
        if (min) {
            return (
                <div style={{ width: '100%', minHeight: window.innerHeight, flexDirection: 'row' }}>
                    <img style={{ width: '100%', minHeight: window.innerHeight, height: '100%', position: 'fixed', top: 0, left: 0, backgroundSize: 'cover' }} src={Background} />
                    <img style={{ width: 90, height: 90*0.64, position: 'absolute', top: 10, right: 10 }} src={logoNovo}></img>

                    <Grid item xs={12} style={{ height: window.innerHeight, position: 'absolute', top: -90, left: 0, width: '100%', paddingBottom: 50 }}>
                        <Grid container direction='column' justifyContent='space-between'>
                            <Grid item md={12} style={{ padding: 10 }}>
                            <Grid item md={12} container direction='row'  style={{  paddingRight: 15, paddingLeft: 15 }}>
                                <div style={{ height: '100%', width: '70%' }}>
                          <img style={{ marginLeft: min? '-2%' : '6%',marginTop: min? '' : '5%', width: min? 800 :250, height: min? 250: 190}} src={imgComoserParte} ></img>
                                </div>
                                <div style={{ marginTop: 30, padding:60, height: '100%', width: '15%' }}>
                                {/*<Button onClick={() => this.play()} style={{}}>
                                    <img style={{ width: 150, height: 150 * 0.40 }} src={jugar} />
                                </Button>*/}
                                </div>
                                </Grid>
                             </Grid>
                        <Grid item xs={12} className='container' style={{ marginTop: '-4%' ,width: '100%', padding: 10 }}>
                            <Grid container justifyContent='space-between'>
                                <div className='left' style={{ border: '10px solid #FFFFFF', marginBottom: 20, marginLeft: marginLeft, width: widthVideo, height: 500, padding: 2 }}>
                                    <div style={{ width: '100%', height: '100%' }}>
                                        <iframe src={url_video} frameBorder="0" width='100%' height='100%' allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                                    <div className='left' style={{ marginLeft: marginLeft, width: widthChat, height: 500, backgroundColor: 'white' }}>

                                    <iframe src={url_chat} width="100%" height="100%" frameBorder="0"></iframe>
                                </div>
                            </Grid>
                        </Grid>
                        </Grid>
                        </Grid>
                </div>
            );
        } else {

            return (
                <div style={{ width: '100%', flexDirection: 'row' }}>
                            <img style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0 }} src={BackgroundR} />
                            <Grid item xs={12} style={{ height: window.innerHeight , position: 'absolute', top: 0, left: 0, width: '100%' }}>
                                <Grid container direction='column'>
                                    <Grid item xs={12} sm={12}  style={{ padding: 10 }}></Grid>
                                    <Grid container direction='row' justifyContent='space-between' style={{  paddingRight: 15, paddingLeft: 15 }}>
                                        <div style={{ height: '100%', width: '100%' }}>
                                            <p style={{ fontFamily: 'Montserrat-Black', padding: 10, marginLeft: marginLeft, fontSize: 35, color: 'white' }}>NUESTRA FIESTA!</p>
                                        </div>

                                    </Grid>
                                    {/*<Button onClick={() => this.play()} style={{marginTop: 20}}>
                                            <img style={{ width: 150, height: 150 * 0.40 }} src={jugar} />
                                        </Button>*/}

                        <Grid xs={12} justifyContent='center' className='container' style={{ marginTop: 50, width: '100%', padding: 10 }}>
                            <Grid container >
                                <div className='left' style={{ border: '10px solid #FFFFFF', marginBottom: 20, marginLeft: marginLeft, width: widthVideo, height: '500' }}>
                                    <div style={{ width: '100%', height: '100%' }}>
                                            <iframe src={url_video} frameborder="0" width='100%' height='100%' allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                            <iframe style={{ marginTop: 50, background:'white'}} src={url_chat} width="100%" height="100%" frameborder="1" allowfullscreen></iframe>
                                        </div>
                                    </div>
                            </Grid>
                        </Grid>
                    </Grid>
                        </Grid>
                </div>
            );

        }

    }
}

Vivo.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Vivo;