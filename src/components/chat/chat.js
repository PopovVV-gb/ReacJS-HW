import {ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core/';

function Chat (props) {
    return (
        <div>
            <ListItem key={props.chat.id}>
                <ListItemAvatar>
                    <Avatar alt={props.chat.name} src={props.chat.avatar}></Avatar>
                </ListItemAvatar>
                <ListItemText primary = {props.chat.name}></ListItemText>
            </ListItem>
        </div>
    )
}

export default Chat;