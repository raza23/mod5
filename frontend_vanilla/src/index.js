import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "semantic-ui-css/semantic.min.css"
import {default as App} from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root')
    );

