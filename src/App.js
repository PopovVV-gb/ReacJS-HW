import { useState, useEffect } from 'react';
import './App.css';
import MessageList from './components/messageList/messageList';
import MessageInputForm from './components/messageInputForm/messageInputForm';
import ChatList from './components/chatList/chatList';
import {Paper, Grid, List } from '@material-ui/core/';
import faker from 'faker'
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const chatList = Array.from({
  length: 10}).map(() => (
    {
      id: faker.datatype.uuid(),
      avatar: faker.image.avatar(),
      name: faker.name.lastName(),}
  ))

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


function App(props) {
  const [messageList, setMessageList] = useState([]);
  const updateMessagelist = (author, text) => {
    setMessageList((prevList) => prevList.concat({author, text}))
  }

  useEffect(() => {
    if (messageList.length !== 0 && messageList[messageList.length-1].author === 'user1') {
      const timeoutID = setTimeout(
        () => updateMessagelist('autoreply', faker.lorem.words(20)),
        Math.random()*2000
      )
      return () => clearTimeout(timeoutID)
    }
  }, [messageList]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid className="grid-wrapper" container spacing = {3}>
          <Grid item xs={3}>
            <Paper>
              <List>
                <ChatList chatList={chatList}></ChatList>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper>            
              <MessageList messages={messageList} />
            </Paper>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>          
            <MessageInputForm addMessage={updateMessagelist} />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;