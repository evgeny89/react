import React from "react";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from "redux-persist";
import store from './source/store';
import './app.css';

import Rute from "./components/Rute";

function App() {
    return (
        <div className="app">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistStore(store)}>
                    <Rute />
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
