import { combineReducers } from 'redux';

const initialState = {
    productsList: [
    ],
    formFields: {
        name: '',
        price: ''
    }
};
const productsList = (state = initialState.productsList, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return action.data;
        case 'POST_PRODUCTS_SUCCESS':
            let newProductsList = [...state];
            newProductsList.push({
                id: action.returnData.id,
                name: action.returnData.name,
                price: action.returnData.price,
                createdAt: action.returnData.createdAt,
                updatedAt: action.returnData.updatedAt
            });
            return newProductsList;
        default:
            return state;
    }
};
const formFields = (state = initialState.formFields, action) => {
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
    productsList,
    formFields
})
