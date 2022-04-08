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

        setChattedUserList([{
            "_id": "6214fda11beae98f3b39cd51",
            "username": "charlie",
            "password": "charlie432",
            "firstName": "Charlie",
            "lastName": "Brown",
            "email": "charlie@peanuts.com",
            "accountType": "PERSONAL",
            "maritalStatus": "SINGLE",
            "joined": "2022-02-22T15:13:37.292Z",
            "__v": 0
        }, {
            "_id": "6214fdbf1beae98f3b39cd53",
            "username": "nasa",
            "password": "nasa321",
            "firstName": "NASA",
            "lastName": "Gov",
            "email": "space@nasa.gov",
            "accountType": "PERSONAL",
            "maritalStatus": "SINGLE",
            "joined": "2022-02-22T15:14:07.946Z",
            "__v": 0
        }, {
            "_id": "6214fe6c1beae98f3b39cd5d",
            "username": "spacex",
            "password": "spacex420",
            "firstName": "SpaceX",
            "email": "elon@spacex.com",
            "accountType": "PERSONAL",
            "maritalStatus": "SINGLE",
            "joined": "2022-02-22T15:17:00.806Z",
            "__v": 0
        }, {
            "_id": "622504b51109a223dd3eda60",
            "username": "moe",
            "password": "moe123",
            "email": "moe@stooges.com",
            "accountType": "PERSONAL",
            "maritalStatus": "SINGLE",
            "joined": "2022-03-06T19:00:05.734Z",
            "__v": 0
        }, {
            "_id": "622504b91109a223dd3eda68",
            "username": "larry",
            "password": "larry123",
            "email": "larry@stooges.com",
            "accountType": "PERSONAL",
            "maritalStatus": "SINGLE",
            "joined": "2022-03-06T19:00:09.706Z",
            "__v": 0
        }, {
            "_id": "622504b91109a223dd3eda6a",
            "username": "moe",
            "password": "moe123",
            "email": "moe@stooges.com",
            "accountType": "PERSONAL",
            "maritalStatus": "SINGLE",
            "joined": "2022-03-06T19:00:09.711Z",
            "__v": 0
        }, {
            "_id": "622504d21109a223dd3eda6e",
            "username": "larry",
            "password": "larry123",
            "email": "larry@stooges.com",
            "accountType": "PERSONAL",
            "maritalStatus": "SINGLE",
            "joined": "2022-03-06T19:00:34.798Z",
            "__v": 0
        }]);
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
