import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// import { state,add } from './state/state'
import { addNewPost ,updateNewPostText} from './state/state'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const rerender=(state:any)=>{
  root.render(
    <React.StrictMode>
        {/* <App state={state} callback={add}/> */}
        <App state={state} callback={addNewPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>
  );
}