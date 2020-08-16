import React, { Component } from 'react';
import Video from './components/video'; 
import Popup from './components/popup'; 
import './App.css';

class App extends Component{


    constructor(props){
        super(props);
        this.state = {showPopup: false}
    }

    togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
    }

    render(){
    return (
    <div className="App">
        <title>ACE PRODUCTIONS</title>
        <div style={container}>
        <Video/>
        <ul>
            <li><a href="https://www.youtube.com/channel/UCXcm2qssdip3tdSaU9przcQ/featured" className="icon brands fa-linkedin"><span className="label">Youtube</span></a></li>
            <li><a href="https://www.instagram.com/aceproductions96/?hl=en" className="icon brands fa-github"><span className="label">Instagram</span></a></li>
            <li><button onClick={this.togglePopup.bind(this)}>About</button>  
            {this.state.showPopup ?  
            <Popup  
                text='Ace Productions is a short film making channel that focus on making horror and thriller content'  
                closePopup={this.togglePopup.bind(this)}  
            />  
            : null  
            } </li>
            <li><button>Contact</button></li>
        </ul>
        </div>
    </div>
  );
}
}

const container = {
    // height: "100vmax",
    // width: "100vmax%",
    backgroundColor: "#111",
    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 1) 100%)",
    textAlign: "center"
}




export default App;
