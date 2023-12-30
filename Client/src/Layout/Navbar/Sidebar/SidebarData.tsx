import React from 'react'

import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/Home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Users',
        path: '/Users',
        icon: < FaIcons.FaUser />,
        cName: 'nav-text'
    },
    {
        title: 'Images',
        path: '/Images',
        icon: <IoIcons.IoMdImages />,
        cName: 'nav-text'
    },
    {
        title: 'Comments',
        path: '/Comments',
        icon: <FaIcons.FaComments />,
        cName: 'nav-text'
    }
]