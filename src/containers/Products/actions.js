export const fetchProducts = () => {
    return dispatch => {
        dispatch({
            type: 'FETCH_PRODUCTS_REQUEST'
        });
        fetch('/api/products').then(function(response) {
            return response.json();
        })
            .then(function(json) {
                dispatch({
                    type: 'FETCH_PRODUCTS_SUCCESS',
                    data: json
                })
            })
    }
};
export const addProduct = (jsonToPost) => {
    return dispatch => {
        dispatch({
            type: 'POST_PRODUCT_REQUEST'
        });
        fetch('/api/products', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(jsonToPost)
            }).then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch({
                    type: 'POST_PRODUCT_SUCCESS',
                    returnData: json
                })
            })
    }
};
export const deleteProduct = (id) => {
    return dispatch => {
        dispatch({
            type: 'DELETE_PRODUCT_REQUEST'
        });
        fetch(`/api/products/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        }).then(function(response) {
            return response.json();
        })
            .then(function(json) {
                dispatch({
                    type: 'DELETE_PRODUCT_SUCCESS',
                    returnData: json
                })
            })
    }
};
export const editField = (field, value) => {
    return {
        type: 'EDIT_FIELD_PRODUCT',
        field,
        value
    }
};
