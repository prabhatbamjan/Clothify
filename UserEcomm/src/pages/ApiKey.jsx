// ProductService.js
// Service for fetching product data and images from the backend

import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api/product/get/663ef2606ad32f0c21f346b7';
const API_KEY = process.env.REACT_APP_API_KEY;

// Function to fetch product data from the backend
export async function fetchProductData(productId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
}

// Function to fetch product image from the backend
export async function fetchProductImage(productId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}/image`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data.imageUrl;
  } catch (error) {
    console.error('Error fetching product image:', error);
    throw error;
  }
}

// CartService.js
// Service for managing the shopping cart

// Function to add items to the cart
export async function addToCart(productId, quantity) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/cart/add`,
      { productId, quantity },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
}

// Function to fetch product price from the backend
export async function fetchProductPrice(productId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}/price`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data.price;
  } catch (error) {
    console.error('Error fetching product price:', error);
    throw error;
  }
}


// -------------------- FOR MALE ----------------------
// config.js

// Create a configuration object with a placeholder for the API key
const config = {
  apiKey: 'YOUR_API_KEY_HERE' // Placeholder for the API key
};

export default config;

// Your frontend component

import config from './config';

// You can access the API key like this:
const apiKey = config.apiKey;

// Use the apiKey variable wherever you need the API key in your frontend code


// -------------------- FOR FEMALE ----------------------
// femaleConfig.js

// Create a configuration object with a placeholder for the API key
const femaleConfig = {
  apiKey: 'YOUR_FEMALE_API_KEY_HERE' // Placeholder for the Female API key
};


// Female.js

import femaleConfig from './femaleConfig';

// You can access the Female API key like this:
const femaleApiKey = femaleConfig.apiKey;

// Use the femaleApiKey variable wherever you need the API key specific to Female products in your frontend code


// -------------------- FOR KIDS ----------------------
// kidsConfig.js

// Create a configuration object with a placeholder for the API key
const kidsConfig = {
  apiKey: 'YOUR_KIDS_API_KEY_HERE' // Placeholder for the Kids API key
};

export default kidsConfig;

// Kids.js

import kidsConfig from './kidsConfig';

// You can access the Kids API key like this:
const kidsApiKey = kidsConfig.apiKey;

// Use the kidsApiKey variable wherever you need the API key specific to Kids products in your frontend code



