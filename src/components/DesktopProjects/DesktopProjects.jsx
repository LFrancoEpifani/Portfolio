import React from 'react'
import {Icon} from '@iconify/react'
import Gozice from '../../assets/GoziceImage.png'
import Coindom from '../../assets/CoindomImage.png'
import { useTranslation } from 'react-i18next';


export default function DesktopProjects() {

    const {t} = useTranslation();

  return (
    <div id='desktop-projects' className='text-center lg:text-start'>
       <h2 className='nunito text-center m-20 text-2xl font-semibold my-60 lg:text-start lg:mx-160'><span className='border-b-4 border-black'>{t('projects')}</span></h2>
        <div className='lg:mt-220 lg:flex lg:justify-evenly lg:my-50'>
       
        <div className='lg:w-[700px] lg:h-[400px] lg:rounded-md relative m-20'>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <img
            className='w-full h-full'
            src={Gozice}
            alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h3 className="text-4xl font-bold text-white">{t('soon')}</h3>
        </div>
    </div>
            <div>
                <h3 className='nunito text-2xl my-10 font-bold lg:my-20'>Gozice</h3>
                <p className='w-full h-full overflow-auto mt-20 text-md lg:w-400 lg:text-lg lg:leading-8 '>
                    {t("gozice")}
                </p>
                <div className='flex justify-center my-20 lg:justify-start lg:items-center gap-30 lg:mt-30 lg:mx-5'>
                    <Icon className='text-3xl items-center' icon="logos:figma"/>
                    <div className='flex gap-10'>
                        <Icon className='text-3xl' icon="logos:react" />
                        <Icon className='text-3xl' icon="devicon:tailwindcss" />
                        <Icon className='text-3xl' icon="devicon:astro" />
                    </div>
                </div>
                <div>
                <div className='flex justify-center items-center gap-8 my-20 lg:my-50'>
                        <a href="#"  target='_blank'>
                            <Icon className='text-3xl' icon="mdi:github" />
                        </a>
                        <a href="#"  target='_blank'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="hover:-translate-y-1 transition-transform cursor-pointer" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:flex lg:justify-evenly lg:my-50'>
        <div className='lg:w-[700px] lg:h-[400px] lg:rounded-md relative m-20'>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <img
            className='w-full h-full'
            src={Coindom}
            alt=""
        />
    </div>
    <div>
                <h3 className='nunito text-2xl my-10 font-bold lg:my-20'>Coindom</h3>
                <p className='w-full h-full overflow-auto mt-20 text-md lg:w-400 lg:text-lg lg:leading-8'>
                {t('coindom')}
                </p>
                <div className='flex justify-center my-20 lg:justify-start lg:items-center gap-30 lg:mt-30 lg:mx-5'>
                    <Icon className='text-3xl items-center' icon="logos:figma"/>
                    <div className='flex gap-10'>
                        <Icon className='text-3xl' icon="logos:react" />
                        <Icon className='text-3xl' icon="vscode-icons:file-type-scss2" />
                        <Icon className='text-3xl' icon="arcticons:coingecko" color="#89bf3e" />
                    </div>
                </div>
                <div>
                <div className='flex justify-center items-center gap-8 my-20 lg:my-50'>
                        <a href="https://github.com/LFrancoEpifani/Coindom"  target='_blank'>
                            <Icon className='text-3xl' icon="mdi:github" />
                        </a>
                        <a href="https://coindom-crypto-search.vercel.app/"  target='_blank'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="hover:-translate-y-1 transition-transform cursor-pointer" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

