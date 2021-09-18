import "../styles_components/message-wrapper.css";

import MessageList from "./MessageList";
import {useEffect, useRef} from "react";
import {useSelector} from "react-redux";

const MessageWrapper = () => {
    const messages = useSelector(state => state.messages.messages)
    const selectedChat = useSelector(state => state.messages.selectedChat)
    const scrollRef = useRef(null);

    const scrollToBottom = () => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"})
    }

    useEffect(scrollToBottom, [messages, selectedChat])
    return (
        <div className="message-wrapper">
            <MessageList />
            <div ref={scrollRef}/>
        </div>
    );
}

export default MessageWrapper;
