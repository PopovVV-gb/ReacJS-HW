import { ADD_MESSAGE, REMOVE_MESSAGES, SET_MESSAGES_BY_CHAT_ID } from './actions'

const initialState = {}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                author: action.payload.author, 
                text: action.payload.text
            }
            if (action.payload.chatId in state) {
                return {
                    ...state,
                    [action.payload.chatId]: state[action.payload.chatId].concat(newMessage)
                }
            } else return {
                ...state,
                [action.payload.chatId]: [newMessage]
            }
        case REMOVE_MESSAGES:
            const newMessages = {...state}
            delete newMessages[action.payload]
            return newMessages
        case SET_MESSAGES_BY_CHAT_ID:
            return { 
                ...state,
                [action.payload.chatId]: action.payload.messages
            }
        default:
            return state;
    }
}