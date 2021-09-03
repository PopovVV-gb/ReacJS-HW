import { useTheme } from "@material-ui/core/styles";
import { createChangeUserNameAction, createProfileIsActiveAction} from '../../store/profile/actions';
import { useDispatch, useSelector } from "react-redux"
import './profile.css'
import { useState } from "react";
import { TextField, Grid } from '@material-ui/core';
 
function Profile(props) {
    const theme = useTheme();
    const [enableChange, setEnableChange] = useState(false);
    const { name, isActive } = useSelector((state) => state.profile);
    const [userName, setUserName] = useState(name);
    const [profileActive, setProfileActive] = useState(isActive)
    const dispatch = useDispatch(); 
    const toggleProfileActive = () => {
        setProfileActive(!profileActive)
    }
    const toggleEnableChange = () => {
        setEnableChange(!enableChange)
    }
    const changeUserName = (event) => {
        setUserName(event.target.value)
    }
    const saveChanges = () => {
        if (name !== userName) {
            dispatch(createChangeUserNameAction(userName))
        }
        if (isActive !== profileActive) {
            dispatch(createProfileIsActiveAction(profileActive))
        }
        setEnableChange(false)
    }
    const undoChanges = () => {
        setUserName(name);
        setProfileActive(isActive)
        setEnableChange(false)
    }
    return (
        <div className = "profile"
            style={{backgroundColor: theme.palette.secondary.main}}
        >
            <Grid container spacing = {3}>
                <Grid item xs={12} className="cell">
                    <h1>Данные профиля</h1>
                </Grid>
                <Grid item xs={6} className="cell">
                    <input
                        type = "checkbox"
                        checked = {profileActive}
                        value = {profileActive}
                        onChange = {toggleProfileActive}
                        disabled = {!enableChange}
                        id = 'isActiveProfile'
                    >                
                    </input>
                    <label htmlFor = 'isActiveProfile'>Профиль активен</label>
                </Grid>
                <Grid item xs={6} className="cell">
                    <TextField
                        label="Имя пользователя" 
                        variant="outlined" 
                        value={userName} 
                        disabled = {!enableChange}
                        onChange={changeUserName}>
                    </TextField>
                </Grid>
                <Grid item xs={6} className="cell">
                    <input
                        type = "checkbox"
                        checked = {enableChange}
                        value = {enableChange}
                        onChange = {toggleEnableChange}
                        id = 'enableChange'
                    >                
                    </input>
                    <label htmlFor = 'enableChange'>Изменить данные профиля</label>
                </Grid>
                <Grid item xs={3} className="cell">
                    <button 
                        onClick={saveChanges}                        
                        disabled = {!enableChange}
                    >Сохранить изменения</button>                    
                </Grid>
                <Grid item xs={3} className="cell">
                    <button 
                        onClick={undoChanges}                        
                        disabled = {!enableChange}
                    >Отменить изменения</button>                    
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile