import React from 'react'
import RightCard from './RightCard'
function RightContent(props) {
  return (
    <div id='right' className=' p-6 w-2/3 h-full flex overflow-x-auto flex-nowrap gap-10 overflow-hidden justify-between'>
      {props.users.map((ele,idx)=>{
        return <RightCard id={idx} img = {ele.img} tag={ele.tag} color={ele.color}  />
      })}
          
    </div>
  )
}

export default RightContent