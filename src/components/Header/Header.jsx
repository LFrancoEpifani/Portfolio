import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

function Header() {


  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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
                  {t('work')}
                </a>
              </li>
              <li>
                <a href="#aboutme" onClick={toggleMenu}>
                  {t("aboutAndContact")}
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
              <div className='flex flex-col'>
              <div className='flex justify-center items-center gap-5'>
                      <button onClick={() => changeLanguage('en')}>English</button>
                      <Icon icon="openmoji:flag-united-states" />
                    </div>
                <div className='flex justify-center items-center gap-5'>
                      <button onClick={() => changeLanguage('es')}>Español</button>
                      <Icon icon="openmoji:flag-spain" />
                    </div>
              </div>
              </li>
            </ul>
          </div>
        ) : (
          <div className="absolute top-0 z-20 w-full transition-menu bg-white h-300">
           
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
            <div>
  <div className="relative inline-block text-left">
    <div>
        <button onClick={toggleLanguageMenu} type="button" className=" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
            {t('lenguage')}
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                </path>
            </svg>
        </button>
    </div>
    {languageMenuOpen && ( 
      
      <div className="absolute right-20 w-96 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
      <div className="py-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a href="#" className="block px-4 py-6 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
              <span className="flex flex-col">
                  <span className='text-center'>
                    <div className='flex justify-center items-center gap-5'>
                      <button onClick={() => changeLanguage('es')}>Español</button>
                      <Icon icon="openmoji:flag-spain" />
                    </div>
                  </span>
              </span>
          </a>
          <a href="#" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
              <span className="flex flex-col">
                  <span className='text-center'>
                  <div className='flex justify-center items-center gap-5'>
                      <button onClick={() => changeLanguage('en')}>English</button>
                      <Icon icon="openmoji:flag-united-states" />
                    </div>
                  </span>
              </span>
          </a>
      </div>
  </div>
    )}
</div>
                
                
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
