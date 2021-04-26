import { EDIT_PROFILE_FAILED, EDIT_PROFILE_SUCCESS, LOADING, LOGIN_ATTEMP, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from '../actions/actions-type'

const initialState ={
    currentUser: {},
    loading: false,
    loginSuccess: false,
    updateSuccess: false,
    error:{
      isError: false,
      message: ''
    }
}

interface Action{
  type: string
  payload: any
}



export  const userReducer = (state=initialState, action: Action) =>{
        switch(action.type){
         case LOADING:
            return {...state, loading: action.payload, };
           case LOGIN_SUCCESS:
            return {...state, currentUser: action.payload, loading: false, loginSuccess: true}
          case LOGIN_FAILED: case EDIT_PROFILE_FAILED:
            return {...state, error: action.payload, loading: false} 
          case EDIT_PROFILE_SUCCESS:
            return {...state, currentUser: action.payload, loading: false, updateSuccess:true }
          case LOGOUT:
            return{...state, currentUser:{}, loginSuccess: action.payload }
          default:
           return state;
        }
}