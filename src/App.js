import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Profile from "./components/profile/profile";
import ChatsPage from "./components/chatsPage/chatsPage"
import Main from './components/main/main';

function App(props) {
  
  return (
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
  );
}

export default App;