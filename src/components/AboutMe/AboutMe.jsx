import React from 'react'
import AboutMeImage from '../../assets/aboutme.png'
import Group from '../../assets/circle.png'

export default function AboutMe() {
  return (
    <div className=''>
        <div className='mx-100 my-100'>
            <h3 className='nunito text-indigo-600 font-bold text-3xl'>ABOUT ME</h3>
            <p className='nunito text-3xl font-semibold mb-30 mt-10'>A dedicated Front-end Developerbased in Barcelona, Spain📍</p>
        </div>
        <div className='flex justify-evenly'>
           <div className='relative'>
                <img className='w-550 my-20' src={AboutMeImage} alt="" />
                <div>
                    <img className='rotating-image absolute bottom-190 left-320 w-280' src={Group} alt="" />
                </div>
           </div>
            <p className='nunito w-550 text-xl leading-9'>
            As a Junior Front-End Developer, my skill set includes a robust knowledge of HTML, CSS, JavaScript, React, Tailwind, and SCSS. I specialize in creating and managing responsive websites that deliver an exceptional user experience. My expertise lies in developing vibrant and interactive interfaces by writing efficient, well-organized code and applying various development tools and methodologies. Additionally, I am adept at working in team environments, effectively collaborating with multidisciplinary teams to develop top-notch web applications.
            </p>
        </div>
    </div>
  )
}
