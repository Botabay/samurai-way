import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Techonologies/>
    </div>
  );
}

const Header=()=>{
  return <div>header</div>
}

const Techonologies=()=>{
  return (
    <ul>
      <li>css</li>
      <li>html</li>
      <li>js</li>
    </ul>
  )
}











export default App;
