import React from 'react'

export const Loading = () => {
  return (
    <div className='mx-auto h-screen p-5 flex items-center justify-center gap-2 flex-col'>
      <div className='animate-spin rounded-full h-12 w-13 border-t-4 border-blue-600 shadow-2xl bg-gray-200'></div>
      <h1 className='font-bold text-sm'> Data Loading..</h1> 
    </div>
  )
}


