import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import Profile from "./components/profile/profile";
import ChatsPage from "./components/chatsPage/chatsPage"
import Main from './components/main/main';
import store from './store';

function App(props) {
  
  return (
    <Provider store = {store}>
      <BrowserRouter>
    <ul>
        <li>
            <Link to="/profile">profile</Link>
        </li>
        <li>
            <Link to="/chats">chats</Link>
        </li>
        <li>
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
        <Route path='/'>
            <Main></Main>
        </Route>
    </Switch>
</BrowserRouter>
    </Provider> 
  );
}

export default App;