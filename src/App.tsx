import React from 'react';
import './App.css';
import {data} from './state/state'
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/content/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import { DataType } from './state/state'
import { BrowserRouter } from "react-router-dom";
import { Dialogs } from './components/content/Dialogs/Dialogs';
import { News } from './components/content/News/News';
import { Music } from './components/content/Music/Music';
import { Settings } from './components/content/Settings/Settings';

type PropsType = {
  data: DataType
}
export const App = ({ data }: PropsType) => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Profile data={data} pageName='Profile' />}></Route>
            <Route path="/dialogs" element={<Dialogs data={data}/>}></Route>
            <Route path="/news" element={<News pageName='News' />}></Route>
            <Route path="/music" element={<Music pageName='Music' />}></Route>
            <Route path="/settings" element={<Settings pageName='Settings' />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

