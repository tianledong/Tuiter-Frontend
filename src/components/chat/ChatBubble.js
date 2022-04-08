import {ListItem, ListItemText} from "@mui/material";
import Grid from "@material-ui/core/Grid";

const ChatBubble = (prop) => {
    return (
        <ListItem key={prop.chat._id + prop.chat.sentOn}>
        <Grid container>
            <Grid item xs={12}>
                <ListItemText align={prop.position} primary={prop.chat.chat}/>
            </Grid>
            <Grid item xs={12}>
                <ListItemText align={prop.position} secondary={prop.chat.sentOn}/>
            </Grid>
        </Grid>
    </ListItem>
    )
}
export default ChatBubble;
