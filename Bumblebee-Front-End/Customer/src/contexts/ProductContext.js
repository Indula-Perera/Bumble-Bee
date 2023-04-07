import React, { createContext, useState, useEffect } from 'react';

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);
  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:8080/api/v1/product/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
