import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {change, setLogin} from "../source/userSlice";
import {Box, Button, Divider, List, ListItem, TextField, Typography} from "@material-ui/core";
import { getDatabase, ref, set, onValue } from "firebase/database";

const LogInOut = ({typeFirebase, button}) => {
    const auth = getAuth();
    const db = getDatabase();
    const routeHistory = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const saveUserDataInFirebase = ({uid}) => {
        set(ref(db, 'profile/' + uid), {
            nick: "Guest",
        });
    }

    const getUserDataInFirebase = ({uid}) => {
        const nick = ref(db, 'profile/' + uid + '/nick');
        onValue(nick, (snapshot) => {
            const data = snapshot.val();
            dispatch(setLogin(data))
        });
    }

    const createUser = () => createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch(change(user.uid));
            saveUserDataInFirebase(user);
            routeHistory.push("/profile");
        })
        .catch((error) => {
            //const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        });

    const authUser = () => signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch(change(user.uid));
            getUserDataInFirebase(user);
            routeHistory.push("/profile");
        })
        .catch((error) => {
            //const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        typeFirebase ? createUser(auth, email, password) : authUser(auth, email, password);
    }

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <List component="nav">
                    <ListItem>
                        <Typography>Fill in the form below to register new account.</Typography>
                    </ListItem>
                    <ListItem>
                        <TextField
                            id="standard-basic"
                            label="Email"
                            onChange={handleEmailChange}
                            value={email}
                            type="email"
                        />
                    </ListItem>
                    <ListItem>
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            onChange={handlePassChange}
                            value={password}
                            type="password"
                        />
                    </ListItem>
                    <ListItem>
                        {error && <Box><Typography>{error}</Typography><Divider /></Box>}
                        <Button variant="contained" type="submit">{button}</Button>
                    </ListItem>
                </List>
                <Divider />
                {
                    typeFirebase
                        ? <Typography>Already have an account? <Link to="/login">Sign in</Link></Typography>
                        : <Typography>Don't have an account? <Link to="/signup">Sign up</Link></Typography>
                }
            </form>
        </Box>
    );
}

export default LogInOut;