import { useState, useRef, useEffect } from 'react';
import './messageInputForm.css';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { useTheme } from "@material-ui/core/styles";

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
    return (
        <div className="messageInputForm">
            <TextField
                style={{width: '80%'}}
                label="Ваше сообщение" 
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
            >
            </Button>
        </div>
    )
}

export default MessageInputForm;