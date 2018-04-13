

const initialState = {
    name: '',
    email: '',
    picture: ''
}

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const reducer = ( state=initialState, action ) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state, 
                name: action.payload.name,
                email: action.payload.email,
                picture: action.payload.picture
            };
        case 'LOGOUT':
            return {
                 ...state,
                 name: '',
                 email: '',
                 picture: ''
            };
        default:
            return state;
    }
}

export const login = (userInfo) => {
    return {
        type: LOGIN,
        payload: userInfo
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}

export default reducer