/** **********************************************
 * Add all reducers to this file for combine it. *
 *************************************************/

import { combineReducers } from 'redux';

import Invoices from './containers/Invoices/reducers';
import Products from './containers/Products/reducers';
import Customers from './containers/Customers/reducers';
import InvoiceCreate from './containers/InvoiceCreate/reducers';

const rootReducer = combineReducers({
    Invoices,
    Products,
    Customers,
    InvoiceCreate
});

export default rootReducer;
