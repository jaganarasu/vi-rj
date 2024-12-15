import React from "react";

const ProductCard = ({ product }) => (
  <div className="border rounded-lg shadow hover:shadow-lg">
    <div className="relative">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover"
      />
      <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
        <i className="far fa-heart"></i>
      </button>
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg">{product.title}</h3>
      <p className="text-sm text-gray-600">
        {product.description.length > 60
          ? `${product.description.substring(0, 60)}...`
          : product.description}
      </p>
      <div className="flex justify-between items-center mt-4">
        <span className="font-bold text-xl text-pink-600">${product.price}</span>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`fas fa-star ${
                index < Math.round(product.rating)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            ></i>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
