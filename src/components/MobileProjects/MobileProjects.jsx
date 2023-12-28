import React from 'react'
import {useState} from 'react'
import {Icon} from '@iconify/react'

export default function MobileProjects() {


  return (
    <div id='mobile-projects' className=''>
        <div className='lg:flex lg:justify-evenly lg:items-center lg:p-10'>
            <div className="attitude">
                <div className='absolute top-250 left-95 text-white'>
                    <h3 className='text-3xl mb-4'>Attitude</h3>
                    <div className='flex justify-center items-center gap-8 mb-12'>
                        <a href="https://github.com/lucianoEpifani/Attitude-Vite">
                            <Icon className='text-3xl' icon="mdi:github" />
                        </a>
                        <a href="https://lucianoepifani.github.io/Attitude-Vite/">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="hover:-translate-y-1 transition-transform cursor-pointer" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path></svg>
                        </a>
                    </div>
                    <div className='flex justify-center items-center gap-8'>
                        <Icon className='text-3xl' icon="logos:react" />
                        <Icon className='text-3xl' icon="logos:vitejs" />
                        <Icon className='text-3xl' icon="devicon:tailwindcss" />
                    </div>
                </div>
            </div>
            <div className="fundit">
            <div className='absolute top-250 left-95 text-white'>
                    <h3 className='text-3xl mb-4'>Fundit</h3>
                    <div className='flex justify-center items-center gap-8 mb-12'>
                        <a href="https://github.com/LFrancoEpifani/Fundiit">
                            <Icon className='text-3xl' icon="mdi:github" />
                        </a>
                        <a href="https://github.com/LFrancoEpifani/Fundiit">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="hover:-translate-y-1 transition-transform cursor-pointer" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path></svg>
                        </a>
                    </div>
                    <div className='flex justify-center items-center gap-8'>
                        <Icon className='text-3xl' icon="logos:react" />
                        <Icon className='text-3xl' icon="devicon:tailwindcss" />
                        <Icon className='text-3xl' icon="logos:spring-icon" />
                    </div>
                </div>
            </div>
            <div className="huddle">
                 <div className='absolute top-250 left-115 text-white'>
                    <h3 className='text-3xl mb-4'>HUDDLE</h3>
                    <div className='flex justify-center items-center gap-8 mb-12'>
                        <a href="https://github.com/LFrancoEpifani/Huddle">
                            <Icon className='text-3xl' icon="mdi:github" />
                        </a>
                        <a href="https://lfrancoepifani.github.io/Huddle/">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="hover:-translate-y-1 transition-transform cursor-pointer" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path></svg>
                        </a>
                    </div>
                    <div className='flex justify-center items-center gap-8'>
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
