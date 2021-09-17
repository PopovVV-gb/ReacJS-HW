import { db } from "../services/firebase";

export const messagesRef = db.ref("messages");

export const messagesApi = {
    addMessage: async (chatId, author, text) => {
        await messagesRef.child(chatId).push({author, text})
    }
}