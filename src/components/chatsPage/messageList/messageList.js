import Message from './message/message'

function MessageList(props) {
    return (
        props.messages.map(
            (message, index) =>
            <Message key={index} message={message}/>
        )
    )
}

export default MessageList;