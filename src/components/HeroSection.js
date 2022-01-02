import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>BREAK THE CODE</h1>
            <p>There's a distress signal, people need saved!</p>
            <div className='hero-btns'>
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>

                GET STARTED
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>

                WATCH TRAILER
                </Button>
            </div>


        </div>
    )
}

export default HeroSection
