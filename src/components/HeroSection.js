import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css';




function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
            <h1>BREAK THE CODE</h1>
            <p>Become the CODEBREAKER!</p>
            <div className='hero-btns'>
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>

                PLAY GAME
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>

                WATCH TRAILER<i className='far fa-play-cirle'/>
                </Button>
            </div>


        </div>
    );
}

export default HeroSection;
