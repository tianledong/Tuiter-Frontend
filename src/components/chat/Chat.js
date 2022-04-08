// cited from: https://gist.github.com/muhammadawaisshaikh/542f9cff88caaed33e2b601142b7b0e0

import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ChatHistoryList from "./ChatHistoryList";
import {Route, Routes, useNavigate} from "react-router-dom";
import ChatWindow from "./ChatWindow";
import * as service from "../../services/security-service";
import * as usersService from "../../services/users-service";

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

const Chat = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const [chattedUserList, setChattedUserList] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    const initChat = async () => {
        try {
            const user = await service.profile();
            setCurrentUser(user);
        } catch (e) {
            navigate('/login');
        }
        const users = await usersService.findAllUsers();

        setChattedUserList(users);
    }

    useEffect(initChat, []);

    return (
        <div>
            <Grid container component={Paper} className={classes.chat}>
                <Grid item xs={3} className={classes.borderRight500}>
                    <Grid item xs={12} style={{padding: '10px'}}>
                        <TextField label="Search" id="search" margin="dense" type="search" variant="outlined"/>
                    </Grid>
                    <Divider/>
                    <List>
                        {chattedUserList &&
                            chattedUserList.map(user => <ChatHistoryList key={user._id + 'ch'} username={user.username}
                                                                          userID={user._id}/>)
                        }
                    </List>
                </Grid>
                <Routes>
                    <Route path="/:uid" element={<ChatWindow currentUser={currentUser}/>}/>
                </Routes>
            </Grid>
        </div>
    );
}

export default Chat;
