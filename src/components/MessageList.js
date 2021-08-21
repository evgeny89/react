import '../styles_components/message-list.css';

const MessageList = (props) => {
    return props.messages.map(item => {
        const messageDate = (new Date(item.date)).toLocaleTimeString();
        return <div key={item.date} className="message-item">
            <span className="message-item-login">{item.login} </span>
            <span className="message-item-date">[{messageDate}]:</span>
            <span className="message-item-text"> {item.message}</span>
        </div>
    });
}

export default MessageList;
