import React from "react";
import PropTypes from "prop-types";
import LogoNovo from '../assets/logoHeader.png'
import menu from '../assets/menu.png'
import LogoZoovet from '../assets/LogoVete.png'

import Vivo from '../assets/logoZoovetHeader.svg'

import './Main.css';
import Grid from '@material-ui/core/Grid';

class Header extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            menu:false
        };
    }

    setValue = (module) => {
        this.props.redirect(module);
        this.setState({ menu: false });
    }

    openSpoty = () => {
        window.open("https://open.spotify.com/playlist/2O6ZBlOlSATltyInDUIg7W?si=eNuhhomJQGur2r4_gIxk8w&utm_source=whatsapp")
    }
    render() {
        const classHome = this.props.state === 'home' ? 'label-header-selected' : 'label-header-not-selected'
        const classAgenda = this.props.state === 'agenda' ? 'label-header-selected' : 'label-header-not-selected'
        const classOradores = this.props.state === 'oradores' ? 'label-header-selected' : 'label-header-not-selected'
        const classEvento = this.props.state === 'evento' ? 'label-header-selected' : 'label-header-not-selected'
        const classConsultas = this.props.state === 'consultas' ? 'label-header-selected' : 'label-header-not-selected'
        const classContactos = this.props.state === 'contacto' ? 'label-header-selected' : 'label-header-not-selected'
        const min = window.innerWidth >= 900

     return (
         <div className='header' style={{
             fontFamily: 'Montserrat-SemiBold',
            height:150,display:'flex',justifyContent:'center',boxShadow:'none',
             background: '#ffffff', position: 'fixed',
            left: 0, top: 0, right: 0,
             borderTop: '30px solid  #0d80bb', borderBottom: '20px solid  #0d80bb'}}>

        <Grid container style={{}}>
                 <Grid xs={10} sm={6} md={4}  style={{ height: 90, }}>
                        <Grid container direction='row' justifyContent='space-around' position='absolute'>

                                   <div style={{minWidth:400, width: 400, height: 90, display: 'flex', justifyContent: 'center'}}>

                                     <img src={LogoZoovet} onClick={() =>  {this.props.redirect('Home')}} alt='logo-zoovet' height='95px' width='auto' style={{ marginRight:16,cursor:'pointer'}}></img>
                                     </div>


                        </Grid>
                    </Grid>

                    {!min ?
                        <Grid xs={2} sm={12} md={2} style={{ paddingTop:-20,display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <div onClick={() => this.setState({ menu: !this.state.menu })} >
                                <img src={menu} style={{ width: 40, height: 40, cursor: 'pointer' }}></img>
                            </div>
                        </Grid>
                        :
                     <Grid sm={6} md={8}  style={{ display: 'flex', paddingLeft: 100, paddingRight: 10 }}>
                            <Grid container direction={'row'} alignItems='center' justifyContent='space-between'>
                                <a onClick={(event) => { this.props.redirect("Home",) }} className={classHome}>HOME</a>
                                <a onClick={() => this.props.redirect("Agenda")} className={classAgenda} >NUESTRA FIESTA</a>
                                <a onClick={() => this.props.redirect("Evento")} className={classEvento} >CÓMO SER PARTE</a>
                                <a onClick={() => this.props.redirect("Consultas")} className={classConsultas}>CONSULTAS</a>
                                <img src={Vivo} style={{ width: 120, height: 160 * 0.26, cursor: 'pointer' }}></img>
                            </Grid>
                        </Grid>
                    }
                    {this.state.menu && (
                        <Grid xs={12} sm={12} style={{ display: 'flex', position: 'absolute', width:'100%'}}>
                            <Grid container direction={'column'} alignItems='flex-end' style={{ marginTop:90,paddingRight: 10, backgroundColor: '#F1EFEF' }} >
                                <a onClick={() => this.setValue("Home")} className={classHome} style={{color: 'black'}}>HOME</a>
                                <a onClick={() => this.setValue("Agenda")} className={classAgenda}  style={{color: 'black'}}>NUESTRA FIESTA</a>
                                <a onClick={() => this.setValue("Evento")} className={classEvento}  style={{color: 'black'}}>CÓMO SER PARTE</a>
                                <a onClick={() => this.setValue("Consultas")} className={classContactos}  style={{color: 'black'}}>CONSULTAS</a>
                                <img src={Vivo} style={{  width: 80, height: 80 * 0.26, cursor: 'pointer' }}></img>

                            </Grid>
                        </Grid>
                    )
                    }

             </Grid>

            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Header;

