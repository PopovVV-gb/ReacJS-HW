import './message.css';

function Message(props) {
    let messageStyle;
    if (props.message.author === 'user1') {
        messageStyle = 'message-author'
    } else {
        messageStyle = 'message-other'
    }
    return (
        <div className = {messageStyle} >
            <div className= 'author'>
                <p>{props.message.author}</p>
            </div>
            <div className = 'text'>
                <p>{props.message.text}</p>
            </div>
        </div>
    )
}

export default Message;