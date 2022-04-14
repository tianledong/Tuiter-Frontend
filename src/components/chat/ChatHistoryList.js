import {Badge} from "@mui/material";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import socket from "../../Socket";
import {countTotalUnreadMessageForUsers, updateRead} from "../../services/chat-service";


const ChatHistoryList = (prop) => {
    const useStyles = makeStyles({
        listItemText: {
            marginLeft: '6px'
        }
    });

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

    const [newMessages, setNewMessages] = useState(0);
    const [color, setColor] = useState(null);

    useEffect(async () => {
        socket.on("receive_message", (async ({from}) => {
            const count = await countTotalUnreadMessageForUsers('me', prop.userID);
            setNewMessages(count);
        }))
    }, [socket]);

    useEffect(async () => {
        const count = await countTotalUnreadMessageForUsers('me', prop.userID);
        setNewMessages(count);
        const pickedColor = colors[pinkColorByFirstLetter(prop.username)];
        setColor(pickedColor);
    }, []);

    const classes = useStyles();
    return (
        <ListItem button component={Link} key={prop.username} to={prop.userID} onClick={async () => {
            await updateRead('me', prop.userID);
            setNewMessages(0);
            socket.emit("refresh float button", {
                message: 1
            });
        }}>
            <Badge
                color="primary" badgeContent={newMessages} anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            >
                <Avatar style={{backgroundColor: color}}>{prop.username.charAt(0).toUpperCase()}</Avatar>
            </Badge>
            <ListItemText classes={{primary: classes.listItemText}} primary={prop.username}>
                {prop.username}</ListItemText>
        </ListItem>
    )
}
export default ChatHistoryList;
