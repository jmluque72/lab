import React from "react";
import PropTypes from "prop-types";
import Header from './Header.js'
import Grid from '@material-ui/core/Grid';
import './Main.css'
import { colors } from '../utils';
import up from '../assets/up_red.png';
import orAD from '../assets/oradores/Dr.AlejandroDain.png'
import orAL from '../assets/oradores/Dr.AugustoLavalleCobo.png'
import orGD from '../assets/oradores/Dr.GuillermoDieuzeide.png'
import orJQ from '../assets/oradores/Dr.JoaquinGonzalez.png'
import orEj from '../assets/oradores/Dr.EstebanJadar.png'
import orHG from '../assets/oradores/Dr.HugoSanabria.png'
import orRD from '../assets/oradores/Dr.RafaelDiaz.png'
import orCL from '../assets/oradores/Dra.CeciliaLuquez.png'
import orAP2 from '../assets/oradores/Dr.AdrianProietti.png'
import orDA from '../assets/oradores/Dr.DanielAlbertoSiniawski.png'

import orLL from '../assets/oradores/orLL.png'
import orDP from '../assets/oradores/orDP.png'
import orJL from '../assets/oradores/orJL.png'


import Masonry from "react-responsive-masonry"
class Oradores extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            oradores: [
                { type:1,name: 'Dr. Augusto Lavalle Cobo', img: orAL, inf: ['Médico cardiólogo', 'Coordinador servicio de cardiología, Sanatorio Finochietto', 'Director Consejo Epidemiología y Prevención Vascular (SAC)',] , extra : ['Astra Zeneca', 'Novo Nordisk']},
                { type:2,name: 'Dr. Guillermo Dieuzeide', img: orGD, inf: ['Doctor en Medicina UBA', 'Especialista Endocrinología (CREM/SAEM/CMPBA)', ' Miembro titular de la SAD','Jefe Servicio Endocrinología y Diabetes del Hospital Nuestra Señora del Carmen Chacabuco'] , extra : ['Speaker: Novo Nordisk, Astra Zeneca, Montpellier', 'Advisory Board: Novo Nordisk, Sanofi Aventis','Investigación: Novo Nordisk, Sanofi Aventis, Takeda, BMS', 'Becas recibidas por Novo Nordisk, Sanofi Aventis, Montpellier, Aztra Zeneca, Roche diagnóstico, laboratorio Beta. ']},
                { type:1,name: 'Dr. Joaquín González', img: orJQ, inf: ['Médico especialista en clínica médica', 'Médico especialista en diabetología', 'Egresado de la Escuela de Graduados de la Sociedad Argentina de Diabetes','Médico del Hospital Universitario de la Universidad Nacional de Cuyo',] , extra : ['Boehringer Ingelheim','Novo Nordisk','Sanofi','Servier']},
                { type:3,name: 'Dr. Esteban Jódar', img: orEj, inf: ['Médico Endocrinólogo', 'Jefe de Departamento de Endocrinología y Nutrición de los Hospitales Universitarios Quirón Madrid de Pozuelo, San Camilo y San José', 'Catedrático de Endocrinología en la Facultad de Medicina de la Univ. Europea de Madrid.','Miembro saliente de la Junta Directiva de la Soc. Madrileña de Endocrinología y de la SEIOMM.']},
                { type:2,name: 'Dr. Hugo Sanabria', img: orHG, inf: ['Médico cardiólogo especializado en diabetes', 'Especialista en medicina interna', 'Egresado de la escuela de graduados de la Sociedad Argentina de Diabetología. ','Jefe de la Unidad de Diabetes del Instituto Cardiovascular de Buenos Aires (ICBA)'],extra : ['Speaker: Astra Zeneca, Boehringer Ingelheim, Janssen','Novo Nordisk, Eli Lilly, Servier.','Advisory Board: Astra Zeneca, Boehringer Ingelheim, Janssen, Novo Nordisk, Sanofi.','Investigación: Astra Zeneca, Boehringer Ingelheim, Bayer, Sanofi']},
                { type:2,name: 'Dr. Rafael Díaz', img: orRD, inf: ['MD. Cardiólogo', 'Fundador y Director ECLA. Rosario, Argentina', 'Fundador Instituto Cardiovascular Rosario','Buenos Aires, Argentina - 1990'],extra : ['Research grants: Sanofi, Eli lilly, Amgen, Population heart research institute, Duke clinical research institute, Montreal health research coordinating center, Lepetit sa, Dalcor', 'Cirius therapeutics, Heart initiative', 'Speaker fees: Sanofi, Astra Zeneca, Eli lilly, Amgen, Novo Nordisk']},
                { type:2,name: 'Dr. Alejandro Dain', img: orAD, inf: ['Especialista en medicina interna, diabetes y nutrición clínica', 'Profesor Universitario. Universidad Nacional de Córdoba, Universidad Católica de Córdoba, Universidad Nacional de Villa María.'],extra : ['Advisory Board: Roche Diabetes Care.', 'Speaker: Abbott, Astra Zeneca, Boehringer, Craveri, Novo Nordisk, Roche', ]},
                { type:1,name: 'Dra. Cecilia Luquez', img: orCL, inf: ['Médica especialista en clínica médica', 'Especialista en diabetología'],extra : ['Astra Zeneca', 'Novo Nordisk', ]},
                { type:1,name: 'Dr. Adrian Proietti', img: orAP2, inf: ['Médico especialista en medicina interna y endocrinología', 'Director del Instituto Integral de Diabetes y Tecnología Aplicada (IDTA)','Director del curso de Tecnología de la SAD'],extra : ['Abbot', 'Aegerium','Astra Zeneca','Boehringer','Eli Lilly', 'Medtronic', 'Novo Nordisk','Sanofi','Servier' ]},
                { type:2,name: 'Dr. Daniel Alberto Siniawski', img: orDA, inf: ['Médico cardiólogo. Especialista en lípidos', 'Sección Prevención Cardiovascular Hospital Italiano. ','Fundador y coordinador de la Clínica de Lípidos y aféresis de colesterol'],extra : ['Speaker: Laboratorios MSD, Sanofi Aventis y Novo Nordisk.', 'Advisory Board: Laboratorios MSD, Sanofi Aventis, Novo Nordisk y Amgen.', 'Investigación: Kowa Research Institute, Novo Nordisk A/S.']},
                { type:3,name: 'Dr. Lawrence A. Leiter', img: orLL, inf: ['Director de la Clínica de Lípidos; Director Asociado del Centro de Modificación de Factores de Riesgo y Nutrición Clínica; y científico asociado, Li Ka Shing Knowledge Institute del St. Michaels Hospital en Toronto, donde también fue Jefe de la División de Endocrinología y Metabolismo de 2000 a 2010. Prof. en Deptos de Medicina y Ciencias de la Nutrición de la Univ. de Toronto. Investigador en muchos de los ensayos de diabetes más importantes, incluidos DCCT, ACCORD y ADVANCE. Tiene más de 680 publicaciones. Ex presidente de la Sociedad Canadiense de Endocrinología y Metabolismo (CSEM) y ex presidente de la Sección Clínica y Científica de la Asociación Canadiense de Diabetes (CDA).']},
                { type:3,name: 'Dr. Jack Lawson', img: orJL, inf: ['Medical Doctor, Sydney, Australia Global Medical Manager (semaglutida semanal) en Global Medical Affairs (GMA), Novo Nordisk GMA Responsable de SUSTAIN 11 y estudio FLOW.']},
                { type:3,name: 'Dr. Daniel Piskorz', img: orDP, inf: ['Médico especialista en cardiología Director del Centro de Investigaciones Cardiovasculares del Sanatorio Británico SA Médico de Planta del Instituto de Cardiología del Sanatorio Británico SRL Presidente de la Federación Argentina de Cardiología – Año 2017 Presidente de la Sociedad Argentina de Hipertensión Arterial – Año 2011 – 2013 Miembro International Society of Hypertension Miembro Honorario Central America and Caribbean Society of Hypertension and Cardiovascular Prevention Miembro American College of Cardiology Miembro Sociedad Interamericana de Cardiología Miembro de Honor de Sociedad Española de Cardiología Ultramar Member British and Irish Hypertension Society Miembro del Directorio de la Sociedad Latinoamericana de Hipertensión']},
            ]
        };
    }
    upRotate(x){
        if(this.state[x]){
            return `rotate(180deg)`
        }else{
            return `rotate(0deg)`
        }
    }

    render() {
        const gray = colors.gray
        const min = window.innerWidth >= 1000
        var avatarSize = 240;
        if (!min) {
            avatarSize = 170;
        }
        return (
            <div>
                <div  style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                    <div style={{ width:340,display:'flex',flexDirection:'column',position:'relative',height:115}}>
                        <p style={{ fontFamily:'FrutigerBlack',fontSize: min ? 70 : 55,color:gray,textAlign:'center',marginTop:20}}>ORADORES</p>
                        <div style={{ width:100,height:15,backgroundColor:gray,position:'absolute',bottom:0,left:min ? 0 :15}}></div>
                    </div>
                    <div  style={{width:'100%'}}>
                        <Grid item sm={12}>
                                <div  style={{ marginTop:50,display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
                                    <Masonry columnsCount={min ? 3 : 2} gutter="10px">
                                    {this.state.oradores.map((item,index) => {
                                        var x = ['info' + index] ;
                                        switch(item.type){
                                            case 2:
                                                return(
                                                    <div style={{width:'100%',display:'flex',alignItems:'center',flexDirection:'column'}}>
                                                        <div style={{ width:avatarSize,height:avatarSize,borderRadius:avatarSize/2,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                                <img style={{ width:'100%'}} src={item.img}>
                                                                </img>
                                                        </div>
                                                        <p style={{ fontFamily:'FrutigerBlack',fontSize:16,color:gray,textAlign:'center',margin:0,marginTop:10}}>{item.name}</p>
                                                        <div onClick={() => this.setState({[x] : !this.state[x]})} style={{cursor:'pointer', width:'100%',height:30,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                                            <p style={{ fontFamily:'FrutigerBlack',fontSize:12,color:'#ec2424',textDecoration:'underline red',textAlign:'center',margin:0}}>MÁS INFO</p>
                                                            <img src={up} style={{ height:'30%',marginLeft:5,transform:this.upRotate(x)}}></img>
                                                        </div>
                                                        {/* {true&& ( */}
                                                        {this.state[x] && (
                                                            <div style={{ width:'100%',display:'flex',flexDirection:'column'}}>
                                                                <ul style={{ textAlign:'left'}}>
                                                                    {item.inf?.map((i) => {
                                                                        return(
                                                                            <li style={{fontFamily:'FrutigerLight',margin:0}}>{i}</li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                                
                                                                <p style={{ fontFamily:'FrutigerBlack',margin:0}}>Conflictos de interés</p>
                                                                <div style={{ display:'flex',flexDirection:'column'}}>
                                                                    {item.extra.map((i) => {
                                                                        return(
                                                                            <p style={{fontFamily:'FrutigerLight',margin:0,textAlign:'left'}}>{i}</p>

                                                                        )
                                                                    })}
                                                                </div>
                                                               
                                                              
                                                            </div>
                                                        )}
                                                    </div>
                                                )
                                                break;
                                                default:
                                                    // var values = Object.values(item.extra[0])
                                                    return(
                                                        <div style={{ width:'100%',display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
                                                            <div style={{ width:avatarSize,height:avatarSize,borderRadius:avatarSize/2,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                                    <img style={{ width:'100%'}} src={item.img}>
                                                                    </img>
                                                            </div>
                                                            <p style={{ fontFamily:'FrutigerBlack',fontSize:16,color:gray,textAlign:'center',margin:0,marginTop:10}}>{item.name}</p>
                                                            <div onClick={() => this.setState({[x] : !this.state[x]})} style={{width:'100%',cursor:'pointer', height:30,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                                                <p style={{ fontFamily:'FrutigerBlack',fontSize:12,color:'#ec2424',textDecoration:'underline red',textAlign:'center',margin:0}}>MÁS INFO</p>
                                                                <img src={up} style={{ height:'30%',marginLeft:5,transform:this.upRotate(x)}}></img>
                                                            </div>
                                                            {/* {true&& ( */}
                                                            {this.state[x] && (
                                                                <div style={{ width:'100%',display:'flex',flexDirection:'column'}}>
                                                                    <ul style={{ textAlign:'left'}}>
                                                                        {item.inf?.map((i) => {
                                                                            return(
                                                                                <li style={{fontFamily:'FrutigerLight',margin:0}}>{i}</li>
                                                                            )
                                                                        })}
                                                                    </ul>
                                                                    {item.type ==  3?  <p></p> : <p style={{ fontFamily:'FrutigerBlack',margin:0}}>Conflictos de interés</p> }
                                                                    <Grid container style={{ display:'flex',flexDirection:'row',justifyContent:'center',width:'100%',alignItems:'center'}}>
                                                                        {item.extra?.map((i,ind) => {
                                                                            const lenght = item.extra?.length - 1
                                                                            if(lenght == ind){
                                                                                return(
                                                                                    <p style={{fontFamily:'FrutigerLight',margin:2,textAlign:'left'}}>{i} </p>
                                                                                )
                                                                            }else{
                                                                                return(
                                                                                    <p style={{fontFamily:'FrutigerLight',margin:2,textAlign:'left'}}>{i}, </p>
                                                                                )
                                                                            }
                                                                        })}
                                                                    </Grid>
                                                                       
                                                                </div>
                                                            )}
                                                        </div>
                                                    )
                                                    break
                                        }
                                        
                                    })}
                                </Masonry>
                                
                                </div>
                            
                        </Grid>
                    </div> 
                </div>
                <Header state='oradores'></Header>
            </div>
        );
    }
}

Oradores.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Oradores;
