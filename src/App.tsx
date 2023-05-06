import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Profile } from './components/content/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import { store } from './state/state'
import { BrowserRouter } from "react-router-dom";
import { Dialogs } from './components/content/Dialogs/Dialogs';
import { News } from './components/content/News/News';
import { Music } from './components/content/Music/Music';
import { Settings } from './components/content/Settings/Settings';
import { Sidebar } from './components/Sidebar/Sidebar';

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Sidebar state={store.getState().subjects}/>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Profile  />}></Route>
            {/* <Route path="/" render={()=> <Profile data={data} pageName='Profile' /> }></Route> */}
            <Route path="/dialogs" element={<Dialogs />}></Route>
            <Route path="/news" element={<News pageName='News' />}></Route>
            <Route path="/music" element={<Music pageName='Music' />}></Route>
            <Route path="/settings" element={<Settings pageName='Settings' />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

