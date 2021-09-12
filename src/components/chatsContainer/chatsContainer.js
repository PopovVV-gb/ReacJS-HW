import {createContext } from 'react';
import Chats from './chats/chats';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { createRemoveMessagesAction } from "../../store/messages/actions"
import { createRemoveChatAction} from '../../store/chats/actions'

export const ChatSelectedContext = createContext(false);

function ChatsPage(props) {
  const chatList = useSelector((state) => state.chats);
  const getChatByID = (id) => {
    for (let i = 0; i<chatList.length; i++) {
      if (chatList[i].id === Number(id)) return i
    }
  }
  const params = useParams();
  const chatIndex = getChatByID(params.chatId);
  let chatSelected = false;
  if (chatIndex !== undefined) {
    chatSelected = true;
  }
  const dispatch = useDispatch();

  const deleteChat = () => {
    if (window.confirm(`Вы действительно хотите удалить чат ${chatList[chatIndex].name}?`)) {
      dispatch(createRemoveChatAction(params.chatId))
      dispatch(createRemoveMessagesAction(params.chatId))
    }
  }

  return (
    <ChatSelectedContext.Provider value={chatSelected}>
      <Chats 
        chatId = {params.chatId}
        deleteChat = {deleteChat}
      >
      </Chats>
    </ChatSelectedContext.Provider>
  );
}

export default ChatsPage;