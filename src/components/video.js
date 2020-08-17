import React from 'react';
import './Video.css';


function Video() {
        return (
            <div className="Video">
                <h1 style={h1Style}>ACE PRODUCTIONS</h1>
                <div className="video-background">
                <div className="video-foreground">
                    <iframe title="ACE PRODCUCTIONS" src="https://www.youtube.com/embed/videoseries?listType=playlist&list=PLWrn5jlz67mR_llJQoDoTen8rfaKFa6BV&vq=hd1080&controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1" frameBorder="0" allowFullScreen></iframe>
                </div>
                </div>
            </div>
            );
        }


const h1Style = {
    color: 'red',
    textAlign: 'center',
    marginTop: '3px'
}

export default Video; 



