import React from 'react'

import RightCardContent from './RightCardContent'

function RightCard(props) {
  return (
    <div className='h-full shrink-0 w-80 rounded-4xl overflow-hidden relative'>
        <img src={props.img} alt="Car" className='w-full h-full object-cover'/>
        <RightCardContent tag={props.tag} color={props.color} id={props.id}/>
    </div>
  )
}

export default RightCard