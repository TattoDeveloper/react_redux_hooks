import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import style from './home.module.css';
import { Button } from '../../components/button/button';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../../../redux/actions/actions';

export const HomePage: React.FunctionComponent = () =>{

  const userName = useSelector((state: RootStateOrAny ) => state.currentUser.userName)
  const loginSuccess = useSelector((state: RootStateOrAny )=> state.loginSuccess);
  const history = useHistory();
  
  const dispatch = useDispatch();

  const changeProfile =() : void =>{
       history.push('/edit')
  }

  const closeSession = () => {
    dispatch(logout()); 
    history.push("/")
  }

  return (
    <>
    { !loginSuccess &&  <Redirect to="/"/>}
    <section className='homeContainer'>
       <div className={style.homeUserInfo}>
          <button onClick={ closeSession } className="backButton bottom-positioned" ><FontAwesomeIcon icon={faArrowLeft} />  Salir</button>
          <FontAwesomeIcon className={style.homeUserInfoAvatar} icon={faUserCircle} />
          <p>Te damos la bienvenida</p>
          <h2>{ userName }</h2>
          <Button label="Cambiar" handler={changeProfile} />
       </div>
    </section>
    </>
  )
};