import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";

const SecureRoute = ({secured, ...rest}) => {
    const {isAuth} = useSelector(state => state.user);

    if ((secured && isAuth) || !secured) {
        return <Route {...rest}/>
    }

    return <Redirect to={{pathname: "/login"}} />
}

export default SecureRoute;