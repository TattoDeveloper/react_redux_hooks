import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import style from './login.module.css';
import { AppForm } from '../../components/Form/form';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Redirect } from 'react-router';


export const Login: React.FunctionComponent = () =>{
  const loginSuccess = useSelector((state: RootStateOrAny )=> state.loginSuccess);

  return(
    <section className={style.loginContainer}>
      <div className={`${style.loginInformation} flex-center`}>
          <div>
             <h2>Bienvenido, estamos esperando por tí</h2>
             <FontAwesomeIcon className={style.loginInformationIcon} icon={faRocket} />
          </div>
      </div>
      <div className={`${style.loginForm} flex-center`}>
           <AppForm />
           {loginSuccess && <Redirect to="/home"/>}
      </div>
    </section>
  )
}