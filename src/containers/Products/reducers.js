import { combineReducers } from 'redux';

const initialState = {
    productsList: [
    ]
};
const productsList = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return action.data;
        default:
            return state;
    }
};

export default combineReducers({
    productsList
})
