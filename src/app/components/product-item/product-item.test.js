import React from 'react';
import '../../../jestSetup';
import ProductItem from './product-item';
import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducers from '../../reducers';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

const store = createStore(
  reducers,
  applyMiddleware(logger, ReduxPromise, ReduxThunk)
);

describe('<ProductItem/>', () => {
    let wrapper = shallow(<ProductItem store={store}/>);

    it('render the connected component', () => {
        expect(wrapper.length).toEqual(1)
    });
});