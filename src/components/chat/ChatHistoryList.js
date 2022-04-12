import {Badge} from "@mui/material";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import socket from "../../Socket";


const ChatHistoryList = (prop) => {
    const useStyles = makeStyles({
        listItemText: {
            marginLeft: '6px'
        }
    });

    const [newMessages, setNewMessages] = useState(0);

    useEffect(() => {
        socket.on("receive_message", (message, from) => {
            if (prop.userID === from) {
                setNewMessages(newMessages + 1);
            }
        });
    }, [socket]);

    const classes = useStyles();
    return (
        <ListItem button component={Link} key={prop.username} to={prop.userID}>
            <Badge
                color="primary" badgeContent={newMessages} anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            >
                <Avatar>{prop.username.charAt(0).toUpperCase()}</Avatar>
            </Badge>
            <ListItemText classes={{primary: classes.listItemText}} primary={prop.username}>
                {prop.username}</ListItemText>
        </ListItem>
    )
}
export default ChatHistoryList;
