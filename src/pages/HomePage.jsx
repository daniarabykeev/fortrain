import React, { useContext, useEffect } from "react";
import { productsContext } from "../contexts/ProductsContext";

function HomePage() {
  const { products, getProducts } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products?.map((item) => {
        return (
          <div>
            <h4>{item.title}</h4>
            <h4>{item.price}</h4>
            <button>edit</button>
            <button>x</button>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
