import { combineReducers } from "redux";
import CatagoriesReducer from "./CatagoriesReducer";
import DrawerReducer from "./DrawerReducer";
const allReducers = combineReducers({
  catagories: CatagoriesReducer,
  drawer: DrawerReducer,
});
export default allReducers;
