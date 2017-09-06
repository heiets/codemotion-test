import { combineReducers } from 'redux';

const initialState = {
    customersList: [
    ],
    customersFormFields: {
        name: '',
        address: '',
        phone: ''
    }
};
const customersList = (state = initialState.customersList, action) => {
    switch (action.type) {
        case 'FETCH_CUSTOMERS_SUCCESS':
            return action.data;
        case 'POST_CUSTOMERS_SUCCESS':
            let newCustomersList = [...state];
            newCustomersList.push({
                id: action.returnData.id,
                name: action.returnData.name,
                address: action.returnData.address,
                phone: action.returnData.phone,
                createdAt: action.returnData.createdAt,
                updatedAt: action.returnData.updatedAt
            });
            return newCustomersList;
        default:
            return state;
    }
};
const customersFormFields = (state = initialState.customersFormFields, action) => {
    switch (action.type) {
        case 'EDIT_FIELD':
            return {
                ...state,
                [action.field]: action.value
            };
        default:
            return state;
    }
};

export default combineReducers({
    customersList,
    customersFormFields
})
