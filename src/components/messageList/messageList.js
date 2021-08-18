import Message from '../message/message'

function MessageList(props) {
    return (
        props.messages.map(
            (message) =>
            <Message message={message}/>
        )
    )
}

export default MessageList;