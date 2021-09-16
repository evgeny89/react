import {useDispatch} from "react-redux";
import {change} from "../source/userSlice";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const routeHistory = useHistory();
    const changeAuth = () => {
        dispatch(change());
        routeHistory.push("/profile")
    }
    return (<div><Button onClick={changeAuth} variant="contained" color="primary">LogInOut</Button></div>)
}

export default Login;
