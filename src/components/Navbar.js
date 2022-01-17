import { Link } from 'gatsby'
import React from 'react'

function Navbar() {
    return (
        <nav>
            <h1>
                Web Builder
            </h1>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <a href=""></a>
            </div>
        </nav>
    )
}

export default Navbar
