import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import createStore from 'phenomic/lib/redux/createStore'
// eslint-disable-next-line import/no-namespace
import * as phenomicReducers from 'phenomic/lib/redux/modules'
import app from './reducers/app'

const logger = createLogger()

const store = createStore(
  combineReducers({
    ...phenomicReducers,
    ...{ app }
  }),
  applyMiddleware(thunk, logger),
  { ...(typeof window !== 'undefined') && window.__INITIAL_STATE__ }
)

export default store
