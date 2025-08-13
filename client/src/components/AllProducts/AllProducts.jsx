import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from './AllProducts.module.css';
import axios from 'axios';

const AllProducts = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  // const handleEdit = (productId) => {
  //   const product = products.find(prod => prod._id === productId); 
  //   setSelectedProduct(product);
  //   setShowEditModal(true);
  // };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/delete-product/${productId}`);
      console.log('Product deleted successfully');
      // Remove deleted product from state
      setProducts(products.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedProduct(null);
  };

  const handleSaveChanges = () => {
    // Implement save changes logic if needed
    setShowEditModal(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/get-products");
        if (response && response.data) {
          setProducts(response.data.products); // Update state with fetched products
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getAllProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h2>All Products</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}> {/* Use _id as key */}
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.productCategory}</td>
              <td>{product.description}</td>
              <td>{product.quantity}</td>
              <td>
                {/* <button onClick={() => handleEdit(product._id)} className={styles.actionButton}>
                  <FaEdit />
                </button> */}
                <button onClick={() => handleDelete(product._id)} className={styles.actionButton}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditModal && selectedProduct && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleCloseModal}>&times;</span>
            <h2>Edit Product</h2>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="editProductName">Product Name:</label>
                <input type="text" id="editProductName" name="editProductName" defaultValue={selectedProduct.name} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="editProductPrice">Product Price:</label>
                <input type="text" id="editProductPrice" name="editProductPrice" defaultValue={selectedProduct.price} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="editProductCategory">Product Category:</label>
                <select id="editProductCategory" name="editProductCategory" defaultValue={selectedProduct.productCategory}>
                  <option value="book">Book</option>
                  <option value="clothes">Clothes</option>
                  <option value="carvers">Carver</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="editProductDescription">Product Description:</label>
                <textarea id="editProductDescription" name="editProductDescription" defaultValue={selectedProduct.description}></textarea>
              </div>
              <button type="button" onClick={handleSaveChanges} className={styles.button}>Save Changes</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;