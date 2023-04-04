import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import {Messages} from './components/Messages/Messages';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {MessagesType} from './state/state'

type PropsType={
  messages:MessagesType
}
export const App=({messages}: PropsType)=> {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className='content_wrap'>
        <Routes>
          <Route path="/" element={<Profile pageName='Profile' />}></Route>
          <Route path="/messages" element={<Messages pageName='Messages' messages={messages}/>}></Route>
          <Route path="/news" element={<News pageName='News' />}></Route>
          <Route path="/music" element={<Music pageName='Music' />}></Route>
          <Route path="/settings" element={<Settings pageName='Settings' />}></Route>
        </Routes>
      </div>
    </div>
  );
}

