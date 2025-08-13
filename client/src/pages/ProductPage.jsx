import React from 'react';
import ProductComponent from '../components/ProductsComponents/ProductComponent';
import NavbarComponents from '../components/NavbarComponents/NavbarComponents';
import BannerComponent from '../components/ProductBanner/BannerComponent';
import Footer from '../components/FooterComponent/Footer';

const ProductPage = () => {

  return (
    <>
      <NavbarComponents />
      <br /><br /><br /><br /><br />

      <BannerComponent />
      <br /><br /><br /><br /><br /><br />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '20px',
          justifyContent: 'center',
        }}
      >
          <ProductComponent
          />
      </div>

      <Footer/>
    </>
  );
};

export default ProductPage;