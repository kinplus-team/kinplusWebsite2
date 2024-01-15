import React from 'react'
import { FaQuoteRight } from "react-icons/fa6";
import handsonlaptop from "../../assets/our_services/image 10.png";
import icon from "../../assets/our_services/Mask Group.png"
import victorImg from "../../assets/our_services/image 5.png"
import CTA from "../../assets/our_services/CTA.png"
import icon2 from "../../assets/our_services/Mask Group (1).png"
import image2 from "../../assets/our_services/Rectangle 11.png"
import icon3 from "../../assets/our_services/Group 539.png"
import iconbg1 from "../../assets/trainingPics/Icons.png"
import iconbg2 from "../../assets/trainingPics/Icons.png"
import image3 from "../../assets/our_services/Rectangle 51.png"
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import image4 from "../../assets/our_services/image 5a.png"
import image5 from "../../assets/our_services/Rectangle 11b.png"
import { BsDashLg } from "react-icons/bs";
import TrainingTestimonial from "../Training/TrainingTestimonial/Index";





export default function Services() {
  return (
    <div>
        <section>
        <div>
             {/**Our Services**/}
          <div className="flex justify-between ">
            <div className="w-[40%]">
              <h4 className="flex items-center  text-[#1877F9] text-[1.125rem] font-[500] tracking-[3px] uppercase leading-[111.111%] mb-[33px] ">
                Our Services
                <div className="ml-6 h-[2px] w-[74.75px] bg-[#222831]"></div>
              </h4>
              <p className="text-[#082B5B] text-[2.8rem] font-[700] leading-[123.077%]tracking-[-2px] ">
              We Create beautiful products that capture hearts
              </p>
              <div className="flex ml-[300px] -mt-[25px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <path
                    d="M41.8297 7.53327C40.9596 6.95681 39.9364 6.65496 38.8928 6.66684C37.8491 6.67873 36.8331 7.0038 35.9764 7.59994L9.7597 25.8666C8.3597 26.8399 7.52637 28.4333 7.52637 30.1399V49.8166C7.52637 51.5666 8.40637 53.1966 9.86637 54.1599L36.513 71.7766C37.3649 72.3398 38.3635 72.6401 39.3847 72.6401C40.4059 72.6401 41.4045 72.3398 42.2564 71.7766L69.433 53.8233C70.893 52.8566 71.7697 51.2233 71.7697 49.4766V30.1433C71.7697 28.3966 70.893 26.7666 69.4364 25.7999L41.8297 7.53327ZM62.1297 28.8433L52.083 35.5866L42.663 28.7366L42.603 15.2633L62.1264 28.8433H62.1297ZM35.7897 15.2766V28.4666L26.133 35.2133L16.5097 28.7566L35.7897 15.2766ZM13.8664 35.2533L20.0997 39.4299L13.8664 43.7899V35.2566V35.2533ZM35.9497 63.3633L16.513 50.3333L26.223 43.5433L35.9564 50.0699V63.3699L35.9497 63.3633ZM32.2664 39.3199L38.5597 34.9199L45.893 39.7366L39.393 44.1033L32.2664 39.3199ZM42.823 63.3633V50.0633L52.123 43.8299L62.133 50.4133L42.823 63.3633ZM64.9064 44.0133L58.3064 39.6799L64.9064 35.2499V44.0166V44.0133Z"
                    fill="#CBD5E1"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="mt-14"
                >
                  <path
                    d="M16.5057 23.3142L6.60569 13.4142C6.41467 13.2297 6.26231 13.009 6.15749 12.765C6.05267 12.521 5.9975 12.2585 5.99519 11.993C5.99289 11.7274 6.04349 11.464 6.14405 11.2183C6.24461 10.9725 6.39312 10.7492 6.5809 10.5614C6.76869 10.3736 6.99199 10.2251 7.23779 10.1245C7.48358 10.024 7.74694 9.97335 8.0125 9.97566C8.27805 9.97797 8.54049 10.0331 8.7845 10.138C9.02851 10.2428 9.2492 10.3951 9.43369 10.5862L20.7477 21.9002C21.1226 22.2752 21.3333 22.7838 21.3333 23.3142C21.3333 23.8445 21.1226 24.3531 20.7477 24.7282L9.43369 36.0422C9.2492 36.2332 9.02851 36.3855 8.7845 36.4904C8.54049 36.5952 8.27805 36.6504 8.0125 36.6527C7.74694 36.655 7.48358 36.6044 7.23779 36.5038C6.99199 36.4032 6.76869 36.2547 6.5809 36.067C6.39312 35.8792 6.24461 35.6559 6.14405 35.4101C6.04349 35.1643 5.99289 34.9009 5.99519 34.6354C5.9975 34.3698 6.05267 34.1074 6.15749 33.8634C6.26231 33.6193 6.41467 33.3987 6.60569 33.2142L16.5057 23.3142ZM24.0197 32.0002H40.0197C40.5501 32.0002 41.0588 32.2109 41.4339 32.586C41.809 32.961 42.0197 33.4697 42.0197 34.0002C42.0197 34.5306 41.809 35.0393 41.4339 35.4144C41.0588 35.7895 40.5501 36.0002 40.0197 36.0002H24.0197C23.4893 36.0002 22.9806 35.7895 22.6055 35.4144C22.2304 35.0393 22.0197 34.5306 22.0197 34.0002C22.0197 33.4697 22.2304 32.961 22.6055 32.586C22.9806 32.2109 23.4893 32.0002 24.0197 32.0002Z"
                    fill="#CBD5E1"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  className="-ml-14 -mt-6 "
                >
                  <path
                    d="M40 41.3334C39.2928 41.3334 38.6145 41.0525 38.1144 40.5524C37.6143 40.0523 37.3334 39.374 37.3334 38.6667C37.3334 37.9595 37.6143 37.2812 38.1144 36.7811C38.6145 36.281 39.2928 36.0001 40 36.0001C42.4079 35.999 44.7706 35.3458 46.8372 34.1099C48.9038 32.8741 50.5971 31.1017 51.7374 28.9809C52.8777 26.86 53.4223 24.47 53.3136 22.0646C53.2048 19.6591 52.4467 17.328 51.1197 15.3187C49.7927 13.3095 47.9464 11.6971 45.7767 10.6527C43.607 9.60839 41.1951 9.17109 38.7969 9.38726C36.3987 9.60343 34.1038 10.465 32.1559 11.8805C30.2079 13.296 28.6797 15.2126 27.7334 17.4267L25.8134 21.9228L21.168 20.3974C20.0688 20.0374 18.9045 19.9201 17.7555 20.0535C16.6065 20.1869 15.5001 20.5679 14.5126 21.1702C13.525 21.7725 12.6799 22.5818 12.0353 23.5423C11.3907 24.5028 10.9621 25.5916 10.779 26.7337C10.5959 27.8759 10.6627 29.0441 10.9747 30.158C11.2867 31.2718 11.8366 32.3048 12.5863 33.1856C13.3361 34.0664 14.2679 34.7741 15.3177 35.26C16.3674 35.7459 17.51 35.9984 18.6667 36.0001H24C24.7073 36.0001 25.3855 36.281 25.8856 36.7811C26.3857 37.2812 26.6667 37.9595 26.6667 38.6667C26.6667 39.374 26.3857 40.0523 25.8856 40.5524C25.3855 41.0525 24.7073 41.3334 24 41.3334H18.6667C16.7381 41.3323 14.8327 40.9129 13.0819 40.104C11.3312 39.2951 9.7767 38.116 8.52581 36.6481C7.27491 35.1802 6.35735 33.4584 5.83642 31.6015C5.31549 29.7446 5.2036 27.7968 5.50846 25.8924C5.81332 23.9881 6.52767 22.1725 7.60224 20.571C8.67682 18.9696 10.086 17.6202 11.7326 16.6162C13.3793 15.6121 15.2241 14.9772 17.1399 14.7553C19.0557 14.5334 20.9968 14.7297 22.8294 15.3307C24.5215 11.3778 27.5262 8.12997 31.3359 6.13594C35.1455 4.14191 39.5267 3.52386 43.7393 4.38619C47.9519 5.24852 51.7377 7.53838 54.4574 10.869C57.1771 14.1996 58.6639 18.3668 58.6667 22.6667C58.6667 27.6175 56.7 32.3654 53.1994 35.8661C49.6987 39.3668 44.9507 41.3334 40 41.3334ZM33.8934 33.5041C35.2774 34.0321 35.992 35.6401 35.488 37.0934L31.84 47.6268C31.3334 49.0801 29.8054 49.8294 28.4214 49.2987C27.0374 48.7707 26.3254 47.1628 26.8294 45.7094L30.4774 35.1761C30.9787 33.7227 32.5094 32.9734 33.8934 33.5041ZM38.2454 44.0347C39.6294 44.5627 40.3414 46.1707 39.8374 47.6241L36.1894 58.1574C35.688 59.6107 34.1574 60.3601 32.7734 59.8294C31.3894 59.3014 30.6747 57.6934 31.1787 56.2401L34.8267 45.7067C35.3334 44.2534 36.8614 43.5041 38.2454 44.0347ZM29.3334 43.8641H37.3334C38.8054 43.8641 40 45.1174 40 46.6667C40 48.2134 38.8054 49.4667 37.3334 49.4667H29.3334C27.8614 49.4667 26.6667 48.2134 26.6667 46.6667C26.6667 45.1201 27.8614 43.8667 29.3334 43.8667V43.8641Z"
                    fill="#CBD5E1"
                  />
                </svg>
              </div>
            </div>
            <div className="w-[45%] flex flex-col  gap-14">
              <p className="text-[#101010] text-[18px] leading-[138.889%] font-[400]">
              From idea to traction-generating product, we're by your side every step of the way, smoothing out bumps as they come with the intention of gaining retention and increasing Customer Lifetime Value.
              </p>
            
            </div>
          </div>
        </div>

        <div className='relative flex items-center h-[500px]'>
            <div className='absolute top-0 z-[999] w-[28.48875rem] h-[28.6875rem] bg-[#1877F9] text-[#F1F1F1]'>
                <FaQuoteRight className='text-[8rem] text-[#F1F1F1] mb-0 transform scale-x-[-1]'/>
                <p className=' text-[1.25rem] ml-[5rem] mr-[1.5rem] font-medium leading-10'>Whether we’re building new products from ground up, or transforming existing infrastructure, we know what it takes to make a digital product succeed at scale.</p>
            </div>
            <div className='w-full ml-[300px] mr-[10px] '>
            <img src={handsonlaptop} alt="" className='h-[37.37em] w-full'/></div>
        </div>
    </section>

    {/* What We Do */}
    <section>
    <div className='flex justify-between items-center'>
        <h1 className='  text-[#082B5B] text-[2.5rem] font-bold'>What we do</h1>
        <div className=' w-[43%] text-[1.125rem] '>
            <p> We'll handle all the boring and technical stuff (or work with your team if you have one) so you can focus on taking your solution to the market and pitching to potential investors.</p>
        </div>
        <div className=''>
            <img src={icon} alt="" className=' h-[5.6rem] ' />
        </div>
    </div>

    <div className='flex mt-10  justify-between'>
        <div className='  flex flex-col items-center justify-center  relative justify-between'>
            <img src={victorImg} alt="" className='w-[25.73763rem] h-[26.1875rem] ' />
            <img src= {CTA} alt="" className='w-[5.29463rem] h-[4.5] absolute bottom-0 left-0  mb-[3.15rem] ml-0' />
            <p className=' mt-5 text-[#101010] text-[1.25rem] font-bold'>Web Development</p>
        </div>

        <div className='bg-[#082B5B] w-[25.73763rem] h-[29.1875rem] rounded-[0.3125rem] text-[#F1F1F1] relative'>
        <img src={icon2} alt="" className=' w-[6.6rem] h-[5.6rem]  ml-auto  mt-7 mr-7' loading='lazy'/>
        <p className='text-[2rem] text-center mt-9'  >Mobile Development</p>
        <p className=' text-center text-[1.125rem] mt-5 '>Comfortable space, Full speed wifi, <br /> Free coffe & Snack 
       <br /> and many more</p>
       <p className='text-[#F1F1F1] bg-[#1877F9] w-[12em] h-[4em] px-[2em] py-[0.5em] rounded-[0.3125rem] flex items-center justify-center  absolute bottom-0 left-0 '>Talk to us
       <span> <img src= {icon3} alt="" className=' h-6 w-6 ml-5' /></span>
       </p>
        </div>
        <div className='  flex flex-col items-center  relative justify-between'>
            <img src={image2} alt="" className='w-[25.73763rem] h-[26.1875rem] ' />
            <img src= {CTA} alt="" className='w-[5.29463rem] h-[4.5] absolute bottom-0 left-0  mb-[3.15rem] ml-0' />
            <p className=' mt-5 text-[#101010] text-[1.25rem] font-bold'>Hardware Repairs</p>
        </div>
    </div>
    </section>

    {/* Have a project in mind? */}
    <section>
      <div className='flex '>
        <h1 className=' w-[50%] text-[2.5rem] text-[#082B5B]  font-bold leading-[3.125rem]'>Have a project in mind? Let's get started here</h1>
        <p className=' w-[40%] font-[1.125rem] font-normal leading-[1.5625rem] ml-40 text-[#000000DE] '>We solve complex business challenges with outstanding <br /> strategy, marketing and product development services.</p>
      </div>
      
      <div className='flex items-start justify-end space-x-20 ml-[5em] mt-32 '>
          <div className='flex'>
            <p className='self-start text-[#082B5B] text-[12.5rem] font-bold mt-[-70px]' >1</p>
          <div className='h-[32.12525rem] bg-[#082B5B]  w-[0.2rem] ml-10'></div>
          </div>


          <div className='w-[45%]'>
            <h1 className='text-[#082B5B] font-bold text-[2.75rem] leading-[3.375rem] mb-10'>Web Development</h1>
            <p className='text-[1.125rem] font-normal leading-6 mb-10'>At Kinplus, we are dedicated to helping you reach <br /> the top of your industry. Our software development <br /> services integrate the vision, resources and <br /> experience needed to meet your technology goals</p>

            <p className='text-[1.125rem] font-normal leading-6 mb-10'>At Kinplus, we are dedicated to helping you reach <br /> the top of your industry. Our software development <br /> services integrate the vision, resources and <br /> experience needed to meet your technology goals</p>
           
             <button  className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-[0.5em] mt-5 w-[7em]"
            >
            Talk to us</button>
          </div>

          <div className='w-[45%] relative'>
            <div className='absolute flex mt-[-150px] mb-90px]  ml-[-50px] overflow-hidden '>
              <img src={iconbg1} alt="" className='mt-[-20px] ml-[-40px]'/>
              <img src={iconbg2} alt="" className='mt-[-40px] ml-[-80px] '/>

            </div>
            <div className='absolute top-[5%] mt-[30px] z-[100]'>
              <img src={image3} alt="" />
            </div>
            <div className='absolute z-[999] mt-[10px] top-0 left-[5%]'>
              <img src={image2} alt="" />
            </div>
          </div>
      </div>
    </section>

{/* Mobile Development */}
    <section >
   <div className='flex space-y-20 mr-[5em] mt-32 '>
          <div className='w-[45%] relative '>
            <div className='absolute flex mt-[-150px] mb-90px]  ml-[-50px] overflow-hidden '>
              <img src={iconbg1} alt="" className='mt-[-20px] ml-[-40px]'/>
              <img src={iconbg2} alt="" className='mt-[-40px] ml-[-80px] '/>

            </div>
            <div className='absolute top-[5%] mt-[120px] z-[100]'>
              <img src={image3} alt="" />
            </div>
            <div className='absolute z-[999] mt-[90px] top-0 left-[5%]'>
              <img src={image2} alt="" />
            </div>
          </div>


          <div className='w-[45%] '>
            <h1 className='text-[#082B5B] font-bold text-[2.75rem] leading-[3.375rem] mb-10'>Mobile Development</h1>
            <p className='text-[1.125rem] font-normal leading-6 mb-10'>At Kinplus, we are dedicated to helping you reach <br /> the top of your industry. Our software development <br /> services integrate the vision, resources and <br /> experience needed to meet your technology goals</p>

            <p className='text-[1.125rem] font-normal leading-6 mb-10'>At Kinplus, we are dedicated to helping you reach <br /> the top of your industry. Our software development <br /> services integrate the vision, resources and <br /> experience needed to meet your technology goals</p>
           
             <button  className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-[0.5em] mt-5 w-[7em]"
            >
            Talk to us</button>
          </div>

          <div className='h-[32.12525rem] bg-[#082B5B]  w-[0.2rem] mr-10'></div>
          <div >
       
          <p className='self-start text-[#082B5B] text-[12.5rem] font-bold mt-[-70px]' >2</p>
             </div>
   </div>
          
    </section>
    <section>
    <div className='flex items-start justify-end space-x-20 ml-[5em] mt-32 '>
          <div className='flex'>
            <p className='self-start text-[#082B5B] text-[12.5rem] font-bold mt-[-70px]' >3</p>
          <div className='h-[32.12525rem] bg-[#082B5B]  w-[0.2rem] ml-10'></div>
          </div>


          <div className='w-[55%]'>
            <h1 className='text-[#082B5B] font-bold text-[2.75rem] leading-[3.375rem] mb-10'>Hardware Sale & Repairs</h1>
            <p className='text-[1.125rem] font-normal leading-6 mb-10'>At Kinplus, we are dedicated to helping you reach <br /> the top of your industry. Our software development <br /> services integrate the vision, resources and <br /> experience needed to meet your technology goals</p>

            <p className='text-[1.125rem] font-normal leading-6 mb-10'>At Kinplus, we are dedicated to helping you reach <br /> the top of your industry. Our software development <br /> services integrate the vision, resources and <br /> experience needed to meet your technology goals</p>
           
             <button  className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-[0.5em] mt-5 w-[7em]"
            >
            Talk to us</button>
          </div>

          <div className='w-[45%] relative'>
            <div className='absolute flex mt-[-150px] mb-90px]  ml-[-50px] overflow-hidden '>
              <img src={iconbg1} alt="" className='mt-[-20px] ml-[-40px]'/>
              <img src={iconbg2} alt="" className='mt-[-40px] ml-[-80px] '/>

            </div>
            <div className='absolute top-[5%] mt-[30px] z-[100]'>
              <img src={image3} alt="" />
            </div>
            <div className='absolute z-[999] mt-[10px] top-0 left-[5%]'>
              <img src={image2} alt="" />
            </div>
          </div>
      </div>
    </section>

    <section >

      <div className='flex items-start justify-between'>
      <div className='mr-10'>
        <h1 className='text-[#082B5B] font-bold text-[2.5rem] leading-normal'> Our Approach to Product <br /> Development</h1>
      </div>
      <div>
        <p className='text-[1.125rem] text-[#101010] leading-[1.75rem]'>We take a startup-like approach to thinking smarter, <br /> shipping faster, and scaling far and wide.</p>
      </div>
      
      <div className='flex'>
      <HiArrowLongLeft className='text-[4rem] text-[#817f7f]' />
      <HiArrowLongRight className='text-[4rem] text-[#1877F9]'/>
      </div>
      </div>
     
      <div className='flex mt-10  justify-between'>
        <div className='  flex flex-col items-center justify-center  relative justify-between'>
            <img src={image4} alt="" className='w-[25.73763rem] h-[26.1875rem] ' />
            <p className=' mt-5 text-[#101010] text-[1.25rem] font-bold'>Design</p>
        </div>

        <div className='bg-[#082B5B] w-[25.73763rem] h-[29.1875rem] rounded-[0.3125rem] text-[#F1F1F1] relative'>
        <img src={icon2} alt="" className=' w-[6.6rem] h-[5.6rem]  ml-auto  mt-7 mr-7' loading='lazy'/>
        <p className='text-[2rem] text-center mt-9'  > Development</p>
        <p className=' text-center text-[1.125rem] mt-5 lead '>At Kinplus, we are dedicated to <br /> helping you reach the top of your <br /> industry. Our software <br /> development services integrate <br /> the vision, resources and <br />experience needed to meet your <br /> technology goals</p>
     
        </div>
        <div className='  flex flex-col items-center  relative justify-between'>
            <img src={image5} alt="" className='w-[25.73763rem] h-[26.1875rem] ' />
           
            <p className=' mt-5 text-[#101010] text-[1.25rem] font-bold'>Engineering</p>
        </div>
    </div>
     
     <div className='flex justify-center items-center mt-14 text-[3rem]'>
     <BsDashLg className='mr-0'  />
     <BsDashLg />
     <BsDashLg />
     <BsDashLg />
     </div>
    </section>
  <section>
     {/*Testimonial */}
     <TrainingTestimonial />
     </section>  
    
    </div>
    

  )
}
