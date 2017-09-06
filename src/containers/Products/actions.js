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
}
