import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import { DialogsContainer } from './components/content/Dialogs/DialogsContainer';
import { News } from './components/content/News/News';
import { Music } from './components/content/Music/Music';
import { Settings } from './components/content/Settings/Settings';
import { Sidebar } from './components/Sidebar/Sidebar';
import { UsersContainer } from './components/content/Users/UsersContainer';
import { ProfileContainer } from './components/content/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Component } from 'react';
import { setInitializedTC } from "./redux/appReducer"

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { withRedirectHoc } from "./HOCs/withRedirectHoc";
import { AppRootStateType } from './redux/reduxStore';
import { Preloader } from './common/preloader/preloader';

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}
class App extends Component {

    componentDidMount(): void {
        //@ts-ignore
        this.props.setInitializedTC()
    }

    render=()=> {
        //@ts-ignore
        if(!this.props.initialized) {return <Preloader />}
        return (
            <div className="app">
                {/* <BrowserRouter> */}
                    <HeaderContainer />
                    <Sidebar />
                    <div className='content'>
                        <Routes>
                            <Route path="/profile/:userId?" element={<ProfileContainer />}></Route>
                            <Route path="/dialogs" element={<DialogsContainer />}></Route>
                            <Route path="/news" element={<News pageName='News' />}></Route>
                            <Route path="/music" element={<Music pageName='Music' />}></Route>
                            <Route path="/settings" element={<Settings pageName='Settings' />}></Route>
                            <Route path="/users" element={<UsersContainer />}></Route>
                            <Route path="/login" element={<Login />}></Route>
                        </Routes>
                    </div>
                {/* </BrowserRouter> */}

            </div>
        );
    }
}

const mapStateToProps=(state:AppRootStateType)=>({
    initialized:state.app.initialized
})
export default compose(withRouter,
    connect(mapStateToProps, { setInitializedTC }))(App)

