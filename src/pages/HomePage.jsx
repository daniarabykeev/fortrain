import React, { useContext, useEffect } from "react";
import { productsContext } from "../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { getProducts, products, deleteProduct } = useContext(productsContext);

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
            <h5>{item.price}</h5>
            <button onClick={(e) => navigate(`/edit/${item.id}`)}>edit</button>
            <button
              onClick={(e) => {
                deleteProduct(item.id);
              }}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
