import React from 'react'
import {Icon} from '@iconify/react'


export default function Contact() {
  return (
    <div>
       <div className='mb-10 mt-50 ml-140'>
        <h2 className='text-3xl font-bold'>Contacto</h2>
        <p className='text-semibold text-2xl'>Enviame un mensaje 👇🏼</p>
       </div>
        <div className='grid grid-cols-3'>
          <div className='flex justify-center items-center gap-8'>
            <Icon className='bg-indigo-600 rounded-full w-30 h-30 p-5' icon="material-symbols:mail-outline" color='white' />
            <div>
              <h4 className='font-bold'>Email</h4>
              <p>lfrancoepifani@gmail.com</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-8'>
            <Icon className='bg-indigo-600 rounded-full w-30 h-30 p-5' icon="ic:baseline-whatsapp" color='white' />
            <div>
              <h4 className='font-bold'>Phone</h4>
              <p>+34 658694802</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-8 my-20'>
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
