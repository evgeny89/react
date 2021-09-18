import '../styles_components/message.css';
import {useEffect, useRef, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {incrementCountMessages} from '../source/userSlice';
import {TextField, Button} from "@material-ui/core";
import { getDatabase, ref, push, set } from "firebase/database";

const Message = () => {
    const login = useSelector(state => state.user.name);
    const {selectedChat} = useSelector(state => state.messages);
    const dispatch = useDispatch();
    const db = getDatabase();
    const chatRef = ref(db, 'messages/' + selectedChat);
    const newPostRef = push(chatRef);


    const [message, setMessage] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const saveMessage = () => {
        let currentMessage = message.trim();

        if (currentMessage) {
            const post = {
                login: login,
                message: currentMessage,
                date: Date.now()
            }
            set(newPostRef, post);
            dispatch(incrementCountMessages());
        }
        setMessage('');
    };

    const saveOnEnter = (e) => {
        if (e.key === 'Enter') {
            saveMessage();
        }
    }

    return (
        <div className="message" onKeyPress={saveOnEnter}>
            <TextField
                id="standard-basic"
                label="Сообщение"
                className="message-input"
                value={message}
                onChange={e => setMessage(e.target.value)}
                ref={inputRef}
                autoFocus
            />
            <Button className="message-btn" onClick={saveMessage} variant="contained" color="primary">отправить</Button>
        </div>
    );
}

export default Message;
