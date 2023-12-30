import React from 'react'

import { Link } from 'react-router-dom';
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';

function Sidebar({ sidebar, showSidebar }: any) {
    if (!sidebar)
        return null;

    return (
        <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
            < ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to='#' className="menu-bar">
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {
                    SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
            </ul>
        </nav>
    )
}

export default Sidebar