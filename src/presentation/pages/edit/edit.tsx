import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { AppForm } from '../../components/Form/form'
import style from './edit.module.css'

export const EditPage: React.FunctionComponent = () => {

  const loginSuccess = useSelector((state: RootStateOrAny )=> state.loginSuccess);
  const updateSuccess = useSelector((state: RootStateOrAny )=> state.updateSuccess);
  const history = useHistory();

  return(
    <>
    { !loginSuccess &&  <Redirect to="/"/>}
    <section className='homeContainer'>
      <div className={style.container}>
        <header className={style.containerHeader}>
           <button onClick={()=> history.goBack()} className="backButton"><FontAwesomeIcon icon={faArrowLeft} />  Regresar</button>
        </header>
         <AppForm
           title="Editar perfil"
           isLoginSchema={false}
           buttonLabel="Guardar"
         />
         { updateSuccess  && <span> Actualización exitoso </span>}
      </div>
    </section>
    </>
  )
}