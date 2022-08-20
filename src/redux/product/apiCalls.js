import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  deleteProductsStart,
  deleteProductsSuccess,
  deleteProductsFailure,
  addProductsStart,
  addProductsSuccess,
  addProductsFailure,
  updateProductsStart,
  updateProductsSuccess,
  updateProductsFailure,
} from "./productRedux";

import { publicRequest } from "../../requestMethods";

export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());

  try {
    const res = await publicRequest.get("/produit");
    dispatch(getProductsSuccess(res.data));
  } catch (error) {
    dispatch(getProductsFailure());
  }
};

export const deleteProductById = async (id, dispatch) => {
  dispatch(deleteProductsStart());

  try {
    const res = await publicRequest.delete(`/produit/${id}`);
    dispatch(deleteProductsSuccess(res.data));
  } catch (error) {
    dispatch(deleteProductsFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductsStart());

  try {
    const res = await publicRequest.put(`/produit/${id}`, product);
    dispatch(updateProductsSuccess(res.data));
  } catch (error) {
    dispatch(updateProductsFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductsStart());

  try {
    const res = await publicRequest.post("/produit", product);
    dispatch(addProductsSuccess(res.data));
  } catch (error) {
    dispatch(addProductsFailure());
  }
};
