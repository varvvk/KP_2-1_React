import { useState } from 'react';

const useProducts = () => {
  const [products] = useState([
    { id: 1, name: 'Nike Air Max', price: 150, brand: 'Nike', image: require('../images/product_1-1.png'), image2: require('../images/product_1-2.png') },
    { id: 2, name: 'Adidas Ultraboost', price: 180, brand: 'Adidas', image: require('../images/product_2-1.jpg'), image2: require('../images/product_2-2.jpg') },
    { id: 3, name: 'Puma RS-X', price: 120, brand: 'Puma', image: require('../images/product_3-1.jpg'), image2: require('../images/product_3-2.jpg') },
    { id: 4, name: 'Nike React Infinity Run', price: 160, brand: 'Nike', image: require('../images/product_4-1.png'), image2: require('../images/product_4-2.png') },
    { id: 5, name: 'Adidas NMD_R1', price: 140, brand: 'Adidas', image: require('../images/product_5-1.jpg'), image2: require('../images/product_5-2.jpg') },
    { id: 6, name: 'Puma Future Rider', price: 110, brand: 'Puma', image: require('../images/product_6-1.jpg'), image2: require('../images/product_6-2.jpg') },
    { id: 7, name: 'Nike Zoom Fly 5', price: 180, brand: 'Nike', image: require('../images/product_7-1.png'), image2: require('../images/product_7-2.png') },
    { id: 8, name: 'Adidas Yeezy Boost 350', price: 220, brand: 'Adidas', image: require('../images/product_8-1.jpg'), image2: require('../images/product_8-2.jpg') },
    { id: 9, name: 'Puma Suede Classic', price: 100, brand: 'Puma', image: require('../images/product_9-1.jpg'), image2: require('../images/product_9-2.jpg') },
  ]);
  return products;
};

export default useProducts;
