import React from 'react'
import {Icon} from '@iconify/react'
import MobileProjects from '../MobileProjects/MobileProjects'

export default function Hero() {
  return (
   <div>
     <div className='absolute top-200 left-480'>
        <main className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
            <h1 className='name lg:text-5xl lg:font-extralight lg:my-8'>Luciano Epifani</h1>
            <p className='description lg:text-5xl lg:my-8'>Frontend Web Developer</p>
            <Icon className='arrow-down lg:text-7xl lg:my-8' icon="ep:arrow-down" />
        </main>
    </div>
   </div>
  )
}

