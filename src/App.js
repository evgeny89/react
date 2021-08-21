import React, {useEffect, useState} from "react";
import './app.css';

import Message from "./components/Message";
import Login from "./components/Login";
import MessageWrapper from "./components/MessageWrapper";

function App() {

    const [messages, setMessages] = useState([]);
    const [login, setLogin] = useState('');

    useEffect(() => {
        const getLastMessageAuthor = () => {
            if (messages.length > 0) {
                const lastIndex = messages.length - 1;
                return messages[lastIndex].login;
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
            return [...prev, message];
        });
    }

    return (
        <div className="app">
            {login.length === 0
                ? <Login login={setLogin}/>
                : <>
                    <MessageWrapper messages={messages}/>
                    <Message login={login} save={setMessages}/>
                </>
            }
        </div>
    );
}

export default App;
