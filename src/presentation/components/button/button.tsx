import { MouseEventHandler } from 'react';
import style from './button.module.css';

export interface ButtonProps{
  label: string;
  handler?: MouseEventHandler
  type?: 'submit'
}

export const Button: React.FunctionComponent<ButtonProps> = 
( {label, handler, type }: ButtonProps )=>(
  <button className={style.button} type={type} onClick={handler}>{ label }</button>
)