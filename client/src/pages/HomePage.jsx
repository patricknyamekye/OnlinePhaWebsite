import React from 'react'
import MainSection from '../components/MainSection/MainSection'
import NavbarComponents from  '../components/NavbarComponents/NavbarComponents'
import ProcessComponents  from  '../components/ProcessComponents/ProcessComponents'
import ProductAdvert  from  '../components/ProductAdvert/ProductAdvert'
import LatestNews from '../components/LatestNews/LatestNews'

const HomePage = () => {
  return (
    <>
    < NavbarComponents/>
    <MainSection />
    <ProcessComponents />
    <ProductAdvert/>
    <LatestNews/>
    </>

  
  )
}

export default HomePage