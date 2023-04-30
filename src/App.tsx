import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/content/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import { MessagesType } from './state/state'
import { BrowserRouter } from "react-router-dom";
import { Dialogs } from './components/content/Dialogs/Dialogs';
import { News } from './components/content/News/News';
import { Music } from './components/content/Music/Music';
import { Settings } from './components/content/Settings/Settings';

type PropsType = {
  messages: MessagesType
}
export const App = ({ messages }: PropsType) => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Profile pageName='Profile' />}></Route>
            <Route path="/messages" element={<Dialogs/>}></Route>
            <Route path="/news" element={<News pageName='News' />}></Route>
            <Route path="/music" element={<Music pageName='Music' />}></Route>
            <Route path="/settings" element={<Settings pageName='Settings' />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

