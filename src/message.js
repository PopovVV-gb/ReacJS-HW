import './message.css';

function Message(props) {
    return (
        <div className='message'>
            {props.msgText}
        </div>
    )
}

export default Message;