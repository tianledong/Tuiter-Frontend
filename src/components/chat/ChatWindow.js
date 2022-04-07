import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    messageArea: {
        height: '91%',
    }, listItemText: {
        marginLeft: '6px'
    }, typingArea : {
        paddingTop: '5px',
        padding: '29px'
    }
});




const ChatWindow = () => {
    const classes = useStyles();

    return (
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
            <Grid container className={classes.typingArea}>
                <Grid item xs={11}>
                    <TextField id="outlined-basic-email" multiline label="Write a message..." fullWidth/>
                </Grid>
                <Grid item xs={1} align="right">
                    <Fab style={{backgroundColor: '#0d6efd'}} aria-label="add"><SendIcon
                        style={{color: '#fff'}}/></Fab>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default ChatWindow;
