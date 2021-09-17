import faker from 'faker'
import { messagesApi, messagesRef } from '../../api/messagesApi'

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const REMOVE_MESSAGES = 'REMOVE_MESSAGES'
export const SET_MESSAGES = 'SET_MESSAGES'
export const SET_MESSAGES_BY_CHAT_ID = 'SET_MESSAGES_BY_CHAT_ID'

export const createAddMessageAction = ({chatId, author, text}) => {
        return {
            type: ADD_MESSAGE,
            payload: {chatId, author, text}
        }
}

export const createRemoveMessagesAction = (chatId) => {
    return {
        type: REMOVE_MESSAGES,
        payload: chatId
    }
}

export const addMessageWithThunk = ({chatId, author, text, botName}) => (dispatch) => {
    dispatch(addMessageToFirebase(chatId, author, text))
    if (author !== botName) {
        const botMessage = faker.lorem.words(20);
        setTimeout(() => dispatch(addMessageToFirebase(chatId, botName, botMessage)), Math.random()*2000)
    }
}

export const addMessageToFirebase = (chatId, author, text) => async() => {
    try {
        await messagesApi.addMessage(chatId, author, text)
    }
    catch(e) {
        alert(`При отправке сообщения на сервер произошла ошибка ${e}`)
    }
}

const getPayload = (snapshot) => {
    const messages = [];
    snapshot.forEach((item) => {
        messages.push({
            id: item.key,
            ...item.val()
        })
    })
    return {chatId: snapshot.key, messages}
}

export const initMessageTracking = () => (dispatch) => {
    messagesRef.on("child_added", (snapshot) => {
        const payload = getPayload(snapshot);
        dispatch(createSetMessagesByChatId(payload))
    })
    messagesRef.on("child_changed", (snapshot) => {
        const payload = getPayload(snapshot);
        dispatch(createSetMessagesByChatId(payload))
    })
}
export const createSetMessagesByChatId = (payload) => {
    return {
        type: SET_MESSAGES_BY_CHAT_ID,
        payload
    }
}