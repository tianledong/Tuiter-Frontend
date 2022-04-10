import React from "react";
import './styles.css';
import Tuiter from "./components/tuiter";
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4000')
function App() {
  return (
    <Tuiter/>
  );
}

export default App;
