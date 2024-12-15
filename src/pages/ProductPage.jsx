import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../components/Header";  
import Banner from "../components/Banner";  
import Footer from "../components/Footer"; 
import ProductCard from '../components/ProductPage';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
               <Header />
               <Banner />
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default ProductList;
 