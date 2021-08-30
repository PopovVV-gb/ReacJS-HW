import {Paper, Grid, List, Button } from '@material-ui/core/';
import { ThemeProvider } from "@material-ui/core/styles";
import './chats.css';
import MessageList from '../messageList/messageList';
import MessageInputForm from '../messageInputForm/messageInputForm'
import ChatList from '../chatList/chatList';

function Chats(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <div className="chats">
        <Grid className="grid-wrapper" container spacing = {3}>
          <Grid item xs={6}>
            <Button              
              variant="contained"
              color="secondary"              
              onClick={props.addChat}
            >
            Добавить новый чат
            </Button>
          </Grid> 
          <Grid item xs={6}>
          <Button              
              variant="contained"
              color="secondary"
              disabled={!props.chatSelected}
              onClick={props.deleteChat}
            >
            Удалить текущий чат
            </Button>
          </Grid> 
          <Grid item xs={3}>
            <Paper>
              <List>
                <ChatList chatList={props.chatList}></ChatList>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper>            
              <MessageList messages={props.messageList} />
            </Paper>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>          
            <MessageInputForm addMessage={props.updateMessagelist} chatSelected={props.chatSelected}/>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default Chats;