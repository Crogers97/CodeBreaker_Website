import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the Game Newsletter to recieve updates on the CodeBreaker Journey!</p>
            <p className='footer subscription-text'>Get instant Updates.</p>
            <div className='input-area'>
                <form>
                    <input type="email" name="email" placeholder='Your Email'
                    className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>

        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>

                    <a target="_blank" href="https://www.linkedin.com/in/calum-rogers-0b1288222/">Calum</a>
                    <a target="_blank" href='https://www.linkedin.com/in/anthony-byledbal/'>Tony</a>
                    <a target="_blank" href='https://www.linkedin.com/in/willem-prins/'>Will</a>
                    <a target="_blank" href= 'https://www.linkedin.com/in/neil-hanlon/'>Neil</a>
            
                </div>
                
            </div>
            <div className='footer-link-wrapper'>
                
                <div className='footer-link-items'>
                    <h2>GitHub Link</h2>
                    <a target="_blank" href="https://github.com/Crogers97">Calum</a>
                    <a target="_blank" href='https://github.com/ByAnthony'>Tony</a>
                    <a target="_blank" href='https://github.com/PrinsWillem'>Will</a>
                    <a target="_blank" href= 'https://github.com/NeilH2'>Neil</a>
                    
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <p>Calum.rogers23@gmail.com</p>
                    <p>Tony</p>
                    <p>Will</p>
                    <p>Neil</p>
                    
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        CodeBreaker <i className='fab.fa-typo3'></i>
                    </Link>
                </div>
                <small className='website-rights'> CodeBreaker © 2021</small>
                
                
            </div>
            </section> 
        </div>
    )
}

export default Footer
