import React from 'react'
import {Icon} from '@iconify/react'
import MobileProjects from '../MobileProjects/MobileProjects'
import DesktopProjects from '../DesktopProjects/DesktopProjects'


export default function Hero() {
  return (
   <div>
     <div className='lg:mt-120 lg:mb-120'>
        <main className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
            <h1 className='prompt lg:text-4xl lg:font-extralight lg:my-8'>Luciano Epifani</h1>
            <p className='prompt lg:text-4xl lg:my-8'>Frontend Web Developer</p>
           
            <a href='#mobile-projects'>
                <Icon className='arrow-down lg:text-7xl lg:my-8' icon="ep:arrow-down" />
            </a>
          
        </main>
    </div>
    <div>
    <MobileProjects/>
    </div>
    <div>
      <DesktopProjects/>
    </div>
   </div>
  )
}

