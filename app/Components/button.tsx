import React from 'react'
import Image from 'next/image'
type buttonprops={
    type:"button"|"submit"
    title:string,
    icon?:string,
    varient:"btn_dark_green"
}
const button = ({type,title,icon,varient}:buttonprops) => {
  return (
   <button  className={`flex items-center gap-3 rounded-full border px-4 py-2 ${varient}`}
   type={type}
   >
{icon && <Image src={icon} alt="icon" width={16} height={16} className='mr-2'/>}
  <label className='bold-16 whitespace-nowrap'>{title}</label>
   </button>
  )
}

export default button
