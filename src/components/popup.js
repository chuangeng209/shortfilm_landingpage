import React, {Component} from 'react';
import './Popup.css';

class Popup extends Component{

    render(){
    return (
        <div className = "popup">
            <div className='popup\_inner'>  
            <h1 style={about}>{this.props.text}</h1>  
            <button style={cursor} onClick={this.props.closePopup}>Close</button>  
            </div>  
        </div>
  );
}
}


const about = {
    color: "red",
    fontWeight: "bold"
}

const cursor = {
    color: "red",
    cursor: "pointer",
    fontWeight: "bold"
}


export default Popup; 


//Props get pass to component
//State within component  

