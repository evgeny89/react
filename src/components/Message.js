import '../styles_components/message.css';
import {useCallback, useEffect, useRef, useState} from "react";

const Message = (props) => {
    const {save, login} = {...props};

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    const [message, setMessage] = useState('');
    const saveMessage = useCallback(() => {
        let currentMessage = message.trim();

        if (currentMessage) {
            const post = {
                login: login,
                message: currentMessage,
                date: Date.now()
            }

            save((prev) => {
                return [...prev, post];
            });
        }
        setMessage('');
    }, [message, login, save]);

    const saveOnEnter = (e) => {
        if (e.key === 'Enter') {
            saveMessage();
        }
    }

    return (
        <div className="message" onKeyPress={saveOnEnter}>
            <input value={message} className="message-input" onChange={e => setMessage(e.target.value)} ref={inputRef}/>
            <button className="message-btn" onClick={saveMessage}>отправить</button>
        </div>
    );
}

export default Message;