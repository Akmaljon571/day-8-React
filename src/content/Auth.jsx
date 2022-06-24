import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext()

export const AuthProvide = ({children}) =>{
    const [Auth, setAuth] = useState(JSON.parse(localStorage.getItem('Auth')) || {
        readu : false,
        user: null,
        token: null,
    });
    useEffect(() => {
        if (Auth.token) {
           return localStorage.setItem('Auth', JSON.stringify(Auth)) 
        }
    }, [Auth]);


    const data = {
        Auth, 
        setAuth
    }
    return(
        <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    ) 
}