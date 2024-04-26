import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: ''
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload
        },
        changeCost(state, action) {
            state.cost = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addCar, (state, action) => {
            return {
                name: '',
                cost: ''
            }
        })
    }
})

export const formReducer = formSlice.reducer;
export const { changeName, changeCost } = formSlice.actions;