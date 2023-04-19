import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../contexts/ProductsContext";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
  title: "",
  price: "",
};

function EditProductPage() {
  const { oneProduct, getOneProduct, editProduct } =
    useContext(productsContext);
  const [product, setProduct] = useState(initialState);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  function handleSubmit(e) {
    e.preventDefault();
    editProduct(id, product);
    setProduct(initialState);
    navigate("/");
  }

  function handleChange(e) {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  }

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="title"
          name="title"
          value={product.title}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          value={product.price}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button>edit</button>
      </form>
    </div>
  );
}

export default EditProductPage;
