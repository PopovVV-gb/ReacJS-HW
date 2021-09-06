import { ADD_CHAT, REMOVE_CHAT, GET_CHAT} from './actions'
import faker from 'faker'

const generateChat = () => {
    return {
      id: Math.round(Math.random()*1000),
      avatar: faker.image.avatar(),
      name: faker.name.lastName(),
    }
  }
  
const generatedChatList = Array.from({length: 10}).map(() => (generateChat()));

const initialState = generatedChatList

export const chatsReducer = (state = initialState, action) => {
    const getMaxChatId = () => {
        let Ids = [...state].map((item) => {return item.id});
        return (Math.max.apply(null, Ids));
    }
    switch (action.type) {
        case ADD_CHAT:
            return [...state].concat({
                id: getMaxChatId()+1, 
                avatar: action.payload.avatar, 
                name: action.payload.name
            })
        case REMOVE_CHAT:
            return [...state].filter((item) => (item.id !== Number(action.payload)))
        case GET_CHAT:
            return state
        default:
            return state;
    }
}