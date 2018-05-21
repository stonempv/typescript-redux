import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { RootState } from'./reducers'
import Root from './Root';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const RootStore: RootState | null = createStore(rootReducer)
ReactDOM.render(
  <Root store={RootStore}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
