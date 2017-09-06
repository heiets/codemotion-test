export const fetchCustomers = () => {
    return dispatch => {
        dispatch({
            type: 'FETCH_CUSTOMERS_REQUEST'
        });
        fetch('/api/customers').then(function(response) {
            return response.json();
        })
        .then(function(json) {
            dispatch({
                type: 'FETCH_CUSTOMERS_SUCCESS',
                data: json
            })
        })
    }
};
export const addCustomer = (jsonToPost) => {
    return dispatch => {
        dispatch({
            type: 'POST_CUSTOMERS_REQUEST'
        });
        fetch('/api/customers', {
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
                    type: 'POST_CUSTOMERS_SUCCESS',
                    returnData: json
                })
            })
    }
};
export const editField = (field, value) => {
    return {
        type: 'EDIT_FIELD',
        field,
        value
    }
};
