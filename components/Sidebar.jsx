import React from 'react'
import Image from 'next/image'
import { assets } from '@/app/assets/assets/assets'

const SideBar = ({expand, setExpand}) => {
  return (
    <div>
      <div>
       <div>
        <Image  src={expand ? assets.logo_text : assets/logo_icon} alt='' />
        
        <div>
         <Image src={assets.menu_icon} alt='' className='md:hidden' />
         <Image src={expand ? assets.sidebar_close_icon : assets.sidebar_icon} alt='' className='hidden md:block w-7' />
         <Image src={assets.menu_icon} alt='' className='md:hidden' />

        </div>
       </div>
      </div>
    </div>
  )
}

export default SideBar
