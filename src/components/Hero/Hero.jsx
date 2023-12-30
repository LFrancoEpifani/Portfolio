import React from 'react'
import { Icon } from '@iconify/react'
import MobileProjects from '../MobileProjects/MobileProjects'
import DesktopProjects from '../DesktopProjects/DesktopProjects'
import whiteLines from '../../assets/lines.mp4'


export default function Hero() {
  return (
    <div>
    <div className='lg:mt-120 mt-150 mb-150 lg:mb-220'>
      <main className='lg:flex lg:justify-center lg:items-center'>
        <div className='lg:flex lg:items-center '>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='prompt text-2xl lg:tex-tcenter lg:text-4xl lg:font-extralight lg:my-8'>Luciano Epifani</h1>
            <p className='prompt text-2xl font-semibold  lg:text-center lg:text-4xl lg:my-8'>Desarrollador Web Frontend</p>
            <a href='#desktop-projects'>
              <Icon className='arrow-down text-3xl lg:text-7xl my-8' icon="ep:arrow-down" />
            </a>
          </div>
          <div>
            <video width="600" autoPlay loop muted>
              <source src={whiteLines} type="video/mp4"/>
            </video>
          </div>
        </div>
      </main>
    </div>
    <div className=''>
      <DesktopProjects/>
    </div>
    <div className='mt-100'> 
      <MobileProjects/>
    </div>
  </div>
)
}
