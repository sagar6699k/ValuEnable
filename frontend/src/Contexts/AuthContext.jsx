import { createContext, useState } from "react"

export const AuthConext = createContext();

const AuthContextProvider = ({children}) => {

    const [token, setToken] = useState("")
    const [role, setRole] = useState("")

    const handleToken = (newToken) => {
        setToken(newToken)
    }
    const handleRole = (newUser) => {
        setRole(newUser)
    }

    const value = {token ,role, handleToken, handleRole}
    return (
        <AuthConext.Provider value={value}>
            {children}
        </AuthConext.Provider>
    )
}

export default AuthContextProvider
