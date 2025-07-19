import React from 'react'
import MainSection from '../components/MainSection/MainSection'
import NavbarComponents from  '../components/NavbarComponents/NavbarComponents'
import ProcessComponents  from  '../components/ProcessComponents/ProcessComponents'
import ProductAdvert  from  '../components/ProductAdvert/ProductAdvert'
import LatestNews from '../components/LatestNews/LatestNews'
import TrendingProduct from '../components/TrendingComponent/Trending'

const HomePage = () => {
  return (
    <>
    < NavbarComponents/>
    <MainSection />
    <ProcessComponents />
    <ProductAdvert/>
    <TrendingProduct/>
    <LatestNews/>
    </>

  
  )
}

export default HomePage