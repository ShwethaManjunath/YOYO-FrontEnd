import { combineReducers } from 'redux';

// calling the default reducer to create a link
import defaultReducer from './default-reducer';
import AllProductsReducer from './allProductsData'
import productReducer from './product-reducer';

const rootReducers = combineReducers({
    // add reducer files references here
    default: defaultReducer,
    allProductsReducer: AllProductsReducer,
    product: productReducer
});

export default rootReducers;