import React, {useEffect} from "react";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from "redux-persist";
import store from './source/store';
import './app.css';
import { initializeApp } from "firebase/app";
import {firebaseConfig} from "./source/firebase";
import RouteList from "./components/RouteList";

function App() {
    useEffect(() => {
        initializeApp(firebaseConfig);
    }, [])

    return (
        <div className="app">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistStore(store)}>
                    <RouteList />
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
