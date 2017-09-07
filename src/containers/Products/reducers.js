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
            const newProducts = Object.keys(action.data).reduce((prev, curr) => ({
                ...prev,
                [action.data[curr].id]: {
                    ...action.data[curr]
                }
            }), {});
            return newProducts;
        case 'POST_PRODUCT_SUCCESS':
            return {
                ...state,
                [action.returnData.id]: {
                    id: action.returnData.id,
                    name: action.returnData.name,
                    price: action.returnData.price,
                    createdAt: action.returnData.createdAt,
                    updatedAt: action.returnData.updatedAt
                 }
            };
        case 'DELETE_PRODUCT_SUCCESS':
            let newProductsListDelete = {...state};
            delete newProductsListDelete[action.returnData.id];
            return newProductsListDelete;
        default:
            return state;
    }
};
const productsFormFields = (state = initialState.productsFormFields, action) => {
    switch (action.type) {
        case 'EDIT_FIELD_PRODUCT':
            return {
                ...state,
                [action.field]: action.value
            };
        case 'POST_PRODUCT_SUCCESS':
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
