// import React, { useState, useEffect } from 'react';
// import Banner from './Banner';
// import Header from './Header';
// import Footer from './Footer';
// import ProductCard from './ProductCard';
// import Pagination from './Pagination';
// import '../styles/card.css';

// const ProductPage = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(12);
//   const [selectedCategory, setSelectedCategory] = useState('');

//   useEffect(() => {
//     const fetchProductData = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/products');
//         const data = await response.json();
//         setProducts(data.products);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProductData();
//   }, []);

//   const filteredProducts = products.filter(product => {
//     if (selectedCategory === '') {
//       return true;
//     } else {
//       return product.category === selectedCategory;
//     }
//   });

//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
//   const lastProductIndex = currentPage * productsPerPage;
//   const firstProductIndex = lastProductIndex - productsPerPage;
//   const currentProducts = filteredProducts.slice(firstProductIndex, lastProductIndex);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <Header />  
//       <Banner /> {/* Assuming you have a Banner component */}

//       <div className="container"> 
//         <div className="row">
//         <div className="col-md-3  mt-4">
 
//           <select className="form-select mb-4" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
//             <option value="">Select Category</option>
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
//           <div className="row">
//             {currentProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>

//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={handlePageChange}
//           />
//         </div>
//       </div>
//     </div>
//     <Footer />  
//      </div>
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
  const [categories, setCategories] = useState([]); // State for storing unique categories
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);

        // Extract and sort unique categories
        const uniqueCategories = [...new Set(data.products.map(product => product.category))];
        setCategories(uniqueCategories.sort()); // Sort categories alphabetically
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductData();
  }, []);

  // Filter products based on selected category
  const filteredProducts = products.filter(product => {
    if (selectedCategory === '') {
      return true; // If no category is selected, return all products
    } else {
      return product.category === selectedCategory; // Filter by category
    }
  });

  // Calculate total pages and slice products for current page
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = filteredProducts.slice(firstProductIndex, lastProductIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header /> {/* Render Header component */}
      <Banner /> {/* Render Banner component */}

      <div className="container mt-4">
        <div className="row">
          {/* Category Filter Dropdown */}
          <div className="col-md-3 mt-4">
            <select
              className="form-select mb-4"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)} // Update selected category
            >
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Products Display Grid */}
          <div className="col-md-12">
            <div className="row">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} /> // Render ProductCard for each product
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange} // Handle page change
            />
          </div>
        </div>
      </div>

      <Footer /> {/* Render Footer component */}
    </div>
  );
};

export default ProductPage;
