import React, { Component } from 'react';
import Video from './components/video'; 
import Popup from './components/popup'; 
import Contact from './components/contact'
import './App.css';

class App extends Component{

    //Constructor to use to initiaize state \
    //If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
    constructor(props){ //constructor method --> create and init object within class 
        super(props); //must be used b4 'this' keyword
        this.state = {showPopup: false}; //use super before 'this' keyword 
        this.state = {showForm: false};
    }

    togglePopup() {  
        this.setState({  //to set state 
             showPopup: !this.state.showPopup  //Opposite of default if click --> showPopup : True  
        });  
    }

    toggleFormPopup() {
        this.setState({
            showForm: !this.state.showForm 
        });
    }

    render(){
    return (
    <div className="App">
        <title>ACE PRODUCTIONS</title>
        <div style={container}>
        <h1 style={h1Style}>ACE PRODUCTIONS</h1>
        <ul style={text}>
            <li><a href="https://www.youtube.com/channel/UCXcm2qssdip3tdSaU9przcQ/featured" className="icon brands fa-linkedin"><span className="label">Youtube</span></a></li>
            <li><a href="https://www.instagram.com/aceproductions96/?hl=en" className="icon brands fa-github"><span className="label">Instagram</span></a></li>
            <li><button onClick={this.togglePopup.bind(this)} style={cursor}>About</button>  
            {this.state.showPopup ?  //condition 
            <Popup  
                text='Ace Productions is film production group that focus on making independent horror and thriller short films'  
                closePopup={this.togglePopup.bind(this)}  //inside --> // This binding is necessary to make `this` work in the callback
            />  
            : null } 
            </li>
            <li><button onClick={this.toggleFormPopup.bind(this)} style={cursor}>Contact</button>
                {this.state.showForm ? 
                <Contact closeForm={this.toggleFormPopup.bind(this)}
                />             : null }
            </li>
        <Video />
        </ul>
        </div>
    </div>
  );
}
}

const h1Style = {
    color: 'red',
    textAlign: 'center',
    marginTop: '3px'
}

const text = {
    fontSize: "25px",
}

const container = {
    backgroundColor: "#111",
    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 1) 100%)",
    textAlign: "center",
    overflow: "hidden",
    touchAction: "none",
}

const cursor = {
    cursor: "pointer",
    fontWeight: "bold"
}



export default App;
