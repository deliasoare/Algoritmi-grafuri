import { useState } from 'react';


function Header({activateDescription, activateProjects}) {
    return (
        <div className='header'>
            <img className='logo' src='/Algoritmi-grafuri.png' alt="" />
            <ul className="right-side">
                <li>
                    <button onClick={activateDescription} className="desc-button">Descriere</button>
                </li>
                <li>
                    <button onClick={activateProjects} className='projects-button'>Proiecte</button>
                </li>
            </ul>
        </div>
    )
}

export default Header;