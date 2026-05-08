import React, { createContext, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import { useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [userData,setUserData] = useState (null)
   

    // yeh dono jo upar kiya hai ussko useEffect ki help se likha h taki jo niche likha h maine function usska mtlb h vo side se smooth yeh chlta rahe
    useEffect(() => {
      setLocalStorage()
        const {employees} = getLocalStorage();
        setUserData(employees)
    },[])

  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;