/** **********************************************
 * Add all reducers to this file for combine it. *
 *************************************************/

import { combineReducers } from 'redux';

import Invoices from './containers/Invoices/reducers';
import Products from './containers/Products/reducers';
import Customers from './containers/Customers/reducers';

const rootReducer = combineReducers({
    Invoices,
    Products,
    Customers
});

export default rootReducer;
