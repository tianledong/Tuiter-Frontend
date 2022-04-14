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
import {ListItem, ListSubheader, TextField} from "@mui/material";
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
        marginLeft: '6px',
        color: 'black'
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
    const [color, setColor] = useState(null);
    const {currentUserId} = useParams();

    const colors = ['olive', 'skyblue', 'seagreen', 'salmon', 'mediumpurple', 'orangered', 'darkgrey'];

    const pinkColorByFirstLetter = (username) => {
        const firstLetter = username.charAt(0).toUpperCase();
        const charCode = parseInt(firstLetter, 36);
        let index = 0;
        if (charCode > 0 && charCode <= 10) {
            index = 1;
        } else if (charCode > 10  && charCode <= 15) {
            index = 2;
        } else if (charCode > 15  && charCode <= 20) {
            index = 3;
        } else if (charCode > 20  && charCode <= 25) {
            index = 4;
        } else if (charCode > 25  && charCode <= 30) {
            index = 5;
        } else if (charCode > 30  && charCode <= 35) {
            index = 6;
        }
        return index;

    }

    const sendChat = async () => {
        const newChat = await userChatsUser('me', currentUserId, {message: chatMessage});
        socket.emit("private message", {
            message: chatMessage,
            to: currentUserId,
        });
        setChatList([newChat, ...chatList])
        setChatMessage('');
    }

    const initChat = async () => {
        const user = await findUserById(currentUserId);
        setChatUser(user);
        const chat = await findChatForUsers('me', currentUserId);
        setChatList(chat.reverse());
        const pickedColor = colors[pinkColorByFirstLetter(user.username)];
        setColor(pickedColor);
    }

    const reload = async () => {
        const chats = await findChatForUsers('me', currentUserId);
        const chatsReverse = chats.reverse();
        setChatList(chatsReverse)
    }

    useEffect(initChat, [currentUserId]);
    useEffect(async () => {
        socket.on("receive_message", (({from}) => {
            reload();
        }));
    }, [socket]);


    return (
        <Grid item xs={9}>
            <List className={classes.messageArea}>
                {chatUser && <ListSubheader key={chatUser.username}>
                    <ListItem key={chatUser.username + ' li'}>
                        <Avatar style={{backgroundColor: color}}>{chatUser.username.charAt(0).toUpperCase()}</Avatar>
                        <ListItemText classes={{primary: classes.listItemText}}
                                      primary={chatUser.username}>{chatUser.username}</ListItemText>
                    </ListItem>
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
                    <TextField id="standard-basic-send" variant="standard" multiline label="Write a message..."
                               fullWidth
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
