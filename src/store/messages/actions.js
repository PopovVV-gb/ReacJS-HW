import faker from 'faker'

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

export const addMessageWithThunk = ({chatId, author, text, botName}) => (dispatch) => {
    dispatch(createAddMessageAction({chatId, author, text}));
    if (author !== botName) {
        const botMessage = faker.lorem.words(20);
        setTimeout(() => dispatch(createAddMessageAction({chatId, author: botName,text: botMessage})), Math.random()*2000);
    }
}