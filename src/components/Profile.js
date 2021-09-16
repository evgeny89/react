import "../styles_components/login.css";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {change, setLogin} from "../source/userSlice";

const Profile = () => {
    const login = useSelector(state => state.user.name);
    const countMessage = useSelector(state => state.user.countMessage);
    const dispatch = useDispatch();

    const changeAuth = () => {
        dispatch(change());
    }

    const [name, setName] = useState('');
    const saveLogin = useCallback(() => {
        dispatch(setLogin(name));
        setName('');
    }, [name, setName, dispatch]);

    return (
        <>
            <div className='login-header'>
                <span>текущее имя: {login}</span>
            </div>
            <div className='login-header'>
                <span>всего сообщений: {countMessage}</span>
            </div>
            <div className="login-form">
                <TextField
                    id="standard-basic"
                    label="Изменить имя"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    autoFocus
                />
                <Button onClick={saveLogin} variant="contained" color="primary">сохранить</Button>
            </div>
            <div><Button onClick={changeAuth} variant="contained" color="primary">LogInOut</Button></div>
        </>
    );
}

export default Profile;
