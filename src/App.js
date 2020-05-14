import React from 'react';
import { Provider } from 'react-redux'

// import './App.css';
import Routes from './config/routes/Routes';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
