import {createSlice} from '@reduxjs/toolkit'

export const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: {},
        chats: [
            {
                id: 1,
                name: "Общий",
            },
            {
                id: 2,
                name: "Backend",
            },
            {
                id: 3,
                name: "Frontend",
            }
        ],
        selectedChat: 1,
    },
    reducers: {
        addMessages: (state, action) => {
            if (state.messages[state.selectedChat]) {
                state.messages = {
                    ...state.messages,
                    [state.selectedChat]: [...state.messages[state.selectedChat].slice(-19), action.payload]
                }
            } else {
                state.messages = {
                    ...state.messages,
                    [state.selectedChat]: [action.payload]
                }
            }
        },
        setSelectedChat: (state, action) => {
            state.selectedChat = action.payload
        }
    }
})

export const { addMessages, setSelectedChat } = messageSlice.actions

export default messageSlice.reducer