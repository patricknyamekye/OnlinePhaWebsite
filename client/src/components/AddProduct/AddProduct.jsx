import React, { useState } from 'react';
import styles from './AddProduct.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImg, setProductImg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(name, price, description, productCategory, productImg, quantity)

    if (!name || !price || !description || !productCategory || !productImg || !quantity) {
      Swal.fire({
        title: "Oops!",
        text: "Please fill in all fields!",
        icon: "warning"
      });
      return;
    }
      const response = await axios.post("http://localhost:5000/api/add-product", {name, price, description, productCategory, productImg, quantity} , {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 200) {
        Swal.fire({
          title: "Good job!",
          text: "Product Added Successfully!",
          icon: "success"
        });
        setName("")
        setPrice("")
        setDescription("")
        setProductCategory("")
        setProductImg(null)
        setQuantity("")
      }else {
        Swal.fire({
          title: "Oops!",
          text:  "Error Adding Product!",
          icon: "error"
        });
      }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="productName" className={styles.label}>Product Name:</label>
          <input
            type="text"
            id="productName"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="productPrice" className={styles.label}>Product Price:</label>
          <input
            type="number"
            id="productPrice"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="productPrice" className={styles.label}>Product Quantity:</label>
          <input
            type="number"
            id="productQuantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="productDescription" className={styles.label}>Product Description:</label>
          <textarea
            id="productDescription"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="productCategory" className={styles.label}>Product Category:</label>
          <select
            id="productCategory"
            name="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            className={styles.select}
          >
            <option value="" disabled>Select category</option>
            <option value="cloths">Cloths</option>
            <option value="beads">Beads</option>
            <option value="carvers">Carvers</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="productImage" className={styles.label}>Product Image:</label>
          <input
            type="file"
            id="productImage"
            name="productImg"
            onChange={(e) => setProductImg(e.target.files[0])}
            className={styles.input}
          />
        </div>
        <button type='submit' className={styles.button}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;