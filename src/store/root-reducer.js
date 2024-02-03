import { combineReducers } from "redux";
import { themeReducer } from "./theme/themeReducer";
import { countriesReducer } from "./countries/countries-reducer";
import { controlerReducer } from "./controls/controls-reducer";
export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlerReducer,
});
