import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li key={'useState'}><Link to='/'>useState</Link></li>
                    <li key={'useEffect'}><Link to='/effect'>useEffect</Link></li>
                    <li key={'useContext'}><Link to='/context'>useContext</Link></li>
                    <li key={'useMemo'}><Link to='/memo'>useMemo</Link></li>
                    <li key={'useRef'}><Link to='/ref'>useRef</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
