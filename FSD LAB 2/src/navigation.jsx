import React from 'react'

function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <h2 className="logo">FSD CLASS</h2>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Classes</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
