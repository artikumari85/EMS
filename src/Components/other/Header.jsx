import React, { useState } from 'react'

const Header = (props) => {

  // const [username,setUserName]=useState('')
  // if(!data){
  //   setUsername('Admin')
  // } else{
  //   setUsername(data.firstName)
  // }

  // isko hum reload ke liye banye hai jb humlohin me employee or admin fill krte hai to page open hota hai employee or admin ka pr jb hum page reload karte the to
  // login phir se open ho jata tha fill krne ke liye new value pr ab aisa nhi hoga reload krne pe nhi open hoga login ka page logout button ko clock krne pe open hoga
  // or jn lohout biuuton click kare ge to appliction me se loggedinuser bhi clear ho gi!
  const logOutUser = () =>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()

  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-white py-2 px-5 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
