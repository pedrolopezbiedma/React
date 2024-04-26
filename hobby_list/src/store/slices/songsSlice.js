import { createSlice } from "@reduxjs/toolkit"
import { resetStoreAction } from "../actions"

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action){
            state.push(action.payload)
        },
        removeSong(state, action){
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

export const songsReducer = songsSlice.reducer;
export const { addSong, removeSong } = songsSlice.actions;