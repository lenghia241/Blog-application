import * as types from "../constants/ActionTypes";

export const addPost = data => {
  return {
    type: types.ADD_POST,
    data
  };
};

export const deletePost = id => {
  return {
    type: types.DELETE_POST,
    id
  };
};

export const sortPost = sortBy => {
  return {
    type: types.SORT_POST,
    sortBy
  };
};
