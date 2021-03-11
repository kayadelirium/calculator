const Popup = props => {
    const { text, handleClick } = props;

    return (
        <div onClick={handleClick} className="popup">
            {text}
        </div>
    )
}

export default Popup;