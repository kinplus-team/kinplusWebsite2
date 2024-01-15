import React from 'react'
import WhatWeDoCard from '../WhatWeDoCard/Index'
import hardwareImage from '../../assets/Hardware_repair.png'
import webDevImage from '../../assets/Web_development.png'
import mobiledevImage from '../../assets/mobile_development.png'

export default function WhatWeDo() {

    const WhatWeDoCardDetails = [
        {
            image:`${webDevImage}`,
            imageAltText: "Web_development_svg_image",
            title: "Web Development",
            text: "From idea to traction-generating product. We're by your side every step of thye way, smoothing out bumps as they come with the intention of gaining retention and increasing Customer Lifetime Value"
        },
        {
            image: `${mobiledevImage}`,
            imageAltText: "Mobile_development_svg_image",
            title: "Mobile Development",
            text: "From idea to traction-generating product. We're by your side every step of the way, smoothing out bumps as they come with the intention of gaining retention and increasing Customer Lifetime Value"
        },
        {
            image: `${hardwareImage}`,
            imageAltText: "Hardware_svg_image",
            title: "Hardware Repairs",
            text: "From idea to traction-generating product. We're by your side every step of the way, smoothing out bumps as they come with the intention of gaining retention and increasing Customer Lifetime Value",
        },

]


  return (
    <section>
        <h6 className='mb-10 text-[#1877F9] text-[1.5rem]'>What We Do</h6> 
        <div className='flex flex-col gap-16'>
            <div className='flex items-start sp'>
                <div className='mr-24'>
                     <h3 className='text-[2.3rem] font-bold text-blue-950 leading-none'>We Create Beautiful Products <br />That Captures Heart </h3>
                 </div>
                <div>
                    <p>From idea to traction-generating product, we're by your  <br /> side every step of the way, smoothing out bumps as they <br />come with the intention of gaining retention and increasing <br />Customer Lifetime Value.</p>
                    <button className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-[0.5em] mt-10 w-[10em]">
                    Learn More
                     </button>
                </div>
            </div>
            <div>
                <div className='flex justify-around items-center space-x-14'>
                    {WhatWeDoCardDetails.map((WhatWeDoCardDetail, index) => (
                        <WhatWeDoCard  
                        image={WhatWeDoCardDetail.image}
                        imageAltText={WhatWeDoCardDetail.imageAltText}
                        title={WhatWeDoCardDetail.title}
                        text={WhatWeDoCardDetail.text}
                        key={WhatWeDoCardDetail.title + index}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
