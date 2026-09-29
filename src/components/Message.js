function Message(props) {
    return (
        <div className="message">
            <p>💡 "{props.text}"</p>
            <span>— {props.name}</span>
        </div>
    );
}

export default Message;