import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "./feature/store";
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
       <div className='image'><img src='https://www.innomatics.in/wp-content/uploads/2023/01/Innomatics-Logo1.png' ></img></div>
        <App />
      </BrowserRouter>

    </Provider>

  </React.StrictMode>

);

