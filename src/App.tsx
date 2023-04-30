import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Profile } from './components/content/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import { PageType } from './state/state'
import { BrowserRouter } from "react-router-dom";
import { Dialogs } from './components/content/Dialogs/Dialogs';
import { News } from './components/content/News/News';
import { Music } from './components/content/Music/Music';
import { Settings } from './components/content/Settings/Settings';
import { Sidebar } from './components/Sidebar/Sidebar';

type PropsType = {
  state: PageType
}
export const App = ({ state }: PropsType) => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Sidebar state={state.subjects}/>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Profile state={state.profilePage} pageName='Profile' />}></Route>
            {/* <Route path="/" render={()=> <Profile data={data} pageName='Profile' /> }></Route> */}
            <Route path="/dialogs" element={<Dialogs state={state.dialogsPage}/>}></Route>
            <Route path="/news" element={<News pageName='News' />}></Route>
            <Route path="/music" element={<Music pageName='Music' />}></Route>
            <Route path="/settings" element={<Settings pageName='Settings' />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

