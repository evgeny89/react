import "../styles_components/message-wrapper.css";

import MessageList from "./MessageList";
import {useEffect, useRef} from "react";

const MessageWrapper = (props) => {
    const scrollRef = useRef(null);

    const scrollToBottom = () => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"})
    }

    useEffect(scrollToBottom, [props.messages])
    return (
        <div className="message-wrapper">
            <MessageList messages={props.messages} chat={props.chat}/>
            <div ref={scrollRef}/>
        </div>
    );
}

export default MessageWrapper;
