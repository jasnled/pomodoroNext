import { useState } from "react";

const useAlert = (option) => {
    const defaultOptions = {
        active:false,
        message:"",
    }
    const [alert, setAlert] = useState({
        ...defaultOptions,
        ...option
    });

    const toggleActiveAlert = () =>{
        setAlert({
            ...alert,
            active: !alert.active
        });
    };
    return{
        alert,
        toggleActiveAlert,
    };
};

export{ useAlert };