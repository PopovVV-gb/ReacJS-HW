import { useTheme } from "@material-ui/core/styles";

function Profile(props) {
    const theme = useTheme();
    return (
        <div 
            style={{backgroundColor: theme.palette.primary.main}}
        >
            <h1>It's my profile page.</h1>
        </div>
    )
}

export default Profile