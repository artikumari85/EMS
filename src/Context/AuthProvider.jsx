import React, { createContext, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import { useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()
    // AuthContext ke andar hum maine Provider to bana liya tha pr value kya pass kr rhe ho arti aise thoadi na hoga! to niche humne kya usestate function banaya hai
    const [userData,setUserData] = useState (null)
    // mai yha ek method ko chalu gi jo humne localstorage me banya tha getdata or set data
    // const data = getLocalStorage()
    // console.log(data.employees)

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
// basically yeh jo AuthContext hai usski help se hum jo local storage ke andar data hai ussko har jagha pahuchane me help kare ge!