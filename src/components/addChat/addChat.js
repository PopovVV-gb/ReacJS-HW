import { TextField, Button, Grid } from '@material-ui/core';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { createAddChatAction } from "../../store/chats/actions"
import ChatList from '../chatsContainer/chatList/chatList'
import faker from 'faker'
import './addChat.css'
import { getMaxChatId } from '../../store/chats/selectors';

export const addChatTestIds = {
    add: 'addChat-add',
    textField: 'addChat-textField'
}

function AddChat(props) {
    const dispatch = useDispatch();
    const [value, setValue] = useState('')
    const handleChange = (event) => {
        setValue(event.target.value)
    }    
    const newChatId = useSelector(getMaxChatId())+1;
    const addNewChat = () => {
        dispatch(createAddChatAction({name:value, avatar: faker.image.avatar(), id: newChatId}));
        alert(`Добавлен новый чат ${value} с ID ${newChatId}`)
        setValue('');
    }
    const inputRef = useRef(null);
    useEffect(() => {
        if (value === '')
        inputRef.current?.focus();
      }, [value]);
    return (
        <div className="wrapper">
            <Grid container spacing = {3}>
                <Grid className="cell" item xs={12}>
                    <h1>Добавление нового чата</h1>
                </Grid>
                <Grid className="cell" item xs={9}>
                    <TextField
                        style={{width: '60%'}}
                        label="Введите название нового чата"
                        variant="outlined" 
                        onChange = {handleChange}
                        value={value}
                        inputRef={inputRef}
                        inputProps = {{"data-testid":addChatTestIds.textField}}
                    >
                    </TextField>
                </Grid>
                <Grid className="cell" item xs={3}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick = {addNewChat}
                        disabled = {value === ''}
                        data-testid = {addChatTestIds.add}
                    >
                    Создать чат
                    </Button>
                </Grid>
            </Grid>
            <ChatList />
        </div>
    )
}

export default AddChat