import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './App.css';
import ToolbarMain from "./components/ToolbarMain.jsx";
import Footer from './components/Footer';
import Routes from './Routes'
import combinedReducer from './redux/reducers.js';
import thunk from 'redux-thunk';

let store=createStore(combinedReducer, applyMiddleware(thunk));


function App() {

  return (
    <Provider store={store}>
      <div className="WeWalk">
        <ToolbarMain />
        <Routes />
        <Footer />
      </div>
    </Provider>
  );
}


export default App;
