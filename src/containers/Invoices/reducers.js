import { combineReducers } from 'redux';

const initialState = {
    invoicesList: [
    ]
};
const invoicesList = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_INVOICES__SUCCESS':
            return action.data;
        default:
            return state;
    }
};

export default combineReducers({
    invoicesList
})
