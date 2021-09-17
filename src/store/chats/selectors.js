export const getChatById = (chatId) => (state)=> {
    let res = state.chats.filter((item) => (item.id === Number(chatId)));
    if (res.length === 0) res = [{id: false, name: false}];
    return res
}

export const getChatByName = (name) => (state)=> {
    let res = state.chats.filter((item) => (item.name === name));
    if (res.length === 0) res = [{id: false, name: false}];
    return res
}

export const getMaxChatId = () => (state) => {
    let Ids = [...state.chats].map((item) => {return item.id});
    return (Math.max.apply(null, Ids));
}