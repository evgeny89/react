import "../styles_components/login.css";
import {useCallback, useState} from "react";
import {Button, TextField} from "@material-ui/core";

const Login = (props) => {
    const {login, setLogin} = {...props};

    const [name, setName] = useState('');
    const saveLogin = useCallback(() => {
        setLogin(name);
        setName('');
    }, [name, setLogin, setName]);

    return (
        <>
            <div className='login-header'>
                <span>текущее имя: {login}</span>
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
