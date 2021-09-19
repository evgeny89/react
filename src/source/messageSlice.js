import {createSlice} from '@reduxjs/toolkit'

export const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        chats: [],
        selectedChat: 1,
    },
    reducers: {
        setChats: (state, action) => {
            state.chats = [...action.payload];
        },
        resetChats: (state) => {
            state.chats = [];
        },
        loadMessages: (state, action) => {
            state.messages = action.payload;
        },
        setSelectedChat: (state, action) => {
            state.selectedChat = action.payload
        }
    }
})

export const { setSelectedChat, setChats, resetChats, loadMessages } = messageSlice.actions

export default messageSlice.reducer
