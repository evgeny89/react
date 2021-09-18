import {useEffect} from "react";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import {AppBar, Button, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getDatabase, onValue, ref} from "firebase/database";
import {change} from "../source/userSlice";
import {resetChats, setChats} from "../source/messageSlice";

import SecureRoute from "./SecureRoute";
import ChatPage from "./ChatPage";
import Profile from "./Profile";
import RandomGif from "./RandomGif";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";


const useStyles = makeStyles({
    root: {
        color: '#7699a2',
    },
    active: {
        color: '#fff',
    }
})

const RouteList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const auth = getAuth();
    const db = getDatabase();

    const setStoreFirebaseData = (user = null) => (dispatch) => {
        if (user) {
            dispatch(change(user.uid));
            const chats = ref(db, 'chats/');
            onValue(chats, (snapshot) => {
                const data = snapshot.val();
                dispatch(setChats(data))
            });
        } else {
            dispatch(resetChats());
            dispatch(change(false));
        }

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setStoreFirebaseData(user));
            } else {
                dispatch(setStoreFirebaseData());
            }
        });
    }, [auth, dispatch])

    const {isAuth} = useSelector(state => state.user);
    return (
        <BrowserRouter>
            <AppBar position="static" className="header">
                <Toolbar>
                    <Typography variant="h6">
                        <Button>
                            <NavLink exact to="/" style={{ textDecoration: 'none' }} className={classes.root} activeClassName={classes.active}>Home</NavLink>
                        </Button>
                    </Typography>
                    <Typography variant="h6">
                        <Button>
                            <NavLink to="/chats" style={{ textDecoration: 'none' }} className={classes.root} activeClassName={classes.active}>Chats</NavLink>
                        </Button>
                    </Typography>
                    <Typography variant="h6">
                        <Button>
                            {isAuth
                                ? <NavLink to="/profile" style={{ textDecoration: 'none' }} className={classes.root} activeClassName={classes.active}>Profile</NavLink>
                                : <NavLink to="/login" style={{ textDecoration: 'none' }} className={classes.root} activeClassName={classes.active}>LogIn</NavLink>
                            }
                        </Button>
                    </Typography>
                    <Typography variant="h6">
                        <Button>
                            <NavLink to="/gifs" style={{ textDecoration: 'none' }} className={classes.root} activeClassName={classes.active}>Случайная гифка</NavLink>
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <SecureRoute exact secured path="/profile">
                    <Profile />
                </SecureRoute>
                <SecureRoute exact path="/login">
                    <Login />
                </SecureRoute>
                <SecureRoute exact path="/signup">
                    <Signup />
                </SecureRoute>
                <SecureRoute exact secured path="/chats">
                    <ChatPage/>
                </SecureRoute>
                <Route exact path="/gifs">
                    <RandomGif />
                </Route>
                <Route>
                    <h3>Page not found</h3>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default RouteList;
