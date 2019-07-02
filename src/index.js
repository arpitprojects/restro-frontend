import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './containers/Dashboard/Dashboard';
import Welcome from './containers/Welcome/Welcome';
import {Link , Route , BrowserRouter , Switch} from 'react-router-dom';
import NotFound from './containers/NotFound/NotFound';
import * as serviceWorker from './serviceWorker';

const routing = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Welcome} exact/>
            <Route path="/dashboard" component={Dashboard} exact />  
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
