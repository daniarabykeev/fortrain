import React, { createContext, useReducer } from "react";
import { ACTIONS, API } from "../helpers/consts";
import axios from "axios";

export const productsContext = createContext();

const initialState = {
  products: [],
  oneProduct: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

function ProductsContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getProducts() {
    const { data } = await axios(API);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  }

  async function addProducts(newProduct) {
    await axios.post(`${API}`, newProduct);
    getProducts();
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  async function getOneProduct(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: ACTIONS.GET_ONE_PRODUCT,
      payload: data,
    });
  }

  async function editProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }

  const value = {
    products: state.products,
    oneProduct: state.oneProduct,
    getProducts,
    addProducts,
    deleteProduct,
    getOneProduct,
    editProduct,
  };
  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
}

export default ProductsContext;
