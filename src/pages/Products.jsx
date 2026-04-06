import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/productos")
      .then(res => res.json())
      .then(data => {
        console.log("PRODUCTOS:", data);
        setProducts(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {products.map((product) => (
        <ProductCard 
          key={product._id} 
          product={product} 
        />
      ))}
    </div>
  );
};

export default Products;