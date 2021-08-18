import "../styles_components/login.css";
import {useCallback, useState} from "react";

const Login = (props) => {
    const {login} = {...props};

    const [name, setName] = useState('');
    const setLogin = useCallback(() => login(name), [name, login]);

    return (
        <div className="login">
            <div className="login-form">
                <div>Введите имя:</div>
                <input className="login-input" onChange={e => setName(e.target.value)}/>
                <button className="login-button" type="button" onClick={setLogin}>login</button>
            </div>
        </div>
    );
}

export default Login;
