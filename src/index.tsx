import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { BrowserRouter } from "react-router-dom";
import {messages} from './state/state'

ReactDOM.render(
  <App messages={messages} />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <BrowserRouter>
//     <App messages={messages} />
//   </BrowserRouter>,
//   document.getElementById('root')
// );
