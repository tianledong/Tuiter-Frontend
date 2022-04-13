import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {findUserById} from "../../services/users-service";
import {useParams} from 'react-router-dom';
import ChatBubble from "./ChatBubble";
import {ListSubheader, TextField} from "@mui/material";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import socket from "../../Socket";
import {findChatForUsers, userChatsUser} from "../../services/chat-service";

const useStyles = makeStyles({
    messageArea: {
        height: '74vh',
        overflowY: 'auto',
        paddingTop: 0,
        marginTop: 2

    }, listItemText: {
        marginLeft: '6px'
    }, typingArea: {
        paddingTop: '5px',
        padding: '29px'
    }
});


const ChatWindow = (prop) => {
    const classes = useStyles();
    const [chatUser, setChatUser] = useState(null);
    const [chatList, setChatList] = useState(null);
    const [chatMessage, setChatMessage] = useState('');
    const {uid} = useParams();

    const sendChat = async () => {
        const newChat = await userChatsUser('me', uid, {message: chatMessage});
        socket.emit("private message", {
            message: chatMessage,
            to: uid,
        });
        setChatList([newChat, ...chatList])
        setChatMessage('');
    }

    const initChat = async () => {
        const user = await findUserById(uid);
        setChatUser(user);
        const chat = await findChatForUsers('me', uid);
        setChatList(chat.reverse());
    }

    const reload = async () => {
        let chat = await findChatForUsers('me', uid);
        let chatReverse = chat.reverse();
        setChatList(chatReverse)
    }

    useEffect(initChat, [uid]);
    useEffect(async () => {
        socket.on("receive_message", (({from}) => {
            reload();
        }));
    }, [socket]);


    return (
        <Grid item xs={9}>
            <List className={classes.messageArea}>
                {chatUser && <ListSubheader key={chatUser.username}>
                    <Avatar>{chatUser.username.charAt(0).toUpperCase()}</Avatar>
                    <ListItemText classes={{primary: classes.listItemText}}
                                  primary={chatUser.username}>{chatUser.username}</ListItemText>
                    <Divider style={{backgroundColor: 'black'}}/>
                </ListSubheader>}

                {chatList &&
                    chatList.map((chat, index) => <ChatBubble key={chat._id + index} chat={chat}
                    position={chat.sentBy === prop.currentUser._id ? 'right' : 'left'}/>)
                }

            </List>
            <Divider/>
            <Grid container className={classes.typingArea}>
                <Grid item xs={11}>
                    <TextField id="standard-basic-send" variant="standard" multiline label="Write a message..." fullWidth
                    value={chatMessage} onChange={event => {
                        setChatMessage(event.target.value)
                    }}/>
                </Grid>
                <Grid button item xs={1} align="right" onClick={() => sendChat()}>
                    <Fab style={{backgroundColor: '#0d6efd'}} aria-label="add"><SendIcon
                        style={{color: '#fff'}}/></Fab>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default ChatWindow;
