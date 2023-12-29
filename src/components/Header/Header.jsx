import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';

function Header() {

    

  return (
    <div className='nunito p-10'>
        <header>
            <nav className='lg:flex lg:justify-between lg:items-center'>
                <ul className='prompt lg:flex lg:items-center lg:gap-16 lg:font-medium lg:text-md'>
                    <a href="#mobile-projects"><li>WORK</li></a>
                   <a href="#aboutme"><li>ABOUT & CONTACT</li></a>
                </ul>
                <ul className='lg:flex lg:gap-6'>
                    <li>
                      <button>
                       <a href="https://github.com/LFrancoEpifani" target='_blank'>
                         <Icon className='text-2xl' icon="mdi:github" />
                       </a>
                      </button>
                    </li>
                    <li>
                        <button>
                            <a href="https://www.linkedin.com/in/lucianoepifani/" target='_blank'>
                                <Icon className='text-2xl' icon="ant-design:linkedin-outlined" />
                            </a>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header