import React from "react";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from "redux-persist";
import store from './source/store';
import './app.css';

import RouteList from "./components/RouteList";

function App() {
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
