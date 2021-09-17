import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../main/main";
import { CatsList } from "../fatCats/fatCats";
import Profile from "../profile/profile";
import ChatsPage from "../chatsContainer/chatsContainer";
import AddChat from "../addChat/addChat";
import { SignUp } from "../signup/signup";
import { Login } from "../login/login";
import firebase from "firebase";
import { PrivateRoute } from "../../hocs/privateRoute";
import { PublicRoute } from "../../hocs/publicRoute";
import { LogOut } from "../logout/logout";
import { useDispatch } from "react-redux";
import { initMessageTracking } from "../../store/messages/actions";
import { initChatTracking } from "../../store/chats/actions";

export const Routes = () => {
    const [authed, setAuthed] = useState(false);
    useEffect(() => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    setAuthed(true);
                } else {
                    setAuthed(false);
                }
            })
        }, []);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initMessageTracking());
    }, [])
    useEffect(() => {
        dispatch(initChatTracking());
    }, [])

    return (
        <BrowserRouter>
            <ul className="linkList">
                <li className="linkItem">
                    <Link to="/cats">толстые котики</Link>
                </li>
                <li className="linkItem">
                    <Link to="/profile">профиль</Link>
                </li>
                <li className="linkItem">
                    <Link to="/chats">чаты</Link>
                </li>
                <li className="linkItem">
                    <Link to="/">главная</Link>
                </li>
                <li className="linkItem">
                    <Link to="/signup">регистрация</Link>
                </li>
                <li className="linkItem">
                    <Link to="/login">вход</Link>
                </li>
                <li className="linkItem">
                    <Link to="/logout">выход</Link>
                </li>
            </ul>
            <Switch>
                <Route path='/cats'>
                    <CatsList></CatsList>
                </Route>    
                <PrivateRoute  authenticated={authed} path='/profile'>
                    <Profile></Profile>
                </PrivateRoute>
                <PrivateRoute authenticated={authed} path='/chats/:chatId?'>
                    <ChatsPage></ChatsPage>
                </PrivateRoute>
                <PrivateRoute  authenticated={authed} path='/addchat'>
                    <AddChat></AddChat>
                </PrivateRoute>
                <PublicRoute authenticated={authed} exact path="/login">
                    <Login />
                </PublicRoute>
                <PublicRoute authenticated={authed}exact path="/signup">
                    <SignUp />
                </PublicRoute>
                <PrivateRoute  authenticated={authed} path='/logout'>
                    <LogOut></LogOut>
                </PrivateRoute>
                <PublicRoute authenticated={authed} path='/'>
                    <Main></Main>
                </PublicRoute>
            </Switch>
        </BrowserRouter>
    )
}