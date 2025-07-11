import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './MainSection.module.css';
import 'swiper/css';
import blackPhar from '../../assets/black.jpg';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';





const MainSection = () => {
  return (
    <div className={styles.HomeComponent}>
      <div className={styles.HomeComponentwrapper}>
       
       <Swiper
      spaceBetween={50}
      modules={[Pagination, Navigation, Autoplay]}
      slidesPerView={1}
      pagination ={{clickable:true}}
   
      navigation
      loop ={true}
      autoplay={{delay: 3000}}
     
    >
      <SwiperSlide>
        <div className={styles.sliders}> 
         <img src={blackPhar} alt="Pills" className={styles.slideImage} />

        </div>

        <div className={styles.homeText}>
          <h1>Need Medications? </h1>
          <p>Just Order, We Deliver
        Whether you’re on your phone or at your desk, getting your 
        medication is now effortless. Any device, any time. It's simple! </p>

         <a href="/products" className={styles.orderButton}>Order Now</a>
        </div>
        
      </SwiperSlide>

      <SwiperSlide>
       <div className={styles.sliders}> 
         <img src={blackPhar} alt="Pills" className={styles.slideImage} />

        </div>

       <div className={styles.homeText}>
          <h1>Buying meds from home is now easy, simple & fast </h1>
          <p>You can purchase the medications you need from anywhere and 
         we'll deliver them straight to your  doorstep in Ghana</p>

         <a href="/products" className={styles.orderButton}>Learn More</a>
        </div>

      </SwiperSlide>

      <SwiperSlide>
         <div className={styles.sliders}> 
         <img src={blackPhar} alt="Pills" className={styles.slideImage} />

        </div>
        </SwiperSlide>
   
    
    </Swiper>

      </div>
      


 
      
      
    
    </div>
  );
};

export default MainSection;
