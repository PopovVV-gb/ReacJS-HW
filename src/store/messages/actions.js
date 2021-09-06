export const ADD_MESSAGE = 'ADD_MESSAGE'
export const REMOVE_MESSAGES = 'REMOVE_MESSAGES'

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