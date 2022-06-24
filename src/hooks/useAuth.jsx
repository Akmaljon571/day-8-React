import { useContext } from 'react'
import { AuthContext } from '../content/Auth'

function useAuth() {
    const { Auth, setAuth } = useContext(AuthContext)
    
    return {
        Auth, 
        setAuth,
    }
}

export default useAuth;