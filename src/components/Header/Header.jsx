import React, { useState } from 'react';
import { Icon } from '@iconify/react';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nunito lg:p-10">
      <div className="relative lg:hidden">
        <button onClick={toggleMenu}>
          {!isOpen && (
            <Icon className='text-2xl m-5' icon="material-symbols:menu" />
          )}
        </button>
        {isOpen ? (
          <div className="absolute top-0 z-20 w-full transition-menu active bg-white shadow-lg h-300">
            <Icon onClick={toggleMenu} className='text-2xl m-10' icon="material-symbols:close" />
            <ul className="text-center">
              <li>
                <a href="#desktop-projects" onClick={toggleMenu}>
                  WORK
                </a>
              </li>
              <li>
                <a href="#aboutme" onClick={toggleMenu}>
                  ABOUT & CONTACT
                </a>
              </li>
              {/* Agrega más elementos del menú si es necesario */}
            </ul>
            <ul className="flex flex-col justify-center items-center my-10 lg:flex lg:gap-6">
              <li>
                <button>
                  <a href="https://github.com/LFrancoEpifani" target="_blank">
                    <Icon className="text-2xl" icon="mdi:github" />
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <a href="https://www.linkedin.com/in/lucianoepifani/" target="_blank">
                    <Icon className="text-2xl" icon="ant-design:linkedin-outlined" />
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <Icon className="text-2xl" icon="openmoji:flag-spain" />
                </button>
              </li>
              <li>
                <button>
                  <Icon className="text-2xl" icon="openmoji:flag-united-states" />
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="absolute top-0 z-20 w-full transition-menu bg-white h-300">
            {/* Contenido del menú cuando está cerrado */}
          </div>
        )}
      </div>
      <header className="hidden lg:block">
        <nav className="lg:flex lg:justify-between lg:items-center">
          <ul className="prompt lg:flex lg:items-center lg:gap-16 lg:font-medium lg:text-md">
            <a href="#mobile-projects">
              <li>WORK</li>
            </a>
            <a href="#aboutme">
              <li>ABOUT & CONTACT</li>
            </a>
          </ul>
          <ul className="lg:flex lg:gap-6">
            <li>
              <button>
                <a href="https://github.com/LFrancoEpifani" target="_blank">
                  <Icon className="text-2xl" icon="mdi:github" />
                </a>
              </button>
            </li>
            <li>
              <button>
                <a href="https://www.linkedin.com/in/lucianoepifani/" target="_blank">
                  <Icon className="text-2xl" icon="ant-design:linkedin-outlined" />
                </a>
              </button>
            </li>
            <li>
              <button>
                <Icon className="text-2xl" icon="openmoji:flag-spain" />
              </button>
            </li>
            <li>
              <button>
                <Icon className="text-2xl" icon="openmoji:flag-united-states" />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
