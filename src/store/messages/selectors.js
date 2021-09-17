export const getMessagesByChatId = (chatId) => (state) => {
    if (chatId in state.messages) {
        return state.messages[chatId];
    }
    else {
        return []
    }
}