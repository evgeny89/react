import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: "Guest",
        countMessage: 0,
        isAuth: false,
    },
    reducers: {
        setLogin: (state, action) => {
            state.name = action.payload
        },
        incrementCountMessages: state => {
            state.countMessage += 1
        },
        change: (state, action) => {
            state.isAuth = action.payload
        }
    }
})

export const { setLogin, incrementCountMessages, change } = userSlice.actions

export default userSlice.reducer