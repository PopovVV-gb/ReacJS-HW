import { useState, useRef, useEffect } from 'react';
import './messageInputForm.css';
import { TextField, Button, Icon, useTheme } from '@material-ui/core';

function MessageInputForm(props) {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
      }
    const submitMessage = () => {
        props.addMessage('user1', value);
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