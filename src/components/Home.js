const Home = (props) => {
    const {login} = {...props};

    return (<div className="chats">Hello, {login}. This home page</div>)
}

export default Home;
