import { useState } from 'react';

function Header() {
    return (
        <div className='header'>
            <ul className='left-side'>
                <li>
                    <div className="logo-img">
                        <img className='logo' src="" alt="" />
                    </div>
                </li>
            </ul>
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