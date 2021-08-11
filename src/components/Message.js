import '../styles_components/message.css';

const Message = (props) => {
  return (
    <div className="message">
        { props.textToShow }
    </div>
  );
}

export default Message;