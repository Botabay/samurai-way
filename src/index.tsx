import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

// import { state,addNewPost,updateNewMessageText,updateNewPostText,addNewMessage, subscribe } from './state/state'
import { AppRootStateType, store } from './redux/reduxStore'
import { Provider } from './contextTemp';
// import {rerender} from './rerender'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const rerender=()=>{
//   root.render(
//     <React.StrictMode>
//         <App state={state} callback={add}/>
//     </React.StrictMode>
//   );
// }
const rerender = () => {
  root.render(
    <React.StrictMode>
      {/* <App state={state} callback={add}/> */}
      {/* <App state={state} addNewPost={store.addNewPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}
            addNewMessage={store.addNewMessage.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)} */}
      {/* <TContext.Provider value={store as AppRootStateType}> */}
      <Provider value={store as any}>
        <App />
      </Provider>

    </React.StrictMode>
  );
}
rerender()
store.subscribe(rerender)
// root.render(
//   <React.StrictMode>
//       <App state={state} callback={add}/>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
