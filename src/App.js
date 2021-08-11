import React, {useState} from "react";
import './app.css';
import Message from "./components/Message";

function App() {

    const [inputText, setInputText] = useState('');

    return (
        <div className="app">
            <input className="input" value={inputText} onChange={e => setInputText(e.target.value)} />
            <Message textToShow={inputText}/>
        </div>
    );
}

export default App;
