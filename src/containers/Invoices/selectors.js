import { createStructuredSelector } from 'reselect';

const REDUCER = 'Invoices';

const invoicesList = state => state[REDUCER].invoicesList;

export default createStructuredSelector({
    invoicesList
});