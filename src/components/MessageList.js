import '../styles_components/message-list.css';
import {Card, CardContent} from "@material-ui/core";
import { useSelector } from 'react-redux';
import {getDatabase, ref, query, limitToLast, onValue} from "firebase/database";
import {useEffect} from "react";

const MessageList = ({increment}) => {
    const db = getDatabase();
    const selectedCat = useSelector(state => state.messages.selectedChat)
    let messages = [];

    useEffect(() => {
        if (messages.length) {
            increment(messages[0].date);
        }
    }, [messages, increment])
    const recentPostsRef = query(ref(db, 'messages/' + selectedCat), limitToLast(20));
    onValue(recentPostsRef, (snapshot) => {
        messages = Object.values(snapshot.val());
    });

    return messages?.length ? messages.map(item => {
        const messageDate = (new Date(item.date)).toLocaleTimeString();
        return <Card key={item.date} className="message-item">
            <CardContent>
                <span className="message-item-login">{item.login} </span>
                <span className="message-item-date">[{messageDate}]:</span>
                <span className="message-item-text"> {item.message}</span>
            </CardContent>
        </Card>
    }) : <><p>в этом чате пока нет сообщений</p></>;
}

export default MessageList;
