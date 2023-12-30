import React from 'react'
import { useState } from 'react'
import './Navbar.css';
import { IconContext } from 'react-icons';
import * as FaIcons from "react-icons/fa";
import Sidebar from './Sidebar/Sidebar';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (

        <IconContext.Provider value={{ color: 'white' }}>
            <div className='navbar'>
                <div className='menu-bar'>
                    < FaIcons.FaBars onClick={showSidebar} />
                </div>
                <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
                <div className='nav-title'>
                    <h1>Priyanshu</h1>
                </div>


            </div>

        </IconContext.Provider>

    )
}

export default Navbar

