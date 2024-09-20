import React from 'react'
import { useState, useEffect } from "react";
import kinplusLogoBlue from "../../assets/kinplusBlue.png";
import kinplusLogoWhite from "../../assets/kinplusWhite.png";
import PageLayout from '../../components/Layout/PageLayout';
import arrow from "../../assets/PageNotFound/Arrow.svg"
import blueLeft from "../../assets/PageNotFound/Blue-left.svg"
import blueRight from "../../assets/PageNotFound/Blue-right.svg"
import meter from "../../assets/PageNotFound/Meter.svg"
import redLeft from "../../assets/PageNotFound/Red-left.svg"
import redRight from "../../assets/PageNotFound/Red-right.svg"
import errorImage from "../../assets/PageNotFound/errorImage.svg"
import errorImageMobile from "../../assets/PageNotFound/errorImageMobile.svg"
import Button from '../../components/Button';
import { Link } from 'react-router-dom';


const PageNotFound = () => {
  return (
    <PageLayout>
        <div className='py-20'>
            {/* Kinplus logo */}
            <img 
                src={kinplusLogoBlue} 
                alt="kinplus logo"
                className='h-[30px] lg:h-[61.893px] w-[107.081px] lg:w-[220.919px] mb-[6rem] lg:mb-0 mx-auto block'
            />
            {/* Error Image (Desktop view) */}
            <div className='hidden lg:flex justify-evenly relative mt-[6rem] mb-[2rem]'>
                <img 
                    src={errorImage} 
                    alt="Error image"
                    className='lg:h-[135.143px] lg:w-[515.604px] mx-auto block'
                />
            </div>

            {/* Error Image (Mobile view) */}
            <div className='flex lg:hidden'>
                <img 
                    src={errorImageMobile} 
                    alt="Error image"
                    className='h-[146.56px] w-[304.604px] mx-auto block'
                />
            </div>
            {/* Error text */}           
            <div className='mt-[0.5rem] lg:mt-[6rem]'>
                <h3 className='text-[#DE0000] font-bold text-[25.193px] lg:text-[30.125px] text-center'>Oops...</h3>
                <h2 className='text-center mx-auto mt-[0.5rem] lg:mt-[1rem] leading-tight lg:leading-normal text-[31.202px] lg:text-[53.355px] font-medium lg:w-[700px]'>We can’t find the page
                you’re looking for.</h2>
            </div>

            {/* CTA and Home page link */}
            <div className='flex flex-col lg:flex-lg:row items-center justify-center gap-[2rem] lg:gap-[13rem] mt-8 lg:mt-16'>
                <Link to={'..'} className='w-[4px]'>
                    <Button text="Go back!" type="customizedBlue" className='-ml-16 lg:ml-0 lg:block w-[115px] lg:w-[168px] py-[16px] lg:py-[20px] px-[24px] lg:px-[42px]'  />
                </Link>

                <Link to='/' className='flex text-xl font-semibold leading-[112%] gap-[0.6rem] items-center underline'>
                    Go to home page
                    {/* Arrow image */}
                    <img 
                        src={arrow} 
                        alt="Arrow" 
                        className='w-[35px]'
                    />
                </Link>
            </div>
        </div>
    </PageLayout>
  )
}

export default PageNotFound

