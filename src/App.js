import React from 'react';
import Header from './Compoents/Header';
import Dashboard from './Compoents/Dashboard';
import { Provider } from 'react-redux';
import store from './Compoents/store/store';
import './App.css';


function App() {
  return (
  
    <Provider store={store}>
        <Header />
        <Dashboard />
    </Provider>  
      
  );
}

export default App;
