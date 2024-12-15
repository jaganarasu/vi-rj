// import React, { useState, useEffect } from 'react';
// import Banner from './Banner';
// import Header from './Header';
// import Footer from './Footer';
// import ProductCard from './ProductCard'; // Import the ProductCard Component
// import Pagination from './Pagination'; // Import Pagination Component

// const ProductPage = () => {
//   const [products, setProducts] = useState([]); // State to store products
//   const [currentPage, setCurrentPage] = useState(1); // Current page state
//   const [productsPerPage] = useState(12); // Number of products per page
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   useEffect(() => {
//     const fetchProductData = async () => {
//       try {
//         setLoading(true); // Set loading to true while fetching data
//         const response = await fetch('https://dummyjson.com/products');
//         const data = await response.json();
//         setProducts(data.products); // Set products
//       } catch (error) {
//         setError('Error fetching products');
//         console.error('Error fetching products:', error);
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchProductData(); // Fetch products on component mount
//   }, []);

//   // Get current products for the current page
//   const lastProductIndex = currentPage * productsPerPage;
//   const firstProductIndex = lastProductIndex - productsPerPage;
//   const currentProducts = products.slice(firstProductIndex, lastProductIndex);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   if (loading) {
//     return <div>Loading...</div>; // Loading message
//   }

//   if (error) {
//     return <div>{error}</div>; // Error message
//   }

//   return (
//     <div>
//       <Header />  
//       <Banner /> {/* Assuming you have a Banner component */}

//       <div className="container"> 
//         <div className="row">
//         <div className="col-md-3  mt-4">
//           {/* Filter Dropdown */}
//           <select className="form-select mb-4">
//             <option>Select Category</option>
//             <option value="1">Laptops</option>
//             <option value="2">Fragrances</option>
//             <option value="3">Skincare</option>
//             <option value="4">Groceries</option>
//             <option value="5">Home Decoration</option>
//             <option value="6">Furniture</option>
//             <option value="7">Tops</option>
//             <option value="8">Women's Dresses</option>
//             <option value="9">Men Shoes</option>
//           </select>
//         </div>

//         <div className="col-md-12">
//           {/* Wrap the products in a row to display in a grid */}
//           <div className="row">
//             {currentProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>

//           {/* Pagination */}
//           <Pagination
//             currentPage={currentPage}
//             totalPages={Math.ceil(products.length / productsPerPage)}
//             onPageChange={handlePageChange}
//           />
//         </div>
//       </div> </div>

//       <Footer />  
//     </div>
//   );
// };

// export default ProductPage;


import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import '../styles/card.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductData();
  }, []);

  const filteredProducts = products.filter(product => {
    if (selectedCategory === '') {
      return true;
    } else {
      return product.category === selectedCategory;
    }
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = filteredProducts.slice(firstProductIndex, lastProductIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header />  
      <Banner /> {/* Assuming you have a Banner component */}

      <div className="container"> 
        <div className="row">
        <div className="col-md-3  mt-4">
 
          <select className="form-select mb-4" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="1">Laptops</option>
            <option value="2">Fragrances</option>
            <option value="3">Skincare</option>
            <option value="4">Groceries</option>
            <option value="5">Home Decoration</option>
            <option value="6">Furniture</option>
            <option value="7">Tops</option>
            <option value="8">Women's Dresses</option>
            <option value="9">Men Shoes</option>
          </select>
        </div>

        <div className="col-md-12">
          <div className="row">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
    <Footer />  
     </div>
  );
};

export default ProductPage;