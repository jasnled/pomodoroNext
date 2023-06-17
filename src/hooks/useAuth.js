import React, { createContext, useContext, useState } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { endPoint } from "@/services/api";

const AuthContext = createContext();



function useProviderAuth(){
    const [user, setUser] = useState(null);
    const signIn = async (email, password) => {
        
        const options = {
            headers: {
                accept: '*/*',
                'Content-type': 'application/json',
            }
        };
        const tokenCookie = Cookie.get('pomodoro-token');
        let access_token;
        if(tokenCookie){
            access_token = tokenCookie;
        } else if (email){
            try{
                const { data: {token} } = await axios.post(endPoint.auth.login, {email, password}, options);
                access_token = token;
            }catch(err){
                access_token = null;
                setUser(null);
            }
        };
    
        if (access_token){
            console.log(access_token);
            console.log(`si hay token`);
            if(!tokenCookie){
                console.log(`guardando el token`);
                Cookie.set('pomodoro-token', access_token, { expires: 5 });
                window.location.href = '/';
            }
            axios.defaults.headers.Authorization = `Bearer ${access_token}`;
            const {data: user} = await axios.get(endPoint.profile.profile); //end point del profile
            setUser(user);
            
        };
    };
    
    const logout = () => {
        Cookie.remove('pomodoro-token');
        setUser(null);
        delete axios.defaults.headers.Authorization;
        window.location.href = '/login';
    };

    return {
        user,
        signIn,
        logout
    };
};

function ProviderAuth({ children }){
    const auth = useProviderAuth();
    return <AuthContext.Provider value={auth}>{ children }</AuthContext.Provider>
};

const useAuth = () => {
    return useContext(AuthContext);
};

export{ProviderAuth, useAuth};