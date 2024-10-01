import React, { useState } from 'react'
import TipsTop from '../Components/TipsTop'
const Dashboard = () => {
  return (
    <div className='h-screen'>
    <TipsTop/>
    <div className='flex flex-row m-4 gap-4'>
        <div className='bg-white p-6 rounded-md shadow-lg'>
        <h1 className='font-bold text-[40px] '>Tasks Pending</h1>
        <h1 className='font-bold text-[60px] text-red-500'>10</h1>
        </div>

        <div className='bg-white p-6 rounded-md shadow-lg'>
        <h1 className='font-bold text-[40px] '>Tasks Completed</h1>
        <h1 className='font-bold text-[60px] text-green-500'>10</h1>
        </div>

        <div className='bg-white p-6 rounded-md shadow-lg'>
        <h1 className='font-bold text-[40px]'>TOTAL Tasks</h1>
        <h1 className='font-bold text-[60px]'>20</h1>
        </div>
    </div>
    </div>
  )
}

export default Dashboard