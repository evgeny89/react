import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: "Guest",
        countMessage: 0,
    },
    reducers: {
        setLogin: (state, action) => {
            state.name = action.payload
        },
        incrementCountMessages: state => {
            state.countMessage += 1
        }
    }
})

export const { setLogin, incrementCountMessages } = userSlice.actions

export default userSlice.reducer