import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './store/configureStore';

import Invoices from './containers/Invoices/Invoices';
import Products from './containers/Products/Products';
import Home from './containers/Home/Home';


export const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
                <IndexRoute component={Invoices} />
                <Route path="/products" component={Products}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root'),
);