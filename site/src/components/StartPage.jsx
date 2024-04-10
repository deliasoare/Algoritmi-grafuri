function StartPage({activateDescription, activateProjects}) {

    const del = (e) => {
        console.log(e);
    }
    return (
        <div className='container-start-page'>
            <div className="buttons-container">
                <select className='descriere' onChange={del()} name='Grafuri neorientate'>
                    <option value="Grafuri neorientate">Grafuri neorientate</option>
                    <option value="2.">1.</option>
                    <option value="2.">2.</option>

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