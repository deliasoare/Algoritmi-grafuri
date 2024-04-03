import { useState } from 'react';

function Header() {
    return (
        <div className='header'>
            <ul className='right-side'>
                <li>(logo)</li>
                <li>Descriere</li>
                <li>Proiecte</li>
            </ul>
        </div>
    )
}

export default Header;