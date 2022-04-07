// cited from: https://gist.github.com/muhammadawaisshaikh/542f9cff88caaed33e2b601142b7b0e0

import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ChatHistoryList from "./ChatHistoryList";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import ChatWindow from "./ChatWindow";

const useStyles = makeStyles({
    table: {
        minWidth: 550,
    },
    chat: {
        width: '100%',
        height: '80vh',
        marginTop: '30px'

    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
        height: '80vh',
        overflowY: 'auto'
    }
});

const colors = ['olive', 'skyblue', 'seagreen', 'salmon', 'mediumpurple', 'orangered', 'darkgrey']

const Chat = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const classes = useStyles();

    const [chattedUserList, setChattedUserList] = useState(null);

    const initChat = () => {
        setChattedUserList([{
            "_id": "6214fda11beae98f3b39cd51",
            "username": "charlie",
            "color" : colors[0]
        }, {
            "_id": "6214fdbf1beae98f3b39cd53",
            "username": "nasa",
            "color" : colors[1]
        }, {
            "_id": "6214fdbf1beae98f3b39cd55",
            "username": "Alice",
            "color" : colors[2]
        }, {
            "_id": "6214fdbf1beae98f3b39cd57",
            "username": "Bob",
            "color" : colors[3]
        }, {
            "_id": "6214fdbf1beae98f3b39cd57",
            "username": "Peter",
            "color" : colors[4]
        }]);
    }

    useEffect(initChat, []);

    return (
        <div>
            <Grid container component={Paper} className={classes.chat}>
                <Grid item xs={3} className={classes.borderRight500}>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <Avatar style={{backgroundColor: "salmon"}}>JW</Avatar>
                            </ListItemIcon>
                            <ListItemText primary="John Wick"/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <Grid item xs={12} style={{padding: '10px'}}>
                        <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth/>
                    </Grid>
                    <Divider/>
                    <List>
                        {chattedUserList &&
                            chattedUserList.map(user => <ChatHistoryList key={user._id + 'ch'} username={user.username}
                            color={user.color} userID={user._id}/>)
                        }
                    </List>
                </Grid>
                <Routes>
                    <Route path="/:uid" element={<ChatWindow/>}/>
                </Routes>
            </Grid>
        </div>
    );
}

export default Chat;
