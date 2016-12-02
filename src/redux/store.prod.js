import { combineReducers } from 'redux'
import createStore from 'phenomic/lib/redux/createStore'
// eslint-disable-next-line import/no-namespace
import * as phenomicReducers from 'phenomic/lib/redux/modules'
import app from './reducers/app'

const store = createStore(
  combineReducers({
    ...phenomicReducers,
    ...{ app }
  }),
  { ...(typeof window !== 'undefined') && window.__INITIAL_STATE__ }
)

export default store
