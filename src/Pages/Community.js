import React from 'react'
import * as FaIcons from "react-icons/fa";
import './CSS/Community.css';

const iconData = [
    {
        title: 'Website',
        URL: "https://www.alrihla.site/",
        icon: <FaIcons.FaLaptop size={"50px"} />,
        cName: 'nav-textCom'
    },
    {
        title: 'Telegram',
        URL: "https://t.me/AlRihla_CNINA",
        icon: <FaIcons.FaTelegram size={"50px"} />,
        cName: 'nav-textCom'
    },
]

function Community() {
    return (
        <div className='community'>
            <div className="insideCommunity">
                <div id="community-Title">ALRihla</div>

                {iconData.map((item, index) => {
                    return (
                        <><br />
                        <li key={index} className={item.cName}>
                            <a href={item.URL}>
                                {item.icon}
                                <h1><span>{item.title}</span></h1>
                            </a>
                        </li></>
                    )
                })}
                <ul className="icons">
                </ul>
            </div>
        </div>
    )
}

export default Community
