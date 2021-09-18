import "../styles_components/message-wrapper.css";

import MessageList from "./MessageList";
import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";

const MessageWrapper = () => {
    const selectedChat = useSelector(state => state.messages.selectedChat)
    const [countMessage, setCountMessage] = useState(0);
    const scrollRef = useRef(null);

    const scrollToBottom = () => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"})
    }

    useEffect(scrollToBottom, [countMessage, selectedChat])
    return (
        <div className="message-wrapper">
            <MessageList increment={setCountMessage}/>
            <div ref={scrollRef}/>
        </div>
    );
}

export default MessageWrapper;
