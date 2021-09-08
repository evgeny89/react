import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";

import ChatPage from "./ChatPage";
import Profile from "./Profile";
import Home from "./Home";

const Rute = (props) => {
    return (
        <BrowserRouter>
            <AppBar position="static" className="header">
                <Toolbar>
                    <Typography variant="h6">
                        <Button><Link to="/">Home</Link></Button>
                    </Typography>
                    <Typography variant="h6">
                        <Button><Link to="/chats">Chats</Link></Button>
                    </Typography>
                    <Typography variant="h6">
                        <Button><Link to="/profile">Profile</Link></Button>
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
                    <ChatPage {...props}/>
                </Route>
                <Route>
                    <h3>Page not found</h3>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Rute;
