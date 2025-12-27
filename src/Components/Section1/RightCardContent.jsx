import React from 'react'
import { ArrowRight } from 'lucide-react'
function RightCardContent(props) {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-6 '>
            <h2 className='bg-white text-2xl font-bold rounded-full h-14 w-14 flex justify-center items-center' >{props.id + 1}</h2>
            <div>
                <p className='text-xl leading-normal text-white mb-14 leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. labore et dolore magna aliqua,</p>
                <div className='flex justify-between'>
                    <button style={{ backgroundColor: props.color }} className='text-white rounded-full font-semibold px-8 py-2'>{props.tag}</button>
                    <button style={{ backgroundColor: props.color }} className=' text-white rounded-full font-semibold px-3 py-2'><ArrowRight size={16} /></button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default RightCardContent