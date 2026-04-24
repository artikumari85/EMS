
import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import {AuthContext} from './Context/AuthProvider'


const App = () => {

// Jb hum login ka page open kare to login ka admin ka open kare to admin ka usske function banya
const [user,setUser] = useState(null);
const [loggedInUserData,setLoggedInUserData] = useState(null)
const [userData,setUserData] = useContext(AuthContext)

// yeh hum tasklist wala pura portion yha kr rhe hai
useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  
  if(loggedInUser){
   const userData = JSON.parse(loggedInUser)
   setUser(userData.role)
   setLoggedInUserData(userData.data)
  }
},[])



// ek function banya 
const handleLogin = (email,password) =>{
  // yeh check kare ge email or password match ho rha hai ki nhi pass kiya hai(email,password)
  if(email == 'admin@me.com' && password == '123'){
    // console.log("This is Admin")
    // jaise hi humko pta chla ja rha hai email fillmkrne pe This is admin show ho rha h to setUser krdo admin console.log ki place pe
    setUser('admin')
    // console.log(user)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  }
  // else if(email == 'user@me.com' && password == '123')
  else if(userData){
    const employee = userData.find((e) =>email == e.email && e.password == password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role : 'employee',data:employee}))

    }
    // console.log("This is User")
    // setUser('employee')
    // console.log(user)
    // localStorage.setItem('loggedInUser',JSON.stringify({role : 'employee'}))

  }
  else{
    alert("Invalid Credentials")
  }
}
// isko directly nhi call krna h handleLogin ki help se call krn h
// handleLogin("user@me.com",123)

// App ke andar maine AuthContext ko use kiya
// const data = useContext(AuthContext)
// console.log(data)   ab jo yha pe maine check kiya hai ussko hum upar jo directly check kiya h if ki condition lg ke to aise na kr ke mai iski help se data ko check karu gi












  // LOCALSTORAGE KO CALL KIYE HAI
  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // })

  return (
    <>
    {/* agr user ke andar kuch nhi hai to ek kam karo ap open kr dena login ka component or agr aisa nhi h to khali chod do */}
    {!user ? <Login handleLogin={handleLogin}/>: ''} 
      {/*agr user jo hai vo bar hai admin ke to admindashboard ko rendar kr dena agr aisa nhi hota to employeedashboard ko render kr lena   */}
    {user == 'admin' ? <AdminDashboard changeUser={setUser}/>: (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data ={loggedInUserData}/> : null ) }  
    {/* <AdminDashboard/> */}
    {/* <EmployeeDashboard/> */}
    </>
  )
}

export default App;
