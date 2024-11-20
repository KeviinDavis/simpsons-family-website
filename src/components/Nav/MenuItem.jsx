import React from 'react'
 
export default function MenuItem({ title, links }) {
    return (
        <li className="trigger">
            <a href="/#">{title}</a>
            <ul className="submenu">
                {links.map((link, index) => (
                    <li key={index}><a href="#"></a></li>
                ))};
            </ul>
        </li>
        );
}
