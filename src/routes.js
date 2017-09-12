import React from 'react';
import {  Route, IndexRoute } from 'react-router';

import Invoices from './containers/Invoices/Invoices';
import Products from './containers/Products/Products';
import Customers from './containers/Customers/Customers';
import InvoiceCreate from './containers/InvoiceCreate/InvoiceCreate';
import Home from './containers/Home/Home';

export default (
    <Route path="/" component={Home}>
        <IndexRoute component={Invoices} />
        <Route path="/create-invoice" component={InvoiceCreate}/>
        <Route path="/products" component={Products}/>
        <Route path="/customers" component={Customers}/>
    </Route>
);