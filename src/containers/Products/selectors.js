import { createStructuredSelector } from 'reselect';

const REDUCER = 'Products';

const productsList = state => state[REDUCER].productsList;
const productsFormFields = state => state[REDUCER].productsFormFields;

export default createStructuredSelector({
    productsList,
    productsFormFields
});