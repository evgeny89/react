import React from "react";
import {MenuItem, MenuList, Paper} from "@material-ui/core";
import items from "../source/chats";

const ChatList = (props) => {
    const {selectedItem, setSelectedItem} = {...props};

    return (
        <Paper>
            <MenuList>
                {items.map(item => (
                    <MenuItem
                        key={item.id}
                        selected={selectedItem === item.id}
                        onClick={() => setSelectedItem(item.id)}
                    >{item.name}</MenuItem>
                ))}
            </MenuList>
        </Paper>
    );
}

export default ChatList;
