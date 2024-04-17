import { useState } from 'react';


function StartPage({setActiveProject, activateProjects}) {
    // USE OF STATE
    const [selectValue, setSelectValue] = useState('');
    
    const del = (e) => {
        activateProjects();
        setActiveProject(e.target.value);
    }
    return (
        <div className='container-start-page'>
            <div className="buttons-container">
                <select className='descriere' onChange={del} name='Grafuri neorientate'>
                    <option value="Grafuri neorientate">Grafuri neorientate</option>
                    <option value="1">1.</option>
                    <option value="2">2.</option>
                    <option value="3">3.</option>
                    <option value="4">4.</option>

                </select>
                <select className="proiecte">
                    <option value="Grafuri orientate">Grafuri orientate</option>
                    <option value="1.">1.</option>
                    <option value="2.">2.</option>
                </select>
            </div>
            <div className="circle">Algoritmi specializați pe grafuri</div>
        </div>
    )
}

export default StartPage;