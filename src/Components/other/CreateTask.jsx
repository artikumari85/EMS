import React, { useState,useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = () => {
  const [userData,setUserData] = useContext(AuthContext)
  // yeh function hum isliye bana rhe hai jn hum login se admin me ja rhe hai or admin page fill kr ke task ko submit kr rhe hai to jo fill kiya tha vo khail nhi ho rha h to function bana rhe jo kud se task sumbmit krne me khali ho jye
  const [taskTitle,setTaskTitle] = useState('')
  const [taskDate,setTaskDate] = useState('')
  const [assignTo,setAssignTo] = useState('')
  const [taskDescription,setTaskDescription] = useState('')
  const [category,setCategory] = useState('')

  // data kaise aaye ga to bana ho ga ek object ke form me or jo phle se created array hai ussme add on krn hoga
  const [newTask,setNewTask] = useState({})


  // yha pe sn se last me task ko create kare hai
  const submitHandler = (e) =>{
    e.preventDefault()

    setNewTask({taskTitle,taskDate,taskDescription,category,active:false,newTask:true,failed:false,completed:false})
    const data = userData
    // ek particaular ka data
    data.forEach(function(elem){
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskCount.newTask= elem.taskCount.newTask+1
        
      }
    })

    setUserData(data)
    console.log(data)
    


    setTaskTitle('')
    setCategory('')
    setTaskDate('')
    setTaskDescription('')
    setAssignTo('')

  }
  return (
    <div>
      <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex items-start justify-between w-full flex-wrap'>
           
            <div className='w-1/2'>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title </h3>
            <input 
            value={taskTitle}
            onChange={(e) =>{
              setTaskTitle(e.target.value)
            }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make A UI Design' />
            </div>
           
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input 
                value={taskDate}
                onChange={(e)=>{
                  setTaskDate(e.target.value)

                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
           </div>
            
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
            <input 
            value={assignTo}
            onChange={(e)=>{
              setAssignTo(e.target.value)
            }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name'/>
            </div>
            
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input 
            value={category}
            onChange={(e)=>{
              setCategory(e.target.value)

            }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design,Dev,etc...' />
            </div>
            </div>
    
           <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea

            value={taskDescription}
            onChange={(e)=>{
              setTaskDescription(e.target.value)

            }} 

            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" cols='30' rows='10'></textarea>
            <button className='bg-[#0f766e] hover:bg-[#14b8a6] py-3 rounded  px-4 text-sm mt-4 w-full font-semibold'>Create Task</button>
           </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
