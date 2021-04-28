import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from './template/index';
import { BrowserRouter as Router } from "react-router-dom"
import {Provider} from 'react-redux';
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from 'redux';
import reducer from './reducer';
import storage from 'redux-persist/lib/storage'
import reportWebVitals from './reportWebVitals';

const persistConfig = {
  key: 'root',
  storage,
  whitelist : [ 'Poke' ]
}

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Body/>
        </Router>
      </PersistGate>
    </Provider>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
