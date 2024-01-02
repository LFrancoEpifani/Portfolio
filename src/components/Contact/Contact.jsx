import React from 'react'
import {Icon} from '@iconify/react'
import { useTranslation } from 'react-i18next' 


export default function Contact() {

  const {t} = useTranslation('');

  return (
    <div className='text-center lg:text-start'>
       <div className=' my-20 lg:mb-10 lg:mt-50 lg:ml-100'>
        <h2 className='text-3xl font-bold'>{t('contact')}</h2>
       </div>
        <div className='grid grid-cols-1 lg:grid lg:grid-cols-3 lg:justify-between lg:items-center'>
          <div className='flex flex-col lg:flex lg:flex-row justify-center items-center gap-8'>
            <Icon className='bg-indigo-600 rounded-full w-30 h-30 p-5' icon="material-symbols:mail-outline" color='white' />
            <div>
              <h4 className='font-bold'>Email</h4>
              <p>lfrancoepifani@gmail.com</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex lg:flex-row justify-center items-center gap-8'>
            <Icon className='bg-indigo-600 rounded-full w-30 h-30 p-5 mt-15' icon="ic:baseline-whatsapp" color='white' />
            <div>
              <h4 className='font-bold'>{t('phone')}</h4>
              <p>+34 658694802</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex lg:flex-row justify-center items-center gap-8 my-20'>
            <Icon className='bg-indigo-600 rounded-full w-30 h-30 p-5' icon="basil:linkedin-solid" color='white' />
            <div>
              <h4 className='font-bold'>Linkedin</h4>
              <p>lfrancoepifani@gmail.com</p>
            </div>
          </div>
        </div>
    </div>
  )
}
