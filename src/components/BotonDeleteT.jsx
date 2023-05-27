import React from 'react';

const BotonDeleteT = ({element}) => {
   
    
    const id = `delete ${element.id}`

    return (

        <button className="delete" id = {id}>delete</button>
    );
}

export default BotonDeleteT;