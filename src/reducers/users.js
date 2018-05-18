import * as Types from './../actions/Types';
var data = localStorage.getItem('users');
var initialState = data? true : false;

const users = (state = initialState, action) => {
    switch (action.type) {
        case Types.UPDATE:            
            console.log(action.user.result.token);
            if (action.user.result.token){
                localStorage.setItem('users', JSON.stringify(action.user.result.token))
                state=true;
            }
            return state;
        default: return state;
    }
}

export default users;