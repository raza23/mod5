import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from 'actions';
const OPP_URL = 'http://localhost:3000/api/v1/oppurtunity'



function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch(OPP_URL)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res.products);
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;