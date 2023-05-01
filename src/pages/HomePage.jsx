import React, { useContext, useEffect } from "react";
import { productsContext } from "../contexts/ProductsContext";

function HomePage() {
  const { getProducts, products } = useContext(productsContext);

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
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
