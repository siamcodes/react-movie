import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; //เรียกใช้ npm i antd
import 'bootstrap/dist/css/bootstrap.css';  //เรียกใช้  npm i bootstrap
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));

serviceWorker.unregister();
