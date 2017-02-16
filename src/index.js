import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import RootContainer from './containers/RootContainer';
import memoRooshApp from './reducers';

import './less/main.less';

let store = createStore(memoRooshApp);

render(
    <Provider store={store}>
        <RootContainer />
    </Provider>,
    document.getElementById('react-root')
);