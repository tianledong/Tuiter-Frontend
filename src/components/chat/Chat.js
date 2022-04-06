// cited from: https://gist.github.com/muhammadawaisshaikh/542f9cff88caaed33e2b601142b7b0e0

import React from 'react';
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
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import {Badge} from "@mui/material";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    chatWindow: {
        width: '100%',
        height: '100%',
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
    }, listItemText: {
        marginLeft: '6px'
    }

});

const Chat = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container component={Paper} className={classes.chatWindow}>
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
                        <ListItem button key="RemySharp">
                            <Badge
                                color="primary" badgeContent={10} anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            >
                                <Avatar style={{backgroundColor: "olive"}}>RS</Avatar>
                            </Badge>
                                <ListItemText classes={{primary: classes.listItemText}} primary="Remy Sharp">Remy
                                    Sharp</ListItemText>
                        </ListItem>
                        <ListItem button key="Alice">
                            <Avatar style={{backgroundColor: "seagreen"}}>A</Avatar>
                            <ListItemText classes={{primary: classes.listItemText}} primary="Alice">Alice</ListItemText>
                        </ListItem>
                        <ListItem button key="CindyBaker">
                            <Avatar style={{backgroundColor: "skyblue"}}>CB</Avatar>
                            <ListItemText classes={{primary: classes.listItemText}} primary="Cindy Baker">Cindy
                                Baker</ListItemText>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={9}>
                    <List className={classes.messageArea}>
                        <ListItem key="CindyBaker">
                            <Avatar style={{backgroundColor: "skyblue"}}>CB</Avatar>
                            <ListItemText classes={{primary: classes.listItemText}} primary="Cindy Baker">Cindy
                                Baker</ListItemText>
                        </ListItem>
                        <Divider style={{backgroundColor: 'black'}}/>
                        <ListItem key="1">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="right" primary="Hey man, What's up ?"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="09:30"/>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="2">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="left" primary="Hey, Iam Good! What about you ?"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="left" secondary="09:31"/>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="3">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="right" primary="Cool. i am good, let's catch up!"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="10:30"/>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                    <Divider/>
                    <Grid container style={{padding: '20px'}}>
                        <Grid item xs={11}>
                            <TextField id="outlined-basic-email" multiline label="Write a message..." fullWidth/>
                        </Grid>
                        <Grid item xs={1} align="right">
                            <Fab style={{backgroundColor: '#0d6efd'}} aria-label="add"><SendIcon
                                style={{color: '#fff'}}/></Fab>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Chat;
