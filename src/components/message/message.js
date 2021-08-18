import './message.css';

function Message(props) {
    return (
        <div className='message'>
            <div className= 'author'>
                <p>Author:</p>
                <p>{props.message.author}</p>
            </div>
            <div className = 'text'>
            <p>Message:</p>
            <p>{props.message.text}</p>
            </div>
        </div>
    )
}

export default Message;