import { useState, useEffect } from 'react';
import './App.css';
import MessageList from './components/messageList/messageList';
import MessageInputForm from './components/messageInputForm/messageInputForm'

function App(props) {
  const [messageList, setMessageList] = useState([]);
  const updateMessagelist = (author, text) => {
    setMessageList((prevList) => prevList.concat({author, text}))
  }

  useEffect(() => {
      if (messageList.length !== 0 && messageList[messageList.length-1].author === 'user1') {
        const timeoutID = setTimeout(
          () => updateMessagelist('autoreply', 'This is automatic reply'),
          Math.random()*2000
        )
        return () => clearTimeout(timeoutID)
      }
  }, [messageList]);

  return (
    <div className="App">
      <MessageList messages={messageList} />
      <MessageInputForm addMessage={updateMessagelist} />
    </div>
  );
}

export default App;