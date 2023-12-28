import React from 'react'
import { Icon } from '@iconify/react';

function Header() {
  return (
    <div className='header p-20'>
        <header>
            <nav className='lg:flex lg:justify-between lg:items-center'>
                <ul className='lg:flex lg:items-center lg:gap-16 lg:font-extrabold lg:text-lg'>
                    <li>WORK</li>
                    <li>ABOUT & CONTACT</li>
                </ul>
                <ul className='lg:flex lg:gap-6'>
                    <li>
                      <button>
                        <Icon className='text-2xl' icon="mdi:github" />
                      </button>
                    </li>
                    <li>
                        <button>
                            <Icon className='text-2xl' icon="ant-design:linkedin-outlined" />
                        </button>
                    </li>
                    <li>
                        <button>
                            <Icon className='text-2xl' icon="tabler:moon" />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header