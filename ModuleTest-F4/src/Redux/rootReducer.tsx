import {combineReducers } from 'redux'
import  reducer from './postReducer'

const rootReducer = combineReducers({
    post: reducer,
})

export default rootReducer;