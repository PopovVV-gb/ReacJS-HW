import { chatsRef, chatsApi } from "../../api/chatsApi"

export const ADD_CHAT = "ADD_CHAT"
export const REMOVE_CHAT = "REMOVE_CHAT"
export const GET_CHAT = "GET_CHAT"
export const SET_CHATS = "SET_CHATS"

export const createAddChatAction = ({name, avatar, id}) => (dispatch) => {
    dispatch(createAddChatToFirebaseAction({name, avatar, id}));
    return {
        type: ADD_CHAT,
        payload: {name, avatar}
    }
}

export const createRemoveChatAction = (chatId) => {
    return {
        type: REMOVE_CHAT,
        payload: chatId,
    }
}

export const createGetChatAction = (chatId) => {
    return {
        type: GET_CHAT,
        payload: chatId,
    }
}

export const createAddChatToFirebaseAction = ({name, avatar, id}) => async() => {
    try {
        chatsApi.addChat(name, avatar, id)
    }
    catch(e) {
        alert(`При создании нового чата на сервере произошла ошибка ${e}`)
    }
}

export const initChatTracking = () => (dispatch) => {
    chatsRef.on("child_added", (snapshot) => {
        const payload = snapshot.val();
        dispatch(createSetChatsAction(payload))
    })
    chatsRef.on("child_changed", (snapshot) => {
        const payload = snapshot.val();
        dispatch(createSetChatsAction(payload))
    })
}

export const createSetChatsAction = (payload) => {
    return {
        type: SET_CHATS,
        payload
    }
}