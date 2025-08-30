import React from 'react'

export const Loading = () => {
  return (
    <div className='mx-auto h-screen p-5 flex items-center justify-center'>
      <div className='animate-spin rounded-full h-12 w-13 border-t-4 border-green-600'></div>
      <h1 className='font-bold text-sm'> Data Loading</h1> 
    </div>
  )
}


