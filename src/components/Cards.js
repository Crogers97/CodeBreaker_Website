import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Game Screenshots!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src="images/titleScreen.jpg"
                        text="The beginning of the adventure"
                        label = "TitleScreen"
                        path ='/game'/>

                        <CardItem
                        src="images/introMorse.jpg"
                        text="Setting the scene"
                        label = "Introduction"
                        path ='/game'/>
                        
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src="images/desk1.jpg"
                        text="Send morse code, is anyone in distress?"
                        label = "Morse Code"
                        path ='/game'/>

                        <CardItem
                        src="images/Find the Captain.png"
                        text="Explore the ship, find the Captain"
                        label = "Exploration"
                        path ='/game'/>
                        
                    </ul>

                
                </div>

            </div>


        </div>
    )
}

export default Cards;
