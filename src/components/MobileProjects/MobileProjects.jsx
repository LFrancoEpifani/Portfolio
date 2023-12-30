import React from 'react'
import {Icon} from '@iconify/react'

export default function MobileProjects() {
    

  return (
    <div className=''>
        <div className='lg:flex lg:justify-evenly lg:items-center lg:gap-50 lg:p-10'>
            <div className="attitude">
                <div className='lg:absolute lg:top-200 lg:left-75 lg:text-white'>
                    <h3 className='lg:text-3xl lg:mb-4'>Attitude</h3>
                    <div className='lg:flex lg:justify-center lg:items-center lg:gap-8 lg:mb-12'>
                        <a href="https://github.com/lucianoEpifani/Attitude-Vite"  target='_blank'>
                            <Icon className='lg:text-3xl' icon="mdi:github" />
                        </a>
                        <a href="https://lucianoepifani.github.io/Attitude-Vite/"  target='_blank'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="hover:-translate-y-1 transition-transform cursor-pointer" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path></svg>
                        </a>
                    </div>
                    <div className='lg:flex lg:justify-center lg:items-center lg:gap-8'>
                        <Icon className='text-3xl' icon="logos:react" />
                        <Icon className='text-3xl' icon="logos:vitejs" />
                        <Icon className='text-3xl' icon="devicon:tailwindcss" />
                    </div>
                </div>
            </div>
            <div className="fundit" >
            <div className='lg:absolute lg:top-200 lg:left-75 lg:text-white'>
                    <h3 className='lg:text-3xl lg:mb-4'>Fundit</h3>
                    <div className='lg:flex lg:justify-center lg:items-center lg:gap-8 lg:mb-12'>
                        <a href="https://github.com/LFrancoEpifani/Fundiit"  target='_blank'>
                            <Icon className='lg:text-3xl' icon="mdi:github"/>
                        </a>
                        <a href="https://github.com/LFrancoEpifani/Fundiit"  target='_blank'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="hover:-translate-y-1 transition-transform cursor-pointer" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path></svg>
                        </a>
                    </div>
                    <div className='lg:flex lg:justify-center lg:items-center lg:gap-8'>
                        <Icon className='text-3xl' icon="logos:react" />
                        <Icon className='text-3xl' icon="devicon:tailwindcss" />
                        <Icon className='text-3xl' icon="logos:spring-icon" />
                    </div>
                </div>
            </div>
            <div className="huddle" > 
                 <div className='absolute lg:top-200 lg:left-95 text-white'>
                    <h3 className='lg:text-3xl lg:mb-4'>HUDDLE</h3>
                    <div className='lg:flex lg:justify-center lg:items-center lg:gap-8 lg:mb-12'>
                    <a href="https://github.com/LFrancoEpifani/Huddle"  target='_blank'>
                            <Icon  className='lg:text-3xl' icon="mdi:github" />
                        </a>
                        <a href="https://lfrancoepifani.github.io/Huddle/"  target='_blank'>
                        <svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="hover:-translate-y-1 transition-transform cursor-pointer" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path></svg>
                        </a>
                    </div>
                    <div className='lg:flex lg:justify-center lg:items-center lg:gap-8'>
                        <Icon className='text-3xl' icon="vscode-icons:file-type-html" />
                        <Icon className='text-3xl' icon="vscode-icons:file-type-css" />
                        <Icon className='text-3xl' icon="logos:javascript" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
