import React from "react";
import {Provider} from "react-redux";
import store from './source/store';
import './app.css';

import Rute from "./components/Rute";

function App() {
    return (
        <div className="app">
            <Provider store={store}>
                <Rute />
            </Provider>
        </div>
    );
}

export default App;
