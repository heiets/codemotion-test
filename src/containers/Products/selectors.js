import { createStructuredSelector } from 'reselect';

const REDUCER = 'Products';

const productsList = state => state[REDUCER].productsList;
const formFields = state => state[REDUCER].formFields;

export default createStructuredSelector({
    productsList,
    formFields
});