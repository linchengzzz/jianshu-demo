import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import { IconFont } from './static/iconfont/iconfont';
import App from './App';

ReactDOM.render((
    <>
        <App />
        <GlobalStyle />
        <IconFont />
    </>
), document.getElementById('root'));
