import { useSelector } from 'react-redux';
import { getMessages } from '../../../store/messages/selectors';
import Message from './message/message'

function MessageList(props) {
    const messages = useSelector(getMessages(props.chatId))
    return (
        messages.map(
            (message, index) =>
            <Message key={index} message={message}/>
        )
    )
}

export default MessageList;