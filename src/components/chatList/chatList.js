import Chat from '../chat/chat';

function ChatList(props) {
    return (
        props.chatList.map(
            (item, index) => 
            <Chat chat={item} key={index}></Chat>
        )
    )
}

export default ChatList;