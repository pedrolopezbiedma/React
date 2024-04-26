import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    searchTerm: "",
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.cars.push({ id: nanoid(), ...action.payload });
    },
    removeCar(state, action) {
      const updatedCars = state.cars.filter((car) => car.id !== action.payload);
      state.cars = updatedCars;
    },
  },
});

export const carsReducer = carsSlice.reducer;
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
