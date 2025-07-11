import React from 'react'
import MainSection from '../components/MainSection/MainSection'
import NavbarComponents from  '../components/NavbarComponents/NavbarComponents'
import ProcessComponents  from  '../components/ProcessComponents/ProcessComponents'
import ProductAdvert  from  '../components/ProductAdvert/ProductAdvert'

const HomePage = () => {
  return (
    <>
    < NavbarComponents/>
    <MainSection />
    <ProcessComponents />
    <ProductAdvert/>
    </>

  
  )
}

export default HomePage