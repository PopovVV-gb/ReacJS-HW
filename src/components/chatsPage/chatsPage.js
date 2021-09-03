import { useState, useEffect } from 'react';
import faker from 'faker'
import { createTheme } from "@material-ui/core/styles";
import Chats from './chats/chats';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

const generateChat = () => {
  return {
    id: Math.round(Math.random()*1000),
    avatar: faker.image.avatar(),
    name: faker.name.lastName(),
    messages: [],
  }
}

const generatedChatList = Array.from({length: 10}).map(() => (generateChat()));

function ChatsPage(props) {
  const [chatList, setChatList] = useState(generatedChatList);
  const getChatByID = (id) => {
    for (let i = 0; i<chatList.length; i++) {
      if (chatList[i].id === Number(id)) return i
    }
  }
  const params = useParams();
  const chatIndex = getChatByID(params.chatId);
  let messages = [];
  let chatSelected = false;
  if (chatIndex !== undefined) {
    messages = chatList[chatIndex].messages;
    chatSelected = true;
  }
  const [messageList, setMessageList] = useState(messages);
  const updateMessagelist = (author, text) => {
    setMessageList((prevMessageList) => prevMessageList.concat({author, text}));
    let updatedChatList = chatList;
    updatedChatList[chatIndex].messages.push({author, text})
    setChatList(updatedChatList)
  }

  const deleteChat = () => {
    if (window.confirm(`Вы действительно хотите удалить чат ${chatList[chatIndex].name}?`)) {
      setChatList(chatList.filter((item, index) => {return index !== chatIndex}))
    }
  }

  const addChat = () => {
    setChatList((prevChatList) => prevChatList.concat(generateChat())
    )
  }

  const username = useSelector((state) => state.profile.name);
  useEffect(() => {
    if (messageList.length !== 0 && messageList[messageList.length-1].author === username) {
      const timeoutID = setTimeout(
        () => updateMessagelist(chatList[chatIndex].name, faker.lorem.words(20)),
        Math.random()*2000
      )
      return () => clearTimeout(timeoutID)
    }
  }, [messageList]);

  useEffect(() => {
    if (chatIndex !== undefined) {      
      setMessageList(chatList[chatIndex].messages)
    } else setMessageList([])
  }, [chatIndex])

  return (
    <Chats 
      theme={theme}
      chatList={chatList}
      messageList={messageList}
      updateMessagelist={updateMessagelist}
      chatSelected = {chatSelected}
      deleteChat = {deleteChat}
      addChat = {addChat}
    >
    </Chats>
  );
}

export default ChatsPage;