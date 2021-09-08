import "../styles_components/login.css";
import {useCallback, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import {setLogin} from "../source/userSlice";

const Login = () => {
    const login = useSelector(state => state.user.name);
    const countMessage = useSelector(state => state.user.countMessage);
    const dispatch = useDispatch();

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
        </>
    );
}

export default Login;
