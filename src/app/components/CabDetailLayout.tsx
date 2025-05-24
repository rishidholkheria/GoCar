import React from 'react'

const CabDetailLayout = () => {
  return (
    <div className='w-full p-4 bg-gray-300 mt-2 rounded-md flex justify-center items-center cursor-pointer'>
        <img src="/assets/carEx1.png" alt="" className='w-2/5'/>
        <div className='w-3/5'>
            <h2 className='text-xl'>Maruti Swift Dzire</h2>
            <p className='text-gray-600'>Price/Km : $12</p>
            <p className='text-gray-600'>Passengers : 4</p>
            <p className='text-gray-600'>Luggage : 2</p>
        </div>
    </div>
  )
}

export default CabDetailLayout