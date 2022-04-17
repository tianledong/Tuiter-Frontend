import io from 'socket.io-client';
const BASE_URL = "https://neu-cs5500-tuiter.herokuapp.com";

const socket = io.connect(BASE_URL, {
    withCredentials: true,
    autoConnect: false
})
export default socket;
