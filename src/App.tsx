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
import { UsersContainer } from './components/content/Users/UsersContainer';
import { ProfileContainer } from './components/content/Profile/ProfileContainer';

export const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Sidebar />
                <div className='content'>
                    <Routes>
                        {/* <Route path="/" element={<Profile />}></Route> */}
                        {/* <Route path="/" element={<ProfileContainer />}></Route> */}
                        {/* <Route path="/profile" element={<ProfileContainer />}></Route> */}
                        <Route path="/profile/:userId?" element={<ProfileContainer />}></Route>
                        <Route path="/dialogs" element={<DialogsContainer />}></Route>
                        <Route path="/news" element={<News pageName='News' />}></Route>
                        <Route path="/music" element={<Music pageName='Music' />}></Route>
                        <Route path="/settings" element={<Settings pageName='Settings' />}></Route>
                        <Route path="/users" element={<UsersContainer />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>

        </div>
    );
}

