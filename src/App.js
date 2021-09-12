import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import Profile from "./components/profile/profile";
import ChatsPage from "./components/chatsContainer/chatsContainer"
import Main from './components/main/main';
import store from './store';
import { persistor } from './store';
import AddChat from './components/addChat/addChat';
import { PersistGate } from 'redux-persist/integration/react';
import { CircularProgress } from '@material-ui/core';

function App(props) {
  
  return (
    <Provider store = {store}>
        <PersistGate persistor={persistor} loading={<CircularProgress />}>
            <BrowserRouter>
                <ul className="linkList">
                    <li className="linkItem">
                        <Link to="/profile">profile</Link>
                    </li>
                    <li className="linkItem">
                        <Link to="/chats">chats</Link>
                    </li>
                    <li className="linkItem">
                        <Link to="/">home</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path='/profile'>
                        <Profile></Profile>
                    </Route>
                    <Route path='/chats/:chatId?'>
                        <ChatsPage></ChatsPage>
                    </Route>
                    <Route path='/addchat'>
                        <AddChat></AddChat>
                    </Route>
                    <Route path='/'>
                        <Main></Main>
                    </Route>
                </Switch>
            </BrowserRouter>
        </PersistGate>
    </Provider> 
  );
}

export const LOCAL_USER_ID = 0

export default App;