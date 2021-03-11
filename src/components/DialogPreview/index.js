const DialogPreview = (props) => {
    const { dialog, handleDialogClick } = props;
    const { from, messages } = dialog;

    return (
        <div className="dialog" onClick={handleDialogClick}>
            <div className="dialog-from">{from}</div>
            <div className="dialog-last-message">{messages[messages.length - 1].text}</div>
        </div>
    )
}

export default DialogPreview;