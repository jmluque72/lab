import React from "react";
import PropTypes from "prop-types";
import Header from './Header.js'
import Grid from '@material-ui/core/Grid';
import './Main.css'
import { colors } from '../utils';
import up from '../assets/up_red.png';

class Oradores extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            oradores: [
                { name: 'Nombre y Apellido', img: '', inf: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci'},
                { name: 'Nombre y Apellido', img: '', inf: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci'},
                { name: 'Nombre y Apellido', img: '', inf: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci'},
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
        return (
            <div>
                <div  style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                    <div style={{ width:340,display:'flex',flexDirection:'column',position:'relative',height:115}}>
                        <p style={{ fontFamily:'FrutigerBlack',fontSize:60,color:gray,textAlign:'center',marginTop:20}}>ORADORES</p>
                        <div style={{ width:100,height:15,backgroundColor:gray,position:'absolute',bottom:0,left:0}}></div>
                    </div>
                    <div  style={{width:'100%'}}>
                        <Grid item sm={12}>
                            <Grid container direction='row' justify='center' style={{ marginTop:50}}>
                                {this.state.oradores.map((item,index) => {
                                    var x = ['info' + index] ;
                                    return(
                                    <Grid sm={3} xs={6} style={{ }}>
                                        <Grid container direction='column' justify='center' alignItems='center' style={{ }}>
                                            <div style={{ width:170,height:170,borderRadius:170/2,background:colors.degrade_orange,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                <div style={{ width:150,height:150,borderRadius:150/2,backgroundColor:'white'}}></div>
                                            </div>
                                            <p style={{ fontFamily:'FrutigerBlack',fontSize:16,color:gray,textAlign:'center',margin:0,marginTop:10}}>{item.name}</p>
                                            <div onClick={() => this.setState({[x] : !this.state[x]})} style={{cursor:'pointer', height:30,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                                <p style={{ fontFamily:'FrutigerBlack',fontSize:12,color:'#ec2424',textDecoration:'underline red',textAlign:'center',margin:0}}>MÁS INFO</p>
                                                <img src={up} style={{ height:'30%',marginLeft:5,transform:this.upRotate(x)}}></img>

                                            </div>
                                            {this.state[x] && (
                                                <div style={{ width:'100%',display:'flex',justifyContent:'center'}}>
                                                    <p style={{ fontFamily:'FrutigerBold',fontSize:12,lineHeight:1,color:gray,textAlign:'center',width:'80%'}}>{item.inf}</p>
                                                </div>
                                            )}
                                        </Grid>
                                    </Grid>
                                    )
                                })}
                               
                            </Grid>
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
