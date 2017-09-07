import { combineReducers } from 'redux';

const initialState = {
    productsList: [
    ],
    productsFormFields: {
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
const productsFormFields = (state = initialState.productsFormFields, action) => {
    switch (action.type) {
        case 'EDIT_FIELD':
            return {
                ...state,
                [action.field]: action.value
            };
        case 'POST_PRODUCTS_SUCCESS':
            return {
                name: '',
                price: ''
            };
        default:
            return state;
    }
};

export default combineReducers({
    productsList,
    productsFormFields
})
