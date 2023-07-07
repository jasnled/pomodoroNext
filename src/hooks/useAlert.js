import { useState } from "react";

const useAlert = (option) => {
    const defaultOptions = {
        active:false,
        message:"",
        autoClose: false
    }
    const [alert, setAlert] = useState({
        ...defaultOptions,
        ...option
    });
    if(alert.autoClose){
        setTimeout(()=>{
            setAlert({
                ...alert,
                active: false
            });
        },3000);
    };
    const toggleActiveAlert = () =>{
        setAlert({
            ...alert,
            active: !alert.active
        });
    };
    return{
        alert,
        setAlert,
        toggleActiveAlert,
    };
};

export{ useAlert };