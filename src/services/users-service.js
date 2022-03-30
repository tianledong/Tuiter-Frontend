import axios from "axios";
const BASE_URL = "https://cs5500-assignment4-branch.herokuapp.com";
// const BASE_URL = "http://localhost:4000"
const USERS_API = `${BASE_URL}/api/users`;

const api = axios.create({
  withCredentials: true
});

export const createUser = (user) =>
  api.post(`${USERS_API}`, user)
    .then(response => response.data);

export const findAllUsers = () =>
    api.get(USERS_API)
        .then(response => response.data);

export const findUserById = (uid) =>
    api.get(`${USERS_API}/${uid}`)
        .then(response => response.data);

export const deleteUser = (uid) =>
    api.delete(`${USERS_API}/${uid}`)
    .then(response => response.data);

export const deleteUsersByUsername = (username) =>
    api.get(`${USERS_API}/username/${username}/delete`)
    .then(response => response.data);

const service = {
  findAllUsers
}

export default service;