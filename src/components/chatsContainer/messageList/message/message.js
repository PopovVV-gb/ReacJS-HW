import './message.css';
import { useSelector } from "react-redux"
import { getProfile } from '../../../../store/profile/selectors'
import { LOCAL_USER_ID } from '../../../../App'

function Message(props) {
    const {name}  = useSelector(getProfile());
    let messageStyle, author;
    if (props.message.author === LOCAL_USER_ID) {
        messageStyle = 'message-author'
        author = name;
    } else {
        messageStyle = 'message-other';
        author = props.message.author
    }
    return (
        <div className = {messageStyle} >
            <div className= 'author'>
                <p>{author}</p>
            </div>
            <div className = 'text'>
                <p>{props.message.text}</p>
            </div>
        </div>
    )
}

export default Message;