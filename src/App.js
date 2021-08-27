import React, {useEffect, useState} from "react";
import './app.css';

import Message from "./components/Message";
import Login from "./components/Login";
import MessageWrapper from "./components/MessageWrapper";
import {Grid} from "@material-ui/core";
import ChatList from "./components/ChatList";

import items from "./source/chats";

const initialList = items.reduce((acc,item) => {
    acc[item.id] = [];
    return acc;
}, {});

function App() {

    const [messages, setMessages] = useState(initialList);
    const [login, setLogin] = useState('');
    const [selectedChat, setSelectedChat] = useState(1);

    useEffect(() => {
        const writeBot = (lastMessageAuthor) => {
            const message = {
                login: 'Bot',
                message: lastMessageAuthor + ', твое сообщение добавлено',
                date: Date.now()
            }

            setMessages((prev) => ({
                ...prev,
                [selectedChat]: [...prev[selectedChat], message]
            }));
        }
        
        const getLastMessageAuthor = () => {
            if (messages[selectedChat].length > 0) {
                const lastIndex = messages[selectedChat].length - 1;
                return messages[selectedChat][lastIndex].login;
            }
            return 'Bot';
        }

        const lastMessageAuthor = getLastMessageAuthor();
        if (lastMessageAuthor !== 'Bot') {
            setTimeout(writeBot, 1000, lastMessageAuthor);
        }
    }, [messages, selectedChat, setMessages]);

    return (
        <div className="app">
            {login.length === 0
                ? <Login login={setLogin}/>
                : <>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <ChatList selectedItem={selectedChat} setSelectedItem={setSelectedChat}/>
                        </Grid>
                        <Grid  item xs={9}>
                            <MessageWrapper messages={messages} chat={selectedChat}/>
                            <Message login={login} save={setMessages} chat={selectedChat}/>
                        </Grid>
                    </Grid>
                </>
            }
        </div>
    );
}

export default App;
