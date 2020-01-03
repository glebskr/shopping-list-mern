import axios from "axios";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

interface IItem {
  name: string;
  id: number;
}

export const getItems = () => (dispatch: any) => {
  dispatch(setItemsLoading);
  axios
    .get("/api/items")
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const addItem = (item: IItem) => (dispatch: any, getState: any) => {
  axios
    .post("/api/items", item, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const deleteItem = (id: string) => (dispatch: any, getState: any) => {
  axios.delete("/api/items/" + id, tokenConfig(getState)).then(() => {
    dispatch({
      type: DELETE_ITEM,
      payload: id
    });
  })
  .catch(err => {
    dispatch(returnErrors(err.response.data, err.response.status));
  });;
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
