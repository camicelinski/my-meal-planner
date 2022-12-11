import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

const initState = {}

const store = createStore(reducers, initState, composeWithDevTools(applyMiddleware(thunk)))

export default store
