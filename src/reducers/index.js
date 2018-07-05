import { combineReducers } from "redux";

import blogs from "./Blogs";
import categories from "./Categories";

export const myReducer = combineReducers({
  blogs,
  categories
});
