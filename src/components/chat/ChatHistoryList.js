import {Badge} from "@mui/material";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";


const ChatHistoryList = (prop) => {
    const useStyles = makeStyles({
        listItemText: {
            marginLeft: '6px'
        }
    });

    const [newMessages, setNewMessages] = useState(0);

    const classes = useStyles();
    return (
        <ListItem button component={Link} key={prop.username} to={prop.userID}>
            <Badge
                color="primary" badgeContent={newMessages} anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            >
                <Avatar style={{backgroundColor: prop.color}}>{prop.username.charAt(0).toUpperCase()}</Avatar>
            </Badge>
            <ListItemText classes={{primary: classes.listItemText}} primary={prop.username}>
                {prop.username}</ListItemText>
        </ListItem>
    )
}
export default ChatHistoryList;
