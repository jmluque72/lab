import React from "react";
import PropTypes from "prop-types";
import LogoNovo from '../assets/logo_novo.png'
import menu from '../assets/menu.png'
import LogoOzempicHeader from '../assets/logo_ozempic_header.png'
import './Main.css';
import Grid from '@material-ui/core/Grid';

class Header extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
        };
    }

    setValue = (module) => {
        this.props.redirect(module);
        this.setState({menu: false});
    }
    
    render() {
        
        const classHome = this.props.state === 'home' ? 'label-header-selected'  :'label-header-not-selected'
        const classAgenda = this.props.state === 'agenda' ? 'label-header-selected'  :'label-header-not-selected'
        const classOradores = this.props.state === 'oradores' ? 'label-header-selected'  :'label-header-not-selected'
        const classEvento = this.props.state === 'evento' ? 'label-header-selected'  :'label-header-not-selected'
        const classConsultas = this.props.state === 'consultas' ? 'label-header-selected'  :'label-header-not-selected'
        const classContactos = this.props.state === 'contacto' ? 'label-header-selected'  :'label-header-not-selected'
        const min = window.innerWidth >= 1000
        return (
            <div className='header' style={{background: '#F1EFEF',zIndex:10, paddingTop:20,paddingBottom:20, position: 'fixed', height: this.state.menu ? 140 : 100, left: 0, top: 0, right: 0, flexDirection: 'column' }}>
                <Grid container>
                    <Grid  xs={10} sm={4} style={{ height:60,}}>
                        <Grid container direction='row' justify='space-around'>
                            <div style={{ width:80,height:60,display:'flex',justifyContent:'center'}}>
                                <img style={{width: '100%',height:'auto'}} src={LogoNovo} />
                            </div>
                            <div style={{ width:200,height:60,display:'flex',justifyContent:'center'}}>
                                <img style={{width: '100%'}} src={LogoOzempicHeader} />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item sm={2} ></Grid>
                    {!min ? 
                        <Grid xs={2} sm={6} style={{ display:'flex',justifyContent:'flex-end',alignItems:'center',}}>
                            <div onClick={() => this.setState({ menu : !this.state.menu})} >
                                <img src={menu} style={{ width:40,height:40,cursor:'pointer'}}></img>
                            </div>
                        </Grid>
                        :
                        <Grid sm={6} style={{ display:'flex',paddingLeft:10,paddingRight:40}}>
                            <Grid container direction={'row'} alignItems='center' justify='space-between'>
                                <a  onClick={(event) => { this.props.redirect("Home",)}} className={classHome}>HOME</a>
                                <a  onClick={() => this.props.redirect("Agenda")} className={classAgenda} >AGENDA</a>
                                <a  onClick={() => this.props.redirect("Oradores")}  className={classOradores} >ORADORES</a>
                                <a  onClick={() => this.props.redirect("Evento")}  className={classEvento} >EVENTO</a>
                                <a  onClick={() => this.props.redirect("Consultas")}  className={classConsultas}>CONSULTAS</a>
                                <a  onClick={() => this.props.redirect("Contacto")}  className={classContactos}>CONTACTO</a>
                            </Grid>
                        </Grid>
                    }
                    {this.state.menu && (
                    <Grid xs={12} sm={12} style={{ display:'flex'}}>
                        <Grid container direction={'column'} alignItems='flex-end' style={{ paddingRight:10,backgroundColor:'#F1EFEF'}} justify='space-between'>
                            <a onClick={() => this.setValue("Home")} className={classHome}>HOME</a>
                            <a onClick={() => this.setValue("Agenda")} className={classAgenda} >AGENDA</a>
                            <a onClick={() => this.setValue("Oradores")} className={classOradores} >ORADORES</a>
                            <a onClick={() => this.setValue("Evento")} className={classEvento} >EVENTO</a>
                            <a onClick={() => this.setValue("Consultas")} className={classConsultas}>CONSULTAS</a>
                            <a onClick={() => this.setValue("Contacto")} className={classContactos}>CONTACTO</a>
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
