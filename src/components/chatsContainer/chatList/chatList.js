import Chat from './chat/chat';
import { useSelector } from 'react-redux';

function ChatList(props) {
    const chatList = useSelector((state) => state.chats)
    return (
        chatList.map(
            (item, index) => 
            <Chat chat={item} key={index}></Chat>
        )
    )
}

export default ChatList;