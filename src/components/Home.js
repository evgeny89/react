import {useSelector} from "react-redux";

const Home = () => {
    const login = useSelector(state => state.user.name)

    return (<div className="chats">Hello, {login}. This home page</div>)
}

export default Home;
