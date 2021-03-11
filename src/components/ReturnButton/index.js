const ReturnButton = props => {
    const { handleClick } = props;

    return (
        <div className="return-button" onClick={handleClick}>
            {"<"}
        </div>
    )
}

export default ReturnButton;