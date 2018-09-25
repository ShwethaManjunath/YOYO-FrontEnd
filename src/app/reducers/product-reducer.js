import { FETCH_PRODUCT, ADD_COMMENT } from '../actions';

var productDetails = {};

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            productDetails = action.payload;
            return {
                ...state,
                item: action.payload
            };
        case ADD_COMMENT:
            productDetails.comments.unshift(action.payload);
            return {
                ...state,
                item: {
                    ...state.item,
                    comments: productDetails.comments
                }
            };
        default:
            return state;
    }
}