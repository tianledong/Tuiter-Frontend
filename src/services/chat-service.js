import axios from "axios";

//const BASE_URL = "http://localhost:4000"
const BASE_URL = "https://neu-cs5500-tuiter.herokuapp.com";

const api = axios.create({
    withCredentials: true
});

/**
 * Records a user chats a user
 * @param uid user id
 * @param uid1 another user id
 * @param message chat message
 * @return {Promise<AxiosResponse<any>>} a new chat object
 */
export const userChatsUser = (uid, uid1, message) =>
    api.post(`${BASE_URL}/api/users/${uid}/chats/${uid1}`, message)
        .then(chat => chat.data);

/**
 * Retrieval chat history between two users
 * @param uid user id
 * @param uid1 another user id
 * @return {Promise<AxiosResponse<any>>} chat objects
 */
export const findChatForUsers = (uid, uid1) =>
    api.get(`${BASE_URL}/api/users/${uid}/chats/${uid1}`)
        .then(chat => chat.data);

/**
 * Retrieval the number of unread chat for user
 * @param uid user id
 * @return {Promise<AxiosResponse<any>>} unread chat number
 */
export const countTotalUnreadMessage = (uid) =>
    api.get(`${BASE_URL}/api/chats/users/${uid}/unread`)
        .then(chat => chat.data);

/**
 * Retrieval the number of unread chat for user
 * @param uid user id
 * @param uid1 another user id
 * @return {Promise<AxiosResponse<any>>} unread chat number
 */
export const countTotalUnreadMessageForUsers = (uid, uid1) =>
    api.get(`${BASE_URL}/api/users/${uid}/chats/${uid1}/unread`)
        .then(chat => chat.data);

/**
 * Update user read chat messages
 * @param uid user id
 * @param uid1 another user id
 * @return {Promise<AxiosResponse<any>>} unread chat number
 */
export const updateRead = (uid, uid1) =>
    api.put(`${BASE_URL}/api/users/${uid}/chats/${uid1}`)
        .then(chat => chat.data);

