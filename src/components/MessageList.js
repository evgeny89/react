import '../styles_components/message-list.css';
import {Card, CardContent} from "@material-ui/core";

const MessageList = (props) => {
    return props.messages[props.chat].map(item => {
        const messageDate = (new Date(item.date)).toLocaleTimeString();
        return <Card key={item.date} className="message-item">
            <CardContent>
                <span className="message-item-login">{item.login} </span>
                <span className="message-item-date">[{messageDate}]:</span>
                <span className="message-item-text"> {item.message}</span>
            </CardContent>
        </Card>
    });
}

export default MessageList;
