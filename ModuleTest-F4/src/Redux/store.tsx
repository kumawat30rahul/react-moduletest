import { legacy_createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { initialState as postInitialState } from './postReducer'

// const initialState = {
//   post: postInitialState
// }
const store = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store