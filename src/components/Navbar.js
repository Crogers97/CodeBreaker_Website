import { click } from '@testing-library/user-event/dist/click'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo'>
                    TRVL <i class="fas fa-ship"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>

                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/game' className='nav-links' onClick={closeMobileMenu}>
                            Game
                            </Link>
                        </li>
                    </ul>
                        
                </div>
            </nav>
        </>
    )
}

export default Navbar
