import { ADD_MESSAGE, REMOVE_MESSAGES } from './actions'

const initialState = []

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state].concat(action.payload)
        case REMOVE_MESSAGES:
            return [...state].filter(item => item.chatId !== action.payload)
        default:
            return state;
    }
}