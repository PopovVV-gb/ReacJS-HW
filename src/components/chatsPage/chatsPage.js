import {useEffect } from 'react';
import faker from 'faker'
import { createTheme } from "@material-ui/core/styles";
import Chats from './chats/chats';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { createAddMessageAction, createRemoveMessagesAction } from "../../store/messages/actions"
import { getMessages } from '../../store/messages/selectors';
import { createRemoveChatAction} from '../../store/chats/actions'
import { getProfile } from '../../store/profile/selectors'

const theme = createTheme({
  palette: {
    primary: {
      main: "#0084FF",
    },
    secondary: {
      main: "#FF5100",
    },
  },
});

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
  const messageList = useSelector(getMessages(params.chatId))
  const dispatch = useDispatch();

  const username = useSelector(getProfile()).name;
  useEffect(() => {
    if (messageList.length !== 0 && messageList[messageList.length-1].author === username) {
      const timeoutID = setTimeout(
        () => dispatch(createAddMessageAction({
          chatId: params.chatId, 
          author: chatList[chatIndex].name, 
          text: faker.lorem.words(20)
        })),
        Math.random()*2000
      )
      return () => clearTimeout(timeoutID)
    }
  }, [messageList]);

  const deleteChat = () => {
    if (window.confirm(`Вы действительно хотите удалить чат ${chatList[chatIndex].name}?`)) {
      dispatch(createRemoveChatAction(params.chatId))
      dispatch(createRemoveMessagesAction(params.chatId))
    }
  }

  return (
    <Chats 
      theme={theme}
      chatId = {params.chatId}
      chatSelected = {chatSelected}
      deleteChat = {deleteChat}
    >
    </Chats>
  );
}

export default ChatsPage;