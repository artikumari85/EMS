import React,{useContext} from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {
    // yha pe khain se data nhi aa rha h kyu ki hamare pass context hai
    const [userData,setUserData] = useContext(AuthContext)
    // console.log(authData.employees)
  return (
    <div className='bg-[#1c1c1c] p-5 mb-5 rounded'>

        <div className='bg-[#111827] border border-gray-700 py-4 px-6 flex rounded mb-2 text-gray-300 font-semibold'>
            <h2 className='text-lg font-medium w-1/5 text-center'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 text-center'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 text-center'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 text-center'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 text-center'>Failed</h5>
        </div>

        <div className=''>
            {/* idx jo hai vo createTask se aaya hai submitHandler jo banya hai */}
            {userData.map(function(elem,idx){
            return <div key={idx} className='border-2 border-emerald-500 py-4 px-6 flex rounded mb-2 '>
            <h2 className='text-lg font-medium w-1/5 text-center'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400 text-center'>{elem.taskCount.active}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400 text-center'>{elem.taskCount.newTask}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white-400 text-center'>{elem.taskCount.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-400 text-center'>{elem.taskCount.failed}</h5>
        </div>
        })}
        </div>


        {/* <div className='bg-red-400 py-2 px-4 flex justify-between rounded mb-2 '>
            <h2>Arti</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div> */}

         {/* <div className='bg-green-400 py-2 px-4 flex justify-between rounded mb-2'>
            <h2>Arti</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>

        <div className='bg-yellow-400 py-2 px-4 flex justify-between rounded mb-2'>
            <h2>Arti</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>

        <div className='bg-blue-400 py-2 px-4 flex justify-between rounded mb-2'>
            <h2>Arti</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div> 

         <div className='bg-purple-400 py-2 px-4 flex justify-between rounded'>
            <h2>Arti</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div> */}
      
     </div>
  )
} 

export default AllTask;
