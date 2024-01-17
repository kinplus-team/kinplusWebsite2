
import PropTypes from 'prop-types';

export default function WhatWeDoCard({image, imageAltText, title, text}) {


  return (
    <div className='flex flex-col justify-center items-center  gap-6 bg-white rounded-[0.6em] px-8 py-6 shadow-md hover:shadow- hover:shadow-zinc-600 shadow-zinc-400 max-w-[70%]'>
        <img src={image} alt={imageAltText} className='h-[100px] w-[100px]'/>
        <h3 className='font-[500]  text-blue-950 text-[1.8rem]'>{title}</h3>
        <p className=''>{text}</p>
    </div>
  )
}

  WhatWeDoCard.propTypes = {
    image: PropTypes.string,
    imageAltText: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  };
