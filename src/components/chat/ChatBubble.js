import {ListItem, ListItemText} from "@mui/material";
import Grid from "@material-ui/core/Grid";

const ChatBubble = (prop) => {

    const daysOld = (sentOn) => {
        const now = new Date();
        const nowMillis = now.getTime();
        const posted = new Date(sentOn);
        const postedMillis = posted.getTime();
        const oldMillis = nowMillis - postedMillis;
        let old = 0.0;
        const secondsOld = oldMillis/1000.0;
        const minutesOld = secondsOld/60.0;
        const hoursOld = minutesOld/60.0;
        const daysOld = hoursOld/24.0;
        if(daysOld > 1) {
            old = Math.round(daysOld) + 'd';
        } else if(hoursOld > 1) {
            old = Math.round(hoursOld) + 'h';
        } else if(minutesOld > 1) {
            old = Math.round(minutesOld) + 'm';
        } else if(secondsOld > 1) {
            old = Math.round(secondsOld) + 's';
        }
        if (old === 0) {
            old = 'less than a second';
        }
        return old;
    }

    return (
        <ListItem key={prop.chat._id + prop.chat.sentOn}>
        <Grid container>
            <Grid item xs={12}>
                <ListItemText align={prop.position} primary={prop.chat.message}/>
            </Grid>
            <Grid item xs={12}>
                <ListItemText align={prop.position} secondary={daysOld(prop.chat.sentOn) + ' ago'}/>
            </Grid>
        </Grid>
    </ListItem>
    )
}
export default ChatBubble;
