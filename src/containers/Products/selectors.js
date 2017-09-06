import { createStructuredSelector } from 'reselect';

const REDUCER = 'Products';

const productsList = state => state[REDUCER].productsList;

export default createStructuredSelector({
    productsList
});