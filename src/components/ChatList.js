import React, {useCallback} from "react";
import {MenuItem, MenuList, Paper} from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import {setSelectedChat} from "../source/messageSlice";

const ChatList = () => {
    const {chats, selectedCat} = useSelector(state => state.messages);
    const dispatch = useDispatch();

    const selectChat = useCallback((chatId) => {
        dispatch(setSelectedChat(chatId));
    }, [dispatch]);

    return (
        <Paper>
            <MenuList>
                {chats.map(item => (
                    <MenuItem
                        key={item.id}
                        selected={selectedCat === item.id}
                        onClick={() => selectChat(item.id)}
                    >{item.name}</MenuItem>
                ))}
            </MenuList>
        </Paper>
    );
}

export default ChatList;
