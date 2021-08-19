import "../styles_components/login.css";
import {useCallback, useState} from "react";
import {Button, TextField} from "@material-ui/core";

const Login = (props) => {
    const {login} = {...props};

    const [name, setName] = useState('');
    const setLogin = useCallback(() => login(name), [name, login]);

    return (
        <div className="login">
            <div className="login-form">
                <TextField
                    id="standard-basic"
                    label="Введите имя"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    autoFocus
                />
                <Button onClick={setLogin} variant="contained" color="primary">сохранить</Button>
            </div>
        </div>
    );
}

export default Login;
