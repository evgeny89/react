import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import {AppBar, Button, makeStyles, Toolbar, Typography} from "@material-ui/core";

import ChatPage from "./ChatPage";
import Profile from "./Profile";
import Home from "./Home";

const useStyles = makeStyles({
    root: {
        color: '#7699a2',
    },
    active: {
        color: '#fff',
    }
})

const Rute = () => {
    const classes = useStyles();
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
                            <NavLink to="/profile" style={{ textDecoration: 'none' }} className={classes.root} activeClassName={classes.active}>Profile</NavLink>
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/chats">
                    <ChatPage/>
                </Route>
                <Route>
                    <h3>Page not found</h3>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Rute;
