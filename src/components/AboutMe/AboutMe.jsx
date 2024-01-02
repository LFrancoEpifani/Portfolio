import React from 'react'
import AboutMeImage from '../../assets/aboutme.png'
import Group from '../../assets/circle.png'
import { useTranslation } from 'react-i18next'

export default function AboutMe() {


  const {t} = useTranslation('');

  return (
    <div id='aboutme' className='text-center'>
        <div className='lg:mx-80 mt-120 mb-150 lg:my-60'>
            <h3 className='nunito text-indigo-600 font-bold text-3xl my-20'>{t("aboutme")}</h3>
            <p className='nunito text-xl lg:text-3xl font-semibold lg:mb-30 lg:mt-10'>{t('ubication')}</p>
        </div>
        <div className='grid grid-cols-1 lg:flex lg:justify-center lg:items-center lg:gap-50'>
           <div className='relative'>
                <img className='w-500 my-20 object-cover' src={AboutMeImage} alt="" />
                <div >
                    <img className='bg-white rounded-full rotating-image absolute bottom-260 left-105 w-160 lg:bottom-210 lg:left-340 lg:w-200' src={Group} alt="" />
                </div>
           </div>
            <p className='nunito text-center p-4 lg:w-550 lg:first-letter:text-2xl text-lg leading-9'>
            {t('description')}
            </p>
        </div>
    </div>
  )
}
