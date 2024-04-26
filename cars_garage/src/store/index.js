import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import {
  carsReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    formSlice: formReducer,
    carsSlice: carsReducer,
  },
});

export { store };
export { changeName, changeCost, changeSearchTerm, addCar, removeCar };
