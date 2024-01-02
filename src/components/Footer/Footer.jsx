import React from 'react'
import { useTranslation } from 'react-i18next'
import {Icon} from '@iconify/react'
export default function Footer() {

    const {t} = useTranslation('');

  return (
    <div className='bg-black w-full h-full p-30 mt-80'>
       <div className='flex justify-between items-center'>
        <p className='text-white'>{t('copyright')}</p>
        <div className='mx-10 flex gap-8'>
              <button>
                <a href="https://github.com/LFrancoEpifani" target="_blank">
                  <Icon className="text-2xl" icon="mdi:github" color='white' />
                </a>
              </button>
              <button>
                <a href="https://www.linkedin.com/in/lucianoepifani/" target="_blank">
                  <Icon className="text-2xl" icon="ant-design:linkedin-outlined" color='white' />
                </a>
              </button>
        </div>
       </div>
    </div>
  )
}

