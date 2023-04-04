import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './postsType.js'

export const FetchPosts = () =>{
    return (dispatch:any) => {
        dispatch(postRequest());
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res =>  res.json())
      .then(data =>  dispatch(postSuccess(data)))
      .catch((error) => {
          dispatch(postFailure(error))
      })
    }
}

export const postRequest = () => {
    return {
        type: FETCH_POST_REQUEST
    }
}
export const postSuccess = (data:any) => {
    return{
        type: FETCH_POST_SUCCESS,
        value: data,
    }
}
export const postFailure = (error:any) => {
    return{
        type: FETCH_POST_FAILURE,
        value: error,
    }
}