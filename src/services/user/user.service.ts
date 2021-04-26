import { UserEntity } from '../../core/entities/user.entity';
import { UserRequest } from './entities/userRequest';
import { UserResponse } from './entities/userResponse';

const { REACT_APP_BASE_API_URL } = process.env
const getData = async (data?: UserRequest | UserEntity, complement: string='', method = 'POST'): Promise<any> =>{
 
   const request = await fetch(`${REACT_APP_BASE_API_URL}${complement}`,
      {
        method,
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      }
   );

   return await request.json()
}


export const singIng = async  ( user : UserRequest ): Promise<UserResponse>  => {
  //TODO: Para efecto del test se llama por medio de GET para, por el uso de json-server
  const [ response ]= await getData(undefined, `?q=${user.userName}`, 'GET');
  if(response  && response.password === user.password ){
     return {id: response.id, userName: response.userName}
  }
  throw Error('Credenciales incorrectas');
}


export const update= async ( user: UserEntity): Promise<void> => {
  return getData(user,`/${user.id}`, 'PATCH')
}