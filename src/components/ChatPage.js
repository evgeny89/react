import {Grid} from "@material-ui/core";
import ChatList from "./ChatList";
import MessageWrapper from "./MessageWrapper";
import Message from "./Message";
import React from "react";
import '../styles_components/chats.css';

const ChatPage = (props) => {
    const {selectedChat, setSelectedChat, messages, setMessages} = {...props};

    return (<div className="chats">
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <ChatList selectedItem={selectedChat} setSelectedItem={setSelectedChat}/>
            </Grid>
            <Grid  item xs={9}>
                <MessageWrapper messages={messages} chat={selectedChat}/>
                <Message save={setMessages} chat={selectedChat}/>
            </Grid>
        </Grid>
    </div>);
}

export default ChatPage;
