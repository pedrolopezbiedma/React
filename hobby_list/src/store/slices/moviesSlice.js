import { createSlice } from "@reduxjs/toolkit"
import { resetStoreAction } from "../actions"

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action){
            state.push(action.payload)
        },
        removeMovie(state, action){
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetStoreAction, (state, action) => {
            return []
        })
    }
})

export const moviesReducer = moviesSlice.reducer;
export const { addMovie, removeMovie } = moviesSlice.actions