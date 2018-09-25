import { combineReducers } from 'redux';

// calling the default reducer to create a link
import defaultReducer from './default-reducer';
import productReducer from './product-reducer';

const rootReducers = combineReducers({
    // add reducer files references here
    default: defaultReducer,
    product: productReducer
});

export default rootReducers;