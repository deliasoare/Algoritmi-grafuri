function StartPage({activateDescription, activateProjects}) {
    return (
        <div className='container-start-page'>
            <div className="circle">Algoritmi specializați pe grafuri</div>
            <div className="buttons-container">
                <button onClick={activateDescription} className='descriere'>Descriere</button>
                <button onClick={activateProjects} className="proiecte">Proiecte</button>
            </div>
        </div>
    )
}

export default StartPage;