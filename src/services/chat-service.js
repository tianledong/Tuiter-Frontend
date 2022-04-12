import axios from "axios";

const BASE_URL = "http://localhost:4000"

const api = axios.create({
    withCredentials: true
});

/**
 * Records a user chats a user
 * @param uid user id
 * @param uid1 another user id
 * @return {Promise<AxiosResponse<any>>} a new chat object
 */
export const userChatsUser = (uid, uid1, message) =>
    api.post(`${BASE_URL}/users/${uid}/chats/${uid1}`, message)
        .then(chat => chat.data);

/**
 * Retrieval chat history between two users
 * @param uid user id
 * @param uid1 another user id
 * @return {Promise<AxiosResponse<any>>} chat objects
 */
export const findChatForUsers = (uid, uid1) =>
    api.get(`${BASE_URL}/users/${uid}/chats/${uid1}`)
        .then(chat => chat.data);
