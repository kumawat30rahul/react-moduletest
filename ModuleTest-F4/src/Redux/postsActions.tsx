import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './postsType.js'


export const FetchUsers = () =>{
    return (dispatch:any) => {
        dispatch(fetchUserRequests());
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response =>  response.json())
      .then(data =>  dispatch(fetchUsersSuccess(data)))
      .catch((error) => {
          dispatch(fetchUsersFailure(error))
      })
    }
}


export const fetchUserRequests = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (data:any) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: data,
    }
}
export const fetchUsersFailure = (error:any) => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error,
    }
}