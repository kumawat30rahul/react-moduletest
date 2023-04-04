import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './postsType.js'

export const initislState={
    loading: false,
    posts: [],
    error: '',
}

const reducer = (state=initislState, action:any) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                posts: action.payload,
                error: '',
            }
        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                posts: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer