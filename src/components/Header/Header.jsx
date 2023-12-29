import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';

function Header() {

    const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#1F1F1F' : 'white';
    document.body.style.color = darkMode ? 'white' : '#1F1F1F';
}, [darkMode]);

  return (
    <div className='nunito p-20'>
        <header>
            <nav className='lg:flex lg:justify-between lg:items-center'>
                <ul className='lg:flex lg:items-center lg:gap-16 lg:font-extrabold lg:text-lg'>
                    <li>WORK</li>
                    <li>ABOUT & CONTACT</li>
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
                    <li>
                    <button onClick={toggleDarkMode}>
                                {darkMode ? (
                                    <Icon className='text-2xl' icon="tabler:sun" />
                                ) : (
                                    <Icon className='text-2xl' icon="tabler:moon" />
                                )}
                            </button>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header