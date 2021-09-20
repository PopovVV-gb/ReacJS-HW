import { useSelector } from "react-redux"
import { addMessageWithThunk } from "../../../store/messages/actions"
import { getChatById } from '../../../store/chats/selectors'
import { useCallback } from "react"
import MessageInputForm from './messageInputForm/messageInputForm';
import { LOCAL_USER_ID } from '../../../App'
import { useDispatch } from "react-redux";

function MessageInputFormContainer(props) {
    const userName = LOCAL_USER_ID;
    const dispatch = useDispatch()
    const botName = useSelector(getChatById(props.chatId))[0].name;
    const submitMessage = useCallback((text) => {
        dispatch(addMessageWithThunk({
            chatId: props.chatId, 
            author: userName, 
            text,
            botName,
        }));
        }, [props.chatId, dispatch]);
    return (
        <MessageInputForm
            submitMessage = {submitMessage}
            chatSelected = {props.chatSelected}      
        >
        </MessageInputForm>
    )
}

export default MessageInputFormContainer