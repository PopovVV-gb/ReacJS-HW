import { useState, useRef, useEffect, useContext } from 'react';
import './messageInputForm.css';
import { TextField, Button, Icon, useTheme } from '@material-ui/core';
import { ChatSelectedContext } from '../../chatsContainer'

export const messageInputFormTestIds = {
    submit: 'messageInputForm-submit',
    textField: 'messageInputForm-textField'
}

function MessageInputForm(props) {
    const chatSelected = props.chatSelected
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
      }
    const submitMessage = () => {
        props.submitMessage(value);
        setValue('');
    }
    const inputRef = useRef(null);
    useEffect(() => {
        if (value === '')
        inputRef.current?.focus();
      }, [value]);
    const theme = useTheme();
    const setLabel = () => {
        if (chatSelected) {
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
                inputRef={inputRef}
                inputProps={{"data-testid":messageInputFormTestIds.textField}}              
                >
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
                disabled={!chatSelected}                
                data-testid={messageInputFormTestIds.submit}
            >
            </Button>
        </div>
    )
}

export default MessageInputForm;