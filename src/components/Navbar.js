import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({ homePage }) => {
    return (
        <nav>
            <div className="nav-wrapper teal darken-4">
                {!homePage && <ul className="left">
                    <li><Link to="/"><i className="material-icons">arrow_back</i></Link></li>
                </ul>}
                <a href="#!" className="brand-logo center"><i className="material-icons" style={{"fontSize": "40px"}}>local_dining</i>Recipeas</a>
            </div>
        </nav>
    )
}
