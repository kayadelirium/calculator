const Message = props => {
    const { message } = props;
    const { isFromMe, text } = message;

    const messageClass = `message ${isFromMe ? "message-right" : "message-left"}`
    return (
        <div className={messageClass}>
            <div>
                {text}
            </div>
        </div>
    )
}

export default Message;