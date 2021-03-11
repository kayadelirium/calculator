import Message from "../Message";
import ReturnButton from "../ReturnButton";

const Dialog = (props) => {
    const { dialog, handleReturnBack } = props;
    const { from, messages } = dialog;

    return (
        <div className="choosed-dialog">
            <div className="dialog-header">
                <ReturnButton handleClick={handleReturnBack} />
                <div className="dialog-from">{from}</div>
            </div>
            <div className="messages">
                {messages.map((message, index) => (
                    <Message message={message} key={message.text + index} />
                ))}
            </div>
        </div>
    )
}

export default Dialog;