import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import  populateProduce  from './store/produce'
import './index.css';

const store = configureStore();

if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

