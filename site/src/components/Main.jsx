import { useState, useEffect } from 'react';

function Main({activeProject}) {
    return (
        <div className='main'>
            {activeProject}
        </div>
    )
}

export default Main;