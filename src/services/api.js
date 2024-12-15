import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

// Fetch all products
export const getProducts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data.products;
};

// Search for products
export const searchProducts = async (query) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: { q: query },
  });
  return response.data.products;
};

// Fetch categories
export const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data;
};

// Fetch products by category
export const getProductsByCategory = async (category) => {
  const response = await axios.get(`${BASE_URL}/category/${category}`);
  return response.data.products;
};
