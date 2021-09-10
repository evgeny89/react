import { createSlice } from '@reduxjs/toolkit'

export const randomGifSlice = createSlice({
    name: 'random',
    initialState: {
        url: "https://api.giphy.com/v1/gifs/random?api_key=7WdbrNMqD7Xv3mGd0sHvC9aH532Kk4Cy&tag=&rating=g",
        urlGif: "",
        isLoading: false,
        isError: false,
    },
    reducers: {
        setUrlGif: (state, action) => {
            state.urlGif = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.isError = action.payload
        }
    }
})

export const { setUrlGif, setLoading, setError } = randomGifSlice.actions

export default randomGifSlice.reducer