import React from 'react';
import Dashboard from './../DashboardMain/DashboardMain';
import AddProduct from './../AddProduct/AddProduct';
import AllProducts from './../AllProducts/AllProducts';
import PurchasedProducts from './../PurchasedProducts/PurchasedProducts';
import AllUsers from '../AllUsers/AllUsers';

const DashboardContent = ({ activeComponent, setActiveComponent }) => {
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard  setActiveComponent={setActiveComponent}/>;
      case 'Add Product':
        return <AddProduct />;
      case 'All Products':
        return <AllProducts />;
      case 'Purchased Products':
        return <PurchasedProducts />;
      case 'All Users':
        return <AllUsers />;
      default:
        return <Dashboard setActiveComponent={setActiveComponent} />;
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
};

export default DashboardContent;