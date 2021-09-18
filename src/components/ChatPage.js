import {Grid} from "@material-ui/core";
import ChatList from "./ChatList";
import MessageWrapper from "./MessageWrapper";
import Message from "./Message";
import React from "react";
import '../styles_components/chats.css';

const ChatPage = () => {
    return (<div className="chats">
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <ChatList />
            </Grid>
            <Grid  item xs={9}>
                <MessageWrapper />
                <Message />
            </Grid>
        </Grid>
    </div>);
}

export default ChatPage;
