import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
  
  return (
    <div id='taskList' className='h-[55%] w-full mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>
        {/* <div className='h-full w-[300px] bg-red-400 rounded-xl flex-shrink-0 p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, placeat soluta culpa facilis consequatur molestias.
          </p>
        </div>
       */}
        {/* <div className='h-full w-[300px] bg-green-400 rounded-xl flex-shrink-0 p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, placeat soluta culpa facilis consequatur molestias.
          </p>
        </div> */}
      
        {/* <div className='h-full w-[300px] bg-blue-400 rounded-xl flex-shrink-0 p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, placeat soluta culpa facilis consequatur molestias.
          </p>
        </div> */}
      
        {/* <div className='h-full w-[300px] bg-yellow-400 rounded-xl flex-shrink-0 p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, placeat soluta culpa facilis consequatur molestias.
          </p>
        </div> */}
      
      {/* <AcceptTask/>
      <NewTask/>
      <CompleteTask/>
      <FailedTask/> */}
      {/* YEH JO UPAR DIRECT MAINE RENDER KIYA HAI TO DIRECT NHI KRNA HAI RENDER  */}

      {data.tasks.map((elem,idx)=>{
        if(elem.active){
          return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem}/>
        }
      })}  
  </div>
  )
}

export default TaskList;
