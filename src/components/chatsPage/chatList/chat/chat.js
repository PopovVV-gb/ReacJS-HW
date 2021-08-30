import {ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core/';
import {NavLink} from "react-router-dom"

function Chat (props) {
    return (
        <div>
            <NavLink 
                to= {`/chats/${props.chat.id}`}
                style={{
                    textDecoration: 'none'
                }}
                activeStyle = {{
                    color: '#EC2736'
                }} >
                <ListItem key={props.chat.id}>
                    <ListItemAvatar>
                        <Avatar alt={props.chat.name} src={props.chat.avatar}></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary = {props.chat.name}></ListItemText>
                </ListItem>
            </NavLink>
        </div>
    )
}

export default Chat;