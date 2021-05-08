import { createContext, useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import { API_URL } from '@/config/index'

const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)


    // Register User

    const register = async (user) =>{
        console.log(user)
    }

    // Log in  User
    const login = async ({email: identifier, password}) =>{
        console.log({identifier, password})
    }
    // Log out User
    const logout = async () =>{
        console.log('Logout - invoced')
    }
    // Check if user is logged in User
    const CheckUserLoggedIn = async (user) =>{
        console.log('CheckUserLoggedIn - invoced')
    }

    return(
        <AuthContext.Provider value={
        {
            user, 
            error, 
            register, 
            login, 
            logout
            }}> {children}
        </AuthContext.Provider>
    )
}

export default AuthContext