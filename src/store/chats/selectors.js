export const getChatById = (chatId) => (state)=> {
    return state.chats.filter((item) => (item.id === chatId))
}

export const getChatByName = (name) => (state)=> {
    return state.chats.filter((item) => (item.name === name))
}