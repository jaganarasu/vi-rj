import React from 'react';
import '../styles/index.css'; // Assuming you have some custom styles here

const ProductCard = ({ product }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="product-card">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
        />
        <div className="wishlist">
          <i className="fa fa-heart"></i> {/* Font Awesome Heart Icon for Wishlist */}
        </div>
        <div className="product-title">{product.title}</div>
        <div className="product-description">{product.description}</div>
        <div className="product-price">Price: ${product.price}</div>
        <div className="product-rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`fa fa-star${
                index < product.rating ? '' : '-half-alt'
              }`}
            ></span>
          ))}
        </div>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
