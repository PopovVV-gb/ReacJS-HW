import { useState, useRef, useEffect } from 'react';
import './messageInputForm.css';
import { TextField, Button, Icon, useTheme } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux"
import { createAddMessageAction } from "../../../store/messages/actions"
import { getProfile } from '../../../store/profile/selectors'

function MessageInputForm(props) {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
      }
    const username = useSelector(getProfile()).name;
    const dispatch = useDispatch();
    const submitMessage = () => {
        dispatch(createAddMessageAction({chatId: props.chatId, author: username, text: value}));
        setValue('');
    }
    const inputRef = useRef(null);
    useEffect(() => {
        if (value === '')
        inputRef.current?.focus();
      }, [value]);
    const theme = useTheme();
    const setLabel = () => {
        if (props.chatSelected) {
            return "Ваше сообщение:"
        } else {
            return "Сначала выберите чат!"
        }
    }
    return (
        <div className="messageInputForm">
            <TextField
                style={{width: '80%'}}
                label={setLabel()} 
                multiline  
                maxRows={20} 
                variant="outlined" 
                value={value} 
                onChange={handleChange}
                inputRef={inputRef}>
            </TextField>
            <Button
                style={{
                    maxHeight: '44px',
                    backgroundColor: theme.palette.secondary.main
                }}
                variant="contained"
                color="primary"
                endIcon={<Icon>send</Icon>}
                onClick={submitMessage}
                disabled={!props.chatSelected}
            >
            </Button>
        </div>
    )
}

export default MessageInputForm;