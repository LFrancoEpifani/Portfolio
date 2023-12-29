import React from 'react'
import {Icon} from '@iconify/react'
import Gozice from '../../assets/GoziceImage.png'
import Coindom from '../../assets/CoindomImage.png'


export default function DesktopProjects() {
  return (
    <div className=''>
        <div className='lg:flex lg:justify-evenly lg:my-50'>
        <div className='lg:w-[800px] lg:h-[400px] lg:rounded-md relative'>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <img
            className='w-full h-full'
            src={Gozice}
            alt=""
        />
    </div>
            <div>
                <h3 className='lg:text-2xl lg:font-bold lg:my-20'>Gozice</h3>
                <p className='lg:mt-20 lg:w-400 lg:text-lg lg:leading-8'>
                    Landing Page de acaí bowls y smoothies.
                    Desarrollado con Astro para una interfaz de usuario
                    interactiva y rápida. Estilizado con Tailwind CSS 
                    para un diseño responsivo y atractivo.
                </p>
                <div className='lg:flex lg:justify-start lg:items-center lg:gap-30 lg:mt-30 lg:mx-5'>
                    <Icon className='lg:text-3xl items-center' icon="logos:figma"/>
                    <div className='lg:flex lg:gap-10'>
                        <Icon className='lg:text-3xl' icon="logos:react" />
                        <Icon className='lg:text-3xl' icon="devicon:tailwindcss" />
                        <Icon className='lg:text-3xl' icon="devicon:astro" />
                    </div>
                </div>
                <div>
                <div className='lg:flex lg:justify-start lg:items-center lg:gap-8 lg:my-50'>
                        <a href="https://github.com/lucianoEpifani/Attitude-Vite"  target='_blank'>
                            <Icon className='lg:text-3xl' icon="mdi:github" />
                        </a>
                        <a href="https://lucianoepifani.github.io/Attitude-Vite/"  target='_blank'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="hover:-translate-y-1 transition-transform cursor-pointer" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:flex lg:justify-evenly lg:my-50'>
        <div className='lg:w-[800px] lg:h-[400px] lg:rounded-md relative'>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <img
            className='w-full h-full object-cover'
            src={Coindom}
            alt=""
        />
    </div>
            <div>
                <h3 className='lg:text-2xl lg:font-bold lg:my-20'>Coindom</h3>
                <p className='lg:mt-20 lg:w-400 lg:text-lg lg:leading-8'>
                Esta aplicación web utiliza React y SASS para ofrecer una experiencia de usuario dinámica y estilizada. Mediante la API de CoinGecko, provee datos actualizados sobre criptomonedas, incluyendo precios y tendencias de mercado. 
                </p>
                <div className='lg:flex lg:justify-start lg:items-center lg:gap-30 lg:mt-30 lg:mx-5'>
                    <Icon className='lg:text-3xl' icon="logos:figma"/>
                    <div className='lg:flex lg:gap-10 items-center'>
                        <Icon className='lg:text-3xl' icon="logos:react" />
                        <Icon className='lg:text-3xl' icon="logos:javascript" />
                        <Icon className='lg:text-3xl' icon="devicon:sass" />
                        <Icon className='lg:text-md' icon="logos:vercel" />
                    </div>
                </div>
                <div>
                <div className='lg:flex lg:justify-start lg:items-center lg:gap-8 lg:my-50'>
                        <a href="https://github.com/LFrancoEpifani/Coindom"  target='_blank'>
                            <Icon className='lg:text-3xl' icon="mdi:github" />
                        </a>
                        <a href="https://coindom-crypto-search.vercel.app/"  target='_blank'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="hover:-translate-y-1 transition-transform cursor-pointer" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

