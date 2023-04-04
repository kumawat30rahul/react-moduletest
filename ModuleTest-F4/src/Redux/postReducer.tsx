import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './postsType.js'

export const initislState={
    pending: false,
    postsData: [],
    error: '',
}

const postReducer = (state=initislState, action:any) => {
    switch(action.type){
        case FETCH_POST_REQUEST:
            return{...state, pending: true,}
        case FETCH_POST_SUCCESS:
            return{ ...state, pending:false, postsData: action.value, error: ''}
        case FETCH_POST_FAILURE:
            return{ pending: false, postsData: [], error: action.value}
        default:
            return state
    }
}

export default postReducer