export const getMessages = (chatId) => (state) => {
    return state.messages.filter((item) => (item.chatId === chatId))
}