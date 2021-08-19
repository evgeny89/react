import React, {useEffect, useState} from "react";
import './app.css';

import Message from "./components/Message";
import Login from "./components/Login";
import MessageWrapper from "./components/MessageWrapper";
import {Grid} from "@material-ui/core";
import ChatList from "./components/ChatList";

import items from "./source/chats";

// const initialList = items.reduce((acc,item) => {
//     acc[item.id] = [];
//     return acc;
// }, {});

function App() {

    const [messages, setMessages] = useState(initialList);
    const [login, setLogin] = useState('');
    const [selectedItem, setSelectedItem] = useState(1);

    useEffect(() => {
        const getLastMessageAuthor = () => {
            if (messages[selectedItem].length > 0) {
                const lastIndex = messages[selectedItem].length - 1;
                return messages[selectedItem][lastIndex].login;
            }
            return 'Bot';
        }

        const lastMessageAuthor = getLastMessageAuthor();
        if (lastMessageAuthor !== 'Bot') {
            setTimeout(writeBot, 1000, lastMessageAuthor);
        }
    }, [messages]);

    const writeBot = (lastMessageAuthor) => {
        setMessages((prev) => {
            const message = {
                login: 'Bot',
                message: lastMessageAuthor + ', твое сообщение добавлено',
                date: Date.now()
            }
            prev[selectedItem] = [...prev[selectedItem], message]
            return prev;
        });
    }

    return (
        <div className="app">
            {login.length === 0
                ? <Login login={setLogin}/>
                : <>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <ChatList selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
                        </Grid>
                        <Grid  item xs={9}>
                            <MessageWrapper messages={messages} chat={selectedItem}/>
                            <Message login={login} save={setMessages} chat={selectedItem}/>
                        </Grid>
                    </Grid>
                </>
            }
        </div>
    );
}

export default App;
