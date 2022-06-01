import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [isAuth,setIsAuth] = useState(false)
    const [token,setToken] = useState("")

    const toggleAuth = ()=>{
        if(isAuth){
            setIsAuth(false)
        }
        else{
            fetch('https://reqres.in/api/login', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
                    }),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data.token)
            setToken(data.token);
            })
            setIsAuth(true)
        }
    }
    return <AuthContext.Provider value={{isAuth,toggleAuth,token}}>{children}</AuthContext.Provider>
}