import { Field, Formik, Form } from 'formik';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup'
import { string } from 'yup/lib/locale';
import { edit, login } from '../../../redux/actions/actions';
import { Button } from '../button/button';
import style from './login-form.module.css'

export interface LoginFormData{
  userName: string;
  password: string;
}

interface AppFormParams{
   buttonLabel?: string,
   title?: string,
   isLoginSchema?: boolean
}

const loginSchema = Yup.object().shape({
  userName: Yup.string()
            .min(4, 'El mínimo de caracteres')
            .max(10, 'El máximo de caracteres')
            .required('Este campo es obligatiorio'),
  password: Yup.string()
            .min(6, 'El mínimo de caracteres')
            .required('Este campo es obligatiorio')
})

const editSchema = Yup.object().shape({
  userName: Yup.string()
            .min(4, 'El mínimo de caracteres')
            .max(10, 'El máximo de caracteres')
            .required('Este campo es obligatiorio'),
  password: Yup.string()
            .min(6, 'El mínimo de caracteres')
            .max(10, 'El máximo de caracteres')
            .required('Este campo es obligatiorio')
})



export const AppForm: React.FunctionComponent<AppFormParams> = ({title="Iniciar sesión", isLoginSchema= true ,buttonLabel="Ingresar"}: AppFormParams)=>{


  const user = useSelector((state: RootStateOrAny ) => state.currentUser)

  const initialValues: LoginFormData ={
    userName: user.userName || '',
    password: user.password || ''
  }
  const dispatch = useDispatch();
  const error = useSelector((state: RootStateOrAny )=> state.error);


  const onSubmit=(values: LoginFormData): void =>{
       dispatch(isLoginSchema ? login(values) :
        edit({id: user.id, ...values}))
  }
   
  return (
        <div className={style.loginForm}>
             <h3>{title}</h3>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={isLoginSchema ? loginSchema : editSchema}
            >
                {({errors, touched})=>(
                  <Form>
                    <label>Nombre de usurio</label>
                    {(errors.userName && touched.userName) && <span className={style.formErrors}>{errors.userName}</span> }
                    <Field  type="text" name="userName" placeholder="Escribe tu nombre de usuario"/>
                    <label>contraseña</label>
                    {(errors.password && touched.password) && <span className={style.formErrors}>{errors.password}</span> }
                    <Field type="password" name="password" placeholder="Escribe tu contraseña"/>
                    <Button label={buttonLabel}/>
                  </Form>
                )}
            </Formik>
            {error.isError && <span className={style.formErrors}>{error.message}</span>}
          </div>
  )
}