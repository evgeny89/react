import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import {AppBar, Button, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";

import SecureRoute from "./SecureRoute";
import ChatPage from "./ChatPage";
import Profile from "./Profile";
import RandomGif from "./RandomGif";
import Home from "./Home";
import Login from "./Login";

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
