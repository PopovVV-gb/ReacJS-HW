export const ADD_CHAT = "ADD_CHAT"
export const REMOVE_CHAT = "REMOVE_CHAT"
export const GET_CHAT = "GET_CHAT"

export const createAddChatAction = ({name, avatar}) => {
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