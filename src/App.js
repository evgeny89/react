import React, {useEffect, useState} from "react";
import {Provider} from "react-redux";
import store from './source/store';
import './app.css';

import Rute from "./components/Rute";

import items from "./source/chats";

const initialList = items.reduce((acc, item) => {
    acc[item.id] = [];
    return acc;
}, {});

function App() {

    const [messages, setMessages] = useState(initialList);
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
            <Provider store={store}>
                <Rute selectedChat={selectedChat}
                      setSelectedChat={setSelectedChat}
                      messages={messages}
                      setMessages={setMessages}
                />
            </Provider>
        </div>
    );
}

export default App;
