import { useState } from 'react';


function Header() {
    return (
        <div className='header'>
            <img className='logo' src='/Algoritmi-grafuri.png' alt="" />
            <ul className="right-side">
                <li>
                    <button className="desc-button">Descriere</button>
                </li>
                <li>
                    <button className='projects-button'>Proiecte</button>
                </li>
            </ul>
        </div>
    )
}

export default Header;