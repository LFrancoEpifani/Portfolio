import React from 'react'
import { Icon } from '@iconify/react'
import MobileProjects from '../MobileProjects/MobileProjects'
import DesktopProjects from '../DesktopProjects/DesktopProjects'
import whiteLines from '../../assets/lines.mp4'


export default function Hero() {
  return (
    <div>
    <div className='lg:mt-120 lg:mb-220'>
      <main className='lg:flex lg:justify-center lg:items-center'>
        <div className='lg:flex lg:items-start '>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='prompt lg:tex-tcenter lg:text-4xl lg:font-extralight lg:my-8'>Luciano Epifani</h1>
            <p className='prompt lg:text-center lg:text-4xl lg:my-8'>Frontend Web Developer</p>
            <a href='#desktop-projects'>
              <Icon className='arrow-down lg:text-7xl lg:my-8' icon="ep:arrow-down" />
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
    <div>
      <DesktopProjects/>
    </div>
    <div className='mt-100'> 
      <MobileProjects/>
    </div>
  </div>
)
}
