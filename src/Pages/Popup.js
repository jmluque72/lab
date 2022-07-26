import React from 'react';
import './Main.css';
import pass from '../assets/password-02.png';

class Popup extends React.Component {
    render() {
   const min = window.innerWidth >= 1000
        return (
        <div className='popup' style={{width: min? '':'100%', height: min? '':'50%', alignContent: 'center'}} >
                <div className='popup_open'style={{marginTop: min? '' : '-4%', left: min?'': '0', width: min? '' :'100%', height: min? '': '40%'}}>
                     <button onClick={this.props.closePopup}>X</button>
                    <h1 style={{ alignContent: 'center' }} >{this.props.text}
                        <img src={pass} style={{width: '100%', height: '100%'}}></img>
                    </h1>

        </div>
        </div>
        );
}
}
export default Popup;
