import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Staking',
        path: '/staking',
        icon: <FaIcons.FaCoins />,
        cName: 'nav-text'
    },
    {
        title: 'LP Staking',
        path: '/lpstaking',
        icon: <FaIcons.FaCoins />,
        cName: 'nav-text'
    },
    {
        title: 'Community',
        path: '/community',
        icon: <FaIcons.FaPersonBooth />,
        cName: 'nav-text'
    },
]
