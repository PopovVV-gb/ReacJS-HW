import { db } from "../services/firebase";

export const chatsRef = db.ref("chats");

export const chatsApi = {
    addChat: async (name, avatar, id) => {
        await chatsRef.push({id, name, avatar})
    }
}