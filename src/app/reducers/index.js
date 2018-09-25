import { combineReducers } from 'redux';

// calling the default reducer to create a link
import defaultReducer from './default-reducer';
import AllProductsReducer from './allProductsData'

const rootReducers = combineReducers({
    // add reducer files references here
    default: defaultReducer,
    allProductsReducer: AllProductsReducer
});

export default rootReducers;