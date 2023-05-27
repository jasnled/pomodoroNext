import React from 'react';


const ButtonStartT = ({element}) => {
  

    return (
        <button className="Start" id = {"fds"}>{element.run?`In process..`:`start`}</button>
    );
}

export default ButtonStartT;