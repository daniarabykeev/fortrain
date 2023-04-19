import React, { useContext, useEffect } from "react";
import { productsContext } from "../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { products, getProducts, deleteProduct } = useContext(productsContext);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products?.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <h4>{item.price}</h4>
            <button
              onClick={(e) => {
                navigate(`/edit/${item.id}`);
              }}
            >
              edit
            </button>
            <button
              onClick={(e) => {
                deleteProduct(item.id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
