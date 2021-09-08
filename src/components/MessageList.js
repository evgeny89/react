import '../styles_components/message-list.css';
import {Card, CardContent} from "@material-ui/core";
import { useSelector } from 'react-redux';

const MessageList = () => {
    const messages = useSelector(state => state.messages.messages);
    const selectedCat = useSelector(state => state.messages.selectedChat)

    return messages[selectedCat]?.length ? messages[selectedCat].map(item => {
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
