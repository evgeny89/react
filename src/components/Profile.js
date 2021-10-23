import "../styles_components/login.css";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import {Button, TextField, List, ListItem} from "@material-ui/core";
import {change, setLogin} from "../source/userSlice";
import {ref, set, getDatabase} from "firebase/database";
import {getAuth, signOut} from "firebase/auth";

const Profile = () => {
    const auth = getAuth();
    const db = getDatabase();
    const login = useSelector(state => state.user.name);
    const countMessage = useSelector(state => state.user.countMessage);
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const logout = () => {
        signOut(auth).then(() => {
            dispatch(change(false));
        }).catch((error) => {
            console.log(error)
        });
    }

    const saveLogin = useCallback(() => {
        if (name.trim()) {
            dispatch(setLogin(name));
            if (auth) {
                set(ref(db, 'profile/' + auth.currentUser.uid), {
                    nick: name,
                });
            }
            setName('');
        }
    }, [name, setName, dispatch, auth, db]);

    return (
        <>
            <div className='login-header'>
                <List>
                    <ListItem>
                        <span>текущее имя: {login}</span>
                    </ListItem>
                    <ListItem>
                        <span>всего сообщений: {countMessage}</span>
                    </ListItem>
                    <ListItem>
                        <Button onClick={logout} variant="contained" color="primary">LogOut</Button>
                    </ListItem>
                </List>
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

export default Profile;
