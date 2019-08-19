import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk)
export default createStore(reducer, middleware)

// export default function configureStore() {
//     let store = createStore(reducer, applyMiddleware(promise))
//     return store
// }