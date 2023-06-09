import ReactDOM from 'react-dom/client';
// import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { AppRootStateType, store } from './redux/reduxStore'
// import { Provider } from './contextTemp';
import { Provider } from 'react-redux';
// import {rerender} from './rerender'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// const rerender = () => {
  root.render(
    //  <Provider store={store as AppRootStateType}> 
    <Provider store={store as any}>
      <App />
    </Provider>
  );
// }
// rerender()
// store.subscribe(rerender)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
