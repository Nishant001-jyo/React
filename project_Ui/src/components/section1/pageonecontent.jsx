import React from 'react'
import Leftcontent from './Leftcontent'
import RightContne from './RightContne'

const pageonecontent = () => {
  return (
    <div className='py-10 flex items-center justify-between h-screen w-full gap-10'>
        <Leftcontent />
        <RightContne />
  


    </div>
  )
}

export default pageonecontent