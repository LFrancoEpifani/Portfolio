import React from 'react'
import AboutMeImage from '../../assets/aboutme.png'
import Group from '../../assets/circle.png'

export default function AboutMe() {
  return (
    <div className='text-center'>
        <div className='lg:mx-80 mt-120 mb-150'>
            <h3 className='nunito text-indigo-600 font-bold text-3xl'>SOBRE MÍ</h3>
            <p className='nunito text-xl lg:text-3xl font-semibold lg:mb-30 lg:mt-10'>Desarrollador Front-end en Barcelona, España📍</p>
        </div>
        <div className='grid grid-cols-1 lg:flex lg:justify-evenly lg:items-center'>
           <div className='relative'>
                <img className='w-500 my-20 object-cover' src={AboutMeImage} alt="" />
                <div id='aboutme'>
                    <img className='bg-white rounded-full rotating-image absolute bottom-210 left-0 lg:bottom-210 lg:left-340 w-200' src={Group} alt="" />
                </div>
           </div>
            <p className='nunito text-center p-4 lg:w-550 lg:first-letter:text-lg leading-9'>
            Como Desarrollador Front-End Junior, mi conjunto de habilidades incluye un sólido conocimiento de HTML, CSS, JavaScript, React, Tailwind y SCSS. Me especializo en la creación y gestión de sitios web responsivos que ofrecen una experiencia de usuario excepcional. Mi experiencia radica en el desarrollo de interfaces vibrantes e interactivas escribiendo código eficiente y bien organizado y aplicando diversas herramientas y metodologías de desarrollo. Además, soy experto en trabajar en entornos de equipo, colaborando eficazmente con equipos multidisciplinares para desarrollar aplicaciones web de primera categoría.
            </p>
        </div>
    </div>
  )
}
