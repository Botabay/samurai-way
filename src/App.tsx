import './App.css';
import { Header } from './components/Header/Header';
import { Profile } from './components/content/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import { DialogsContainer } from './components/content/Dialogs/DialogsContainer';
import { News } from './components/content/News/News';
import { Music } from './components/content/Music/Music';
import { Settings } from './components/content/Settings/Settings';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Users } from './components/content/Users/Users';

export const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Sidebar />
                <div className='content'>
                    <Routes>
                        <Route path="/" element={<Profile />}></Route>
                        <Route path="/dialogs" element={<DialogsContainer />}></Route>
                        <Route path="/news" element={<News pageName='News' />}></Route>
                        <Route path="/music" element={<Music pageName='Music' />}></Route>
                        <Route path="/settings" element={<Settings pageName='Settings' />}></Route>
                        <Route path="/users" element={<Users pageName='Users' />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>

        </div>
    );
}

