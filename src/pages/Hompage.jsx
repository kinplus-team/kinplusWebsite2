import React from 'react'
import HeroPage from '../components/HeroPage/Index'
import PartnersAndSponsors from '../components/PartnersAndSponsors/Index'
import ChooseUs from '../components/ChooseUs'
import WhatWeDo from '../components/WhatWeDo'
import Problems from '../components/Problems'

export default function Hompage() {
  return (
    <div>
      <HeroPage/>
      <PartnersAndSponsors />
      <ChooseUs />
      <WhatWeDo />
      <Problems/>
    </div> 
  )
}
