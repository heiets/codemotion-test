export const fetchInvoices = () => {
    return dispatch => {
        dispatch({
            type: 'FETCH_INVOICES_REQUEST'
        });
        fetch('/api/invoices').then(function(response) {
            return response.json();
        })
            .then(function(json) {
                dispatch({
                    type: 'FETCH_INVOICES__SUCCESS',
                    data: json
                })
            })
    }
}
