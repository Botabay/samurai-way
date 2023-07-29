import "./App.css";
import { Routes, Route } from "react-router-dom";
import { News } from "./components/content/News/News";
import { Music } from "./components/content/Music/Music";
import { Settings } from "./components/content/Settings/Settings";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { UsersContainer } from "./components/content/Users/UsersContainer";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { Login } from "./components/Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component, FC, Suspense } from "react";
import { setInitializedTC } from "./redux/appReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppRootStateType } from "./redux/reduxStore";
import { Preloader } from "./common/preloader/preloader";

// import { DialogsContainer } from "./components/content/Dialogs/DialogsContainer";
// import { ProfileContainer } from "./components/content/Profile/ProfileContainer";
// const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
const DialogsContainer = React.lazy(
  //@ts-ignore
  () =>
    import("./components/content/Dialogs/DialogsContainer").then((module) => ({
      default: module.DialogsContainer,
    }))
);
// const MyComponent = React.lazy(() => import('./myModule').then(module => ({ default: module.MyComponent })));
const ProfileContainer = React.lazy(
  //@ts-ignore
  () =>
    import("./components/content/Profile/ProfileContainer").then((module) => ({
      default: module.ProfileContainer,
    }))
);
function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
class App extends Component {
  componentDidMount(): void {
    //@ts-ignore
    this.props.setInitializedTC();
  }

  render = () => {
    //@ts-ignore
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app">
        {/* <BrowserRouter> */}
        <HeaderContainer />
        <Sidebar />
        <div className="content">
          <Suspense fallback={<div>loading...</div>}>
            <Routes>
              <Route
                path="/profile/:userId?"
                element={
                  // <Suspense fallback={<div>loading...</div>}>
                  <ProfileContainer />
                  // </Suspense>
                }
              />
              <Route
                path="/dialogs"
                element={
                  // <Suspense fallback={<div>loading...</div>}>
                  <DialogsContainer />
                  // </Suspense>
                }
              />

              <Route path="/news" element={<News pageName="News" />} />
              <Route path="/music" element={<Music pageName="Music" />} />
              <Route
                path="/settings"
                element={<Settings pageName="Settings" />}
              ></Route>
              <Route path="/users" element={<UsersContainer />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </Suspense>
        </div>
        {/* </BrowserRouter> */}
      </div>
    );
  };
}

const mapStateToProps = (state: AppRootStateType) => ({
  initialized: state.app.initialized,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { setInitializedTC })
)(App);
