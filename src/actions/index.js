import callApi from './../utils/apiCaller';
import * as Types from './Types';


export const actUpdateRequest = (user) => {
    return (dispatch) => {
        return callApi('login', 'POST', user).then(res=> {
            dispatch(actUpdate(res.data))
        })
    }
}

export const actUpdate = (user) => {
    return {
        type: Types.UPDATE,
        user
    }
}