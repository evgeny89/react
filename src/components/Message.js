import '../styles_components/message.css';
import {useCallback, useEffect, useRef, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {incrementCountMessages} from '../source/userSlice';
import {addMessages} from '../source/messageSlice';
import {TextField, Button} from "@material-ui/core";

const Message = () => {
    const login = useSelector(state => state.user.name);
    const dispatch = useDispatch();

    const [message, setMessage] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const saveMessage = useCallback(() => {
        let currentMessage = message.trim();

        if (currentMessage) {
            const post = {
                login: login,
                message: currentMessage,
                date: Date.now()
            }

            dispatch(addMessages(post));
            dispatch(incrementCountMessages());
        }
        setMessage('');
    }, [message, login, dispatch]);

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
