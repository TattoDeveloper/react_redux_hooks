import { UserEntity } from './../../core/entities/user.entity';
import { update } from './../../services/user/user.service';
import { LoginFormData } from '../../presentation/components/Form/form';
import { LOGIN_SUCCESS, LOGIN_FAILED, LOADING, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILED, LOGOUT } from './actions-type';
import { singIng } from '../../services/user/user.service';


const loading = () => ({
  type: LOADING,
  payload: true
})

const loginSuccess = (user: any) => (
  {
    type: LOGIN_SUCCESS,
    payload: user
  }
)

const loginFailed = (error: any) => (
  {
    type: LOGIN_FAILED,
    payload: error
  }
)

const editSuccess = (user: any) => (
  {
    type: EDIT_PROFILE_SUCCESS,
    payload: user
  }
)

const editFailed = (user: any) => (
  {
    type: EDIT_PROFILE_FAILED,
    payload: user
  }
)

const logoutAction = () => (
  {
    type: LOGOUT,
    payload: false,
  }
)


export const login = ( values : LoginFormData) =>{
  return async ( dispatch: Function )=> {
        dispatch(loading());
       try{
         const response = await singIng({userName: values.userName, password: values.password});
         dispatch(loginSuccess(response));
       }catch( error ){
         dispatch(loginFailed({isError:true, message: error.message}))
       }
  }
}

export const edit = ( values : UserEntity) =>{
 return async ( dispatch: Function )=> {
       dispatch(loading());
      try{
        const response = await update({id: values.id, userName: values.userName, password: values.password});
        dispatch(editSuccess(response));
      }catch( error ){
        dispatch(editFailed({isError:true, message: error.message}))
      }
 }
}

export const logout = () => {
  return ( dispatch: Function ) => {
     dispatch(logoutAction())
  }
}