import { useState } from 'react';
import './messageInputForm.css';

function MessageInputForm(props) {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
      }
    const submitMessage = () => {
        props.addMessage('user1', value);
        setValue('');
    }
    return (
        <div className="messageInputForm">
            <input type="text" className="messageInput"
             value={value} onChange={handleChange}></input>
            <button type="button" className="submitButton"
             onClick={submitMessage}>Отправить</button>
        </div>
    )
}

export default MessageInputForm;