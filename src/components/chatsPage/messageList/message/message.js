import './message.css';
import { useSelector } from "react-redux"
import { getProfile } from '../../../../store/profile/selectors'

function Message(props) {
    const { name } = useSelector(getProfile());
    let messageStyle;
    if (props.message.author === name) {
        messageStyle = 'message-author'
    } else {
        messageStyle = 'message-other'
    }
    return (
        <div className = {messageStyle} >
            <div className= 'author'>
                <p>{props.message.author}</p>
            </div>
            <div className = 'text'>
                <p>{props.message.text}</p>
            </div>
        </div>
    )
}

export default Message;