import {Paper, Grid, List, Button } from '@material-ui/core/';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import './chats.css';
import { Link } from 'react-router-dom';
import MessageList from '../messageList/messageList';
import MessageInputFormContainer from '../messageInputFormContainer/messageInputFormContainer'
import ChatList from '../chatList/chatList';
import { ChatSelectedContext } from '../chatsContainer'
import { useContext } from 'react';

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

function Chats(props) {
  const chatSelected = useContext(ChatSelectedContext)
  return (
    <ThemeProvider theme={theme}>
      <div className="chats">
        <Grid className="grid-wrapper" container spacing = {3}>
          <Grid item xs={6}>
            <Button              
              variant="contained"
              color="secondary"    
              component = {Link}
              to = '/addchat'
            >
            Добавить новый чат
            </Button>
          </Grid> 
          <Grid item xs={6}>
          <Button              
              variant="contained"
              color="secondary"
              disabled={!chatSelected}
              onClick={props.deleteChat}
            >
            Удалить текущий чат
            </Button>
          </Grid> 
          <Grid item xs={3}>
            <Paper>
              <List>
                <ChatList ></ChatList>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper>            
              <MessageList chatId={props.chatId} />
            </Paper>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>          
            <MessageInputFormContainer chatId={props.chatId} />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default Chats;