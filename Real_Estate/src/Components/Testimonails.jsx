import React from 'react';
import {testimonialsData} from '../assets/assets';

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-2x1 sm:text-4x1 font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real stories from Those Who Found Home with Us</p>

      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index}>
            <img src={testimonial.image} alt={testimonial.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials;
